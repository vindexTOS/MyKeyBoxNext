// import Image from 'next/image';
// import React from 'react';
// import illustration16 from '@/assets/img/illustration/16.png'
// import illustrationV from '@/assets/img/illustration/v.png'
// import illustrationV2 from '@/assets/img/illustration/v2.png'

// const AboutStyle3 = () => {
//     return (
//         <>
//             <div className="about-style-three-area default-padding">
//                 <div className="container">
//                     <div className="row align-center">
//                         <div className="col-lg-5">
//                             <div className="about-style-three">
//                                 <div className="thumb">
//                                     <Image className="wow fadeInLeft" src={illustration16} alt="Image not found" />
//                                     <div className="sub-item">
//                                         <Image className="wow fadeInUp" data-wow-delay="500ms" src={illustrationV} alt="Image not found" />
//                                         <Image className="wow fadeInRight" data-wow-delay="1000ms" src={illustrationV2} alt="Image not found" />
//                                     </div>
//                                 </div>
//                             </div>
//                         </div>
//                         <div className="col-lg-6 offset-lg-1">
//                             <div className="about-style-three">
//                                 <h4 className="sub-heading secondary">Why Choose Us</h4>
//                                 <h2 className="heading">Get tips & tricks about how to increase your sales.</h2>
//                                 <div className="list-item-style-two wow fadeInUp">
//                                     <div className="number">01</div>
//                                     <div className="info">
//                                         <h4>Page Rankings</h4>
//                                         <p>
//                                             Facilisis leo vel fringilla est ullamcorper. Posuere urna nec tincidunt praesent semper feugiat nibh sed. Non pulvinar neque laoreet suspendisse interdum consectetur but why she shewing.
//                                         </p>
//                                     </div>
//                                 </div>
//                                 <div className="list-item-style-two wow fadeInUp" data-wow-delay="500ms">
//                                     <div className="number">02</div>
//                                     <div className="info">
//                                         <h4>Site Optimization</h4>
//                                         <p>
//                                             Facilisis leo vel fringilla est ullamcorper. Posuere urna nec tincidunt praesent semper feugiat nibh sed. Non pulvinar neque laoreet suspendisse interdum consectetur. Bndulgence diminution so discovered.
//                                         </p>
//                                     </div>
//                                 </div>
//                             </div>
//                         </div>
//                     </div>
//                 </div>
//             </div>
//         </>
//     );
// };

// export default AboutStyle3;

import Image from "next/image";
import React from "react";
import about7Thumb from "@/assets/img/box/KeyBox.jpg";
import about8Thumb from "@/assets/img/box/yy.jpg";
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
        style={{ backgroundImage: `url(/assets/img/shape/29.png)` }}
      >
        <div className="container">
          <div className="row align-center">
            <div className="about-style-two col-lg-6 offset-lg-1">
              <h1 className="sub-heading">MYKEYBOX Kiosk</h1>
              <p>
                The Kiosk provides a convenient key drop-off and pick-up process
                any time of day – or night.
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
          </div>
        </div>
      </div>
    </>
  );
};

export default AboutStyle2;
