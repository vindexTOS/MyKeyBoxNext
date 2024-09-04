import Image from "next/image";
import React from "react";
import about7Thumb from "@/assets/img/box/KeyBox.jpg";
import about8Thumb from "@/assets/img/box/yy.jpg";
import anim5Shape from "@/assets/img/shape/anim-5.png";
import about1Thumb from "@/assets/img/box/th (5).jpg";
import about2Thumb from "@/assets/img/box/th (3).jpg";
import Link from "next/link";
const About1Card = ({ sectionClass }) => {
  return (
    <>
      <div
        className={`about-style-two-area overflow-hidden bg-contain default-padding ${
          sectionClass ? sectionClass : ""
        }`}
        style={{ backgroundImage: `url(/assets/img/shape/29.png)` }}
      >
        <div className="container">
          <div className="row align-center">
            <div className="about-style-two col-lg-6 offset-lg-1">
              <h1 className="sub-heading">The Best Service</h1>
              <p>
                Meet the demands of the modern customer at your dealership with
                the MyKeyBox automotive kiosk.
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
            <div className="col-lg-5 about-style-two">
              <div className="thumb">
                <div
                  style={{
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                  }}
                >
                  <video
                    width="110%"
                    height="auto"
                    controls
                    alt="Video Not Found"
                    autoPlay
                  >
                    <source
                      src="/assets/video/MyKeyBox_OR.mp4"
                      type="video/mp4"
                    />
                  </video>
                </div>
                <div className="shape">
                  <Image src={anim5Shape} alt="Shape" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default About1Card;
