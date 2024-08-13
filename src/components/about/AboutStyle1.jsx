import Image from "next/image";
import React from "react";
import anim1Thumb from "@/assets/img/shape/anim-1.png";
import anim2Thumb from "@/assets/img/shape/anim-2.png";
import anim3Thumb from "@/assets/img/shape/anim-3.png";
import anim4Thumb from "@/assets/img/shape/anim-4.png";
import aboutThumb from "@/assets/img/about/1.jpg";
import signatureThumb from "@/assets/img/signature.png";
import About1Card from "./About1Card";

const AboutStyle1 = () => {
  return (
    <>
      <div className="about-style-one-area default-padding">
        <div className="shape-animated-left">
          <Image src={anim1Thumb} alt="Image Not Found" />
          <Image src={anim2Thumb} alt="Image Not Found" />
        </div>
        <div className="container">
          <div className="row align-center">
            <div>
              <div className="h4 sub-heading">
                Welcome to MyKeyBox – Pioneering Excellence in Car Transport
                Logistics!
              </div>
              <h2 className="title mb-25">About Us:</h2>
              <p>
                At MyKeyBox, we take pride in being the driving force behind a
                revolutionary transformation in car transport logistics. Our
                team consists of accomplished professionals, including seasoned
                car-haulers, ITC specialists, cyber engineers, and strategic
                managers. Together, we have harnessed our collective expertise
                to craft an innovative solution that addresses the intricate
                challenges faced by transportation companies and dealerships.
              </p>
              <h2 className="title mb-25">Our Mission:</h2>
              <p>
                To facilitate a seamless and efficient exchange between
                transportation companies and dealerships, addressing the
                obstacles presented by mismatched work hours and the heavily
                regulated transportation industry.
              </p>
              <h2 className="title mb-25">The Challenge:</h2>
              <p>
                In an industry where time is of the essence, mismatched work
                hours and regulatory constraints often lead to excessive time
                wastage during vehicle pick-ups. Recognizing this challenge, our
                team has dedicated itself to crafting a solution that eliminates
                unnecessary delays, ensuring a smooth interaction between
                dealerships and transportation companies.
              </p>
              <h2 className="title mb-25">The Solution:</h2>
              <p>
                Our cutting-edge platform empowers dealerships and
                transportation companies to effortlessly exchange vehicles and
                corresponding documents 24/7. Understanding the urgency of the
                transportation industry, our solution ensures a seamless
                process, eliminating the need for additional staff involvement.
              </p>
              <h2 className="title mb-25">Why Choose MyKeyBox?</h2>
              <p>
                <strong>Professional Team:</strong> Rely on the expertise of our
                team, comprising seasoned car-haulers, ITC specialists, cyber
                engineers, and strategic managers.
              </p>
              <p>
                <strong>Efficiency Redefined:</strong> Our solution is
                meticulously tailored to optimize the vehicle pick-up process,
                minimizing time wastage and enhancing overall efficiency.
              </p>
              <p>
                <strong>24/7 Accessibility:</strong> Enjoy the flexibility of
                accessing our platform round the clock, enabling swift and
                secure exchanges at any hour.
              </p>
              <p>
                <strong>Streamlined Integration:</strong> Our platform
                seamlessly integrates into the existing workflows of
                transportation companies and dealerships, ensuring a hassle-free
                transition to a more efficient system.
              </p>
              <p>
                <strong>Professional Expertise:</strong> Benefit from the
                diverse experiences within our team, enabling us to streamline
                your load pickups anytime, hassle-free, and securely.
              </p>
              <div className="owner-info">
                <div className="left-info">
                  <span>
                    At MyKeyBox, we are committed to reshaping car transport
                    logistics. Join us in embracing a new era of efficiency,
                    accessibility, and innovation. Experience hassle-free and
                    secure load pickups with a team dedicated to your success.
                    MyKeyBox - Where your keys, your efficiency, and your
                    success meet seamlessly!
                  </span>
                </div>
              </div>
            </div>
            {/* <div className="about-style-one col-xl-5 offset-xl-1 col-lg-6 offset-lg-1">
              <div className="about-thumb">
                <Image
                  className="wow fadeInRight"
                  src={aboutThumb}
                  alt="Image Not Found"
                />
                <About1Card />
                <div
                  className="thumb-shape-bottom wow fadeInDown"
                  data-wow-delay="300ms"
                >
                  <Image src={anim3Thumb} alt="Image Not Found" />
                  <Image src={anim4Thumb} alt="Image Not Found" />
                </div>
              </div>
            </div> */}
          </div>
        </div>
      </div>
    </>
  );
};

export default AboutStyle1;
