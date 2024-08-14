import Image from "next/image";
import React from "react";
import shape37 from "@/assets/img/shape/37.png";

import ContactInfo from "@/components/contact/ContactInfo";
import Register from "./Register";

const RegisterUsContent = () => {
  return (
    <>
      <div className={`contact-style-one-area overflow-hidden default-padding`}>
        <div className="contact-shape">
          <Image src={shape37} alt="Image Not Found" />
        </div>
        <div className="container">
          <div className="row align-center">
            <div className="contact-stye-one col-lg-5 mb-md-50 mb-xs-20">
              <ContactInfo />
            </div>
            <div className="contact-stye-one col-lg-7 pl-60 pl-md-15 pl-xs-15">
              <div className="contact-form-style-one">
                <h2 className="sub-title">Register</h2>
                {/* <h2 className="heading">Send us a Massage</h2> */}
                <Register />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default RegisterUsContent;
