import ForgotUsContent from "@/components/header/ForgotPassword/ForgotUsContent";

import LayoutStyle7 from "@/components/Layouts/LayoutStyle7";
import React from "react";

export const metadata = {
  title: "Forget Password",
};

const LoginComponent = () => {
  return (
    <>
      <LayoutStyle7 breadCrumb="Forget Password" title="Forget Password">
        <ForgotUsContent />
        {/* <ContactMap /> */}
      </LayoutStyle7>
    </>
  );
};

export default LoginComponent;
