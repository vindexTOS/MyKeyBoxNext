import React from "react";
import Faq1Data from "@/assets/jsonData/faq/Faq1Data.json";
import SingleFaq1 from "./SingleFaq1";

const FaqStyle2 = () => {
  return (
    <>
      <div className="faq-area bg-gray default-padding">
        <div className="container">
          <div>
            <h2 className="title mb-40 h4 sub-heading">
              Privacy & Policy See More
            </h2>
            <div className="accordion" id="faqAccordion">
              <SingleFaq1 />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default FaqStyle2;
