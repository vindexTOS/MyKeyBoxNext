import LoginUsContent from "@/components/header/Login/LoginUsContent";
import LayoutStyle7 from "@/components/Layouts/LayoutStyle7";
import React from "react";

export const metadata = {
  title: "Login",
};

const LoginComponent = () => {
  return (
    <>
      <LayoutStyle7 breadCrumb="Login" title="Login">
        <LoginUsContent />
        {/* <ContactMap /> */}
      </LayoutStyle7>
    </>
  );
};

export default LoginComponent;
