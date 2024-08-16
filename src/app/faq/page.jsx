import LayoutStyle7 from "@/components/Layouts/LayoutStyle7";
import FaqStyle1 from "@/components/faq/FaqStyle1";
import FaqStyle2 from "@/components/faq/FaqStyle2";
import React from "react";

export const metadata = {
  title: "Privacy & Policy See More",
};

const FaqPage = () => {
  return (
    <>
      <LayoutStyle7 breadCrumb="Privacy" title="Privacy & Policy See More ">
        <FaqStyle2 fullFaq={true} />
      </LayoutStyle7>
    </>
  );
};

export default FaqPage;
