"use client";
import React from "react";
import dynamic from "next/dynamic";
import ProjectTitle from "./ProjectTitle";
import Link from "next/link";

// Dynamically import the IsotopeGallery component with SSR disabled
const IsotopeGallery = dynamic(() => import("./IsotopeGallery"), {
  ssr: false,
});

const ProjectStyle2 = ({ projectTitle }) => {
  return (
    <>
      <div className="project-style-two-area bg-gray default-padding">
        {projectTitle ? <ProjectTitle /> : <></>}
        <div className="container">
          <div className="row align-center">
            <div>
              <div className="h4 sub-heading">
                Effortless Vehicle Pickups with MyKeyBox - Secure, Efficient,
                and Hassle-Free!
              </div>

              <p>
                At MyKeyBox, we've revolutionized the car transport logistics
                industry by introducing a seamless solution for vehicle pickups,
                benefiting both car-hauling companies and dealerships.
              </p>
              <h2 className="title mb-25">How It Works:</h2>
              <p>
                <strong>Load Assignment:</strong> When a car-hauling company is
                assigned a load for pickup from a dealership, MyKeyBox processes
                the request and generates unique codes and digital tokens.
              </p>
              <p>
                <strong>Easy Instructions for Dealerships:</strong> Dealerships
                receive clear instructions in any of the seven available
                languages. Following these straightforward guidelines, they
                deposit the vehicle's key and respective documents into one of
                the 20 slots of the MyKeyBox depository.
              </p>
              <p>
                <strong>Secure Access for Drivers:</strong> The driver, upon
                reaching the dealership, follows simple instructions in their
                preferred language. Using a preset OTP (One-Time Password), they
                gain access to the assigned box, retrieving the key and
                documents securely.
              </p>
              <h2 className="title mb-25">Key Features:</h2>
              <p>
                <strong>Secured Document Exchange:</strong> Our software
                solution provides a secure platform for the exchange of
                paperwork between car-hauling companies and dealerships,
                ensuring confidentiality and compliance.
              </p>
              <p>
                <strong>Anti-Vandalism MyKeyBox Slot:</strong> The MyKeyBox slot
                is designed with anti-vandalism features, ensuring the safety
                and integrity of the keys and documents within. Our secure
                container guarantees the protection of valuable assets.
              </p>
              <p>
                <strong>Multi-Language Support:</strong> Our platform and
                instructions cater to a diverse audience by offering support in
                seven languages, making the process accessible and user-friendly
                for everyone involved.
              </p>
              <p>
                <strong>Time and Resource Savings:</strong> Car-hauling
                companies save valuable time and resources by streamlining the
                vehicle pickup process. These savings can be redirected towards
                quicker deliveries, ultimately leading to happier customers.
              </p>
              <p>
                <strong>Customer Satisfaction:</strong> Dealerships benefit from
                streamlined operations, resulting in satisfied customers who
                experience quicker vehicle pickups. This positive experience
                contributes to enhanced customer satisfaction and loyalty.
              </p>
              <div className="owner-info">
                <div className="left-info">
                  <span>
                    At MyKeyBox, our mission is to enhance efficiency, security,
                    and satisfaction in car transport logistics. Join us in
                    simplifying the vehicle pickup process, ensuring a smooth
                    exchange of keys and documents while saving time and
                    resources for both car-hauling companies and dealerships.
                    MyKeyBox - Where efficiency meets security for a seamless
                    experience!
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ProjectStyle2;
