import React from "react";
import LayoutStyle7 from "@/components/Layouts/LayoutStyle7";

import ElementProviderWrapper from "@/components/payments/CheckoutForm";
export const metadata = {
  title: "Payment ",
};

const PaymentsPage = () => {
  return (
    <>
      <LayoutStyle7 breadCrumb="Checkout" title="Complete Your Payment">
        <ElementProviderWrapper />
      </LayoutStyle7>
    </>
  );
};

export default PaymentsPage;
