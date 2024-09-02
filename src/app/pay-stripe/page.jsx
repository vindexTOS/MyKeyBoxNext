"use client";
import React, { useState } from "react";
import LayoutStyle7 from "@/components/Layouts/LayoutStyle7";
import { loadStripe } from "@stripe/stripe-js";
import Image from "next/image";
import {
  Elements,
  useStripe,
  useElements,
  CardNumberElement,
  CardExpiryElement,
  CardCvcElement,
} from "@stripe/react-stripe-js";

import payment from "../../../public/assets/img/HeaderImg/payment.webp";

const stripePromise = loadStripe(
  process.env.NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY
);

const CheckoutForm = () => {
  const stripe = useStripe();
  const elements = useElements();
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (event) => {
    event.preventDefault();
    setLoading(true);

    if (!stripe || !elements) {
      return;
    }

    const cardNumberElement = elements.getElement(CardNumberElement);

    const { error: backendError, clientSecret } = await fetch(
      "/api/payment_intent",
      {
        method: "POST",
      }
    ).then((r) => r.json());

    if (backendError) {
      setError(backendError.message);
      setLoading(false);
      return;
    }

    // Confirm the payment with Stripe
    const { error: stripeError } = await stripe.confirmCardPayment(
      clientSecret,
      {
        payment_method: {
          card: cardNumberElement,
        },
      }
    );

    if (stripeError) {
      setError(stripeError.message);
    } else {
      // Payment succeeded
      alert("Payment successful!");
    }

    setLoading(false);
  };

  return (
    <div
      className=" h-500"
      style={{
        display: "flex",
        justifyContent: "center",
        alignContent: "center",
      }}
    >
      <form
        onSubmit={handleSubmit}
        className="mt-4 p-4 border rounded shadow-sm bg-light w-50"
        style={{ height: "350px" }}
      >
        <div className="mb-3">
          <label htmlFor="card-number-element" className="form-label">
            Card Number
          </label>
          <div className="form-control p-2" id="card-number-element">
            <CardNumberElement />
          </div>
        </div>
        <div className="mb-3">
          <label htmlFor="card-expiry-element" className="form-label">
            Expiry Date
          </label>
          <div className="form-control p-2" id="card-expiry-element">
            <CardExpiryElement />
          </div>
        </div>
        <div className="mb-3">
          <label htmlFor="card-cvc-element" className="form-label">
            CVC
          </label>
          <div className="form-control p-2" id="card-cvc-element">
            <CardCvcElement />
          </div>
        </div>
        {error && <div className="alert alert-danger mt-3">{error}</div>}
        <button
          type="submit"
          disabled={!stripe || loading}
          className="btn btn-primary w-100 mt-80"
        >
          {loading ? "Processing..." : "Pay"}
        </button>
      </form>
      <div style={{ width: "40%", height: "auto" }}>
        <Image src={payment} alt="Payment method" />
      </div>
    </div>
  );
};

export default function Page() {
  return (
    <>
      <LayoutStyle7 breadCrumb="Checkout" title="Complete Your Payment">
        <Elements stripe={stripePromise}>
          <CheckoutForm />
        </Elements>
      </LayoutStyle7>
    </>
  );
}
