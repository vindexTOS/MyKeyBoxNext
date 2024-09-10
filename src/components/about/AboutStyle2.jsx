import Image from "next/image";
import React from "react";
import about7Thumb from "@/assets/img/box/KeyBox.jpg";
import about8Thumb from "@/assets/img/box/2.jpg";
import anim5Shape from "@/assets/img/shape/anim-5.png";
import about1Thumb from "@/assets/img/box/th (5).jpg";
import about2Thumb from "@/assets/img/box/th (3).jpg";
import Link from "next/link";

const AboutStyle2 = ({ sectionClass }) => {
  return (
    <>
      <div
        className={`about-style-two-area overflow-hidden bg-contain default-padding ${
          sectionClass ? sectionClass : ""
        }`}
        // style={{ backgroundImage: `url(/assets/img/shape/29.png)` }}
      >
        <div className="container">
          <div className="row align-center">
            <div className="col-lg-5 about-style-two">
              <div className="thumb">
                <Image src={about8Thumb} alt="Image Not Found" />
                {/* <Image src={about7Thumb} alt="Image Not Found" /> */}
                {/* <div className="experience">
                  <h2>
                    <strong>15</strong> Years experience
                  </h2>
                </div> */}
                <div className="shape">
                  <Image src={anim5Shape} alt="Shape" />
                </div>
              </div>
            </div>
            <div className="about-style-two col-lg-6 offset-lg-1">
              <h1 className="sub-heading">
                MyKeyBox Virtual Service Advisor Kiosk
              </h1>
              <p>
                The Virtual Service Advisor provides customers a self-led
                service check-in to help lower wait times, speed up the process,
                and allow dealerships to capture additional profits.
              </p>
              <div className="default-features mt-30 row">
                {/* <div
                  className="col-lg-3"
                  style={{
                    width: "150px",
                    height: "150px",
                  }}
                >
                  <Image
                    style={{ borderRadius: 5 }}
                    src={about1Thumb}
                    alt="Image Not Found"
                  />
                </div>
                <div
                  className="col-lg-3"
                  style={{ width: "150px", height: "150px" }}
                >
                  <Image
                    style={{ borderRadius: 5 }}
                    src={about2Thumb}
                    alt="Image Not Found"
                  />
                </div> */}
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default AboutStyle2;
