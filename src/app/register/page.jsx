import RegisterUsContent from "@/components/header/Register/RegisterUsContent";
import LayoutStyle7 from "@/components/Layouts/LayoutStyle7";
import React from "react";

export const metadata = {
  title: "Register",
};

const RegisterComponent = () => {
  return (
    <>
      <LayoutStyle7 breadCrumb="Register" title="Register">
        <RegisterUsContent />
        {/* <ContactMap /> */}
      </LayoutStyle7>
    </>
  );
};

export default RegisterComponent;
