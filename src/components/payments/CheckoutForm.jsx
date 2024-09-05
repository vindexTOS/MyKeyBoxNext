"use client";
import React, { useState, useEffect, useRef } from "react";
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

import payment from "../../../public/assets/img/HeaderImg/payments1.jpg";
import amex from "../../../public/assets/img/payments/american-express.png";
import dinersClub from "../../../public/assets/img/payments/diners-club.png";
import discover from "../../../public/assets/img/payments/discover.png";
import jcb from "../../../public/assets/img/payments/jcb.png";
import maestro from "../../../public/assets/img/payments/maestro.png";
import masterCard from "../../../public/assets/img/payments/masterCard.png";
import unionPay from "../../../public/assets/img/payments/unionpay.png";
import visa from "../../../public/assets/img/payments/visa.png";
import "../../../public/assets/css/payments.css";

const stripePromise = loadStripe(
  process.env.NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY
);

const cardBrandToLogoMap = {
  visa: visa,
  mastercard: masterCard,
  amex: amex,
  discover: discover,
  jcb: jcb,
  diners: dinersClub,
  unionpay: unionPay,
  maestro: maestro,
};

const CheckoutForm = () => {
  const stripe = useStripe();
  const elements = useElements();
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);
  const [cardBrand, setCardBrand] = useState("");
  const [showAuthOptions, setShowAuthOptions] = useState(false);

  const usernameRef = useRef(null);

  useEffect(() => {
    usernameRef.current.scrollIntoView({ behavior: "smooth", block: "center" });
    usernameRef.current.focus();
  }, []);

  const handleCardChange = (event) => {
    if (event.brand) {
      setCardBrand(event.brand);
    }
    if (event.error) {
      setError(event.error.message);
    } else {
      setError(null);
    }
  };

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
      alert("Payment successful!");
    }

    setLoading(false);
  };

  return (
    <div
      className="d-flex flex-column flex-md-row justify-content-evenly align-items-start mt-10 about-style-two-area overflow-hidden bg-contain default-padding"
      style={{
        minHeight: "500px",
        backgroundImage: `url(/assets/img/shape/29.png)`,
      }}
    >
      <form
        onSubmit={handleSubmit}
        className="p-4 border rounded shadow-sm bg-light w-100 w-md-50"
        style={{ maxWidth: "500px", height: "auto" }}
      >
        <div className="mb-3 position-relative">
          <label htmlFor="card-number-element" className="form-label">
            Card Number
          </label>
          <div className="d-flex align-items-center">
            <div className="flex-grow-1">
              <div
                ref={usernameRef}
                className="form-control p-2"
                id="card-number-element"
              >
                <CardNumberElement onChange={handleCardChange} />
              </div>
            </div>
            {cardBrand && cardBrandToLogoMap[cardBrand] && (
              <div className="ms-2 ">
                <Image
                  src={cardBrandToLogoMap[cardBrand]}
                  alt={`${cardBrand} logo`}
                  width={30}
                  height={20}
                />
              </div>
            )}
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
          className="btn btn-primary w-100 mt-3"
        >
          {loading ? "Processing..." : "Pay"}
        </button>
      </form>
      <div
        className={`ms-3 mt-4 mt-md-0 d-flex justify-content-center align-items-center ${
          showAuthOptions ? "" : "d-none d-md-block"
        }`}
        style={{ maxWidth: "610px" }}
      >
        <Image src={payment} alt="Payment method" layout="responsive" />
      </div>
    </div>
  );
};

const ElementProviderWrapper = () => {
  return (
    <Elements stripe={stripePromise}>
      <CheckoutForm />
    </Elements>
  );
};

export default ElementProviderWrapper;
