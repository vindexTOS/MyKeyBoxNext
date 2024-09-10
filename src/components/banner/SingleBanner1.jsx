// import Image from "next/image";
// import Link from "next/link";
// import React from "react";

// const SingleBanner1 = ({ banner }) => {
//   const { bgThumb, title, title1, title2, shapeThumb, btnText } = banner;

//   return (
//     <>
//       <div
//         className="banner-thumb bg-cover shadow dark "
//         style={{
//           background: `url(/assets/img/HeaderImg/cars.webp)`,
//         }}
//       ></div>
//       <div className="container">
//         <div className="row align-center">
//           <div className="col-xl-7 offset-xl-5">
//             <div className="content">
//               <h4>MyKeyBox</h4>
//               <h2>
//                 <strong>FIND CAR KEY FOR PICKUP AT</strong>{" "}
//                 <strong style={{ color: "orange" }}>ANYTIME 24/7</strong>
//               </h2>
//               <div className="button mt-40">
//                 <Link className="btn-animation" href="/pricing">
//                   <i className="fas fa-arrow-right"></i> <span>SEE PRICES</span>
//                 </Link>
//               </div>
//             </div>
//           </div>
//         </div>
//       </div>
//       <div className="banner-shape-bg">
//         <Image
//           src={`/assets/img/shape/${shapeThumb}`}
//           width={916}
//           height={693}
//           alt="Shape"
//         />
//       </div>
//     </>
//   );
// };

// export default SingleBanner1;

import Image from "next/image";
import Link from "next/link";
import React from "react";
import "../../../public/assets/css/animation.css";

const SingleBanner1 = ({ banner }) => {
  const { bgThumb, title, title1, title2, shapeThumb, btnText } = banner;

  return (
    <>
      <div
        className="banner-thumb bg-cover shadow dark "
        style={{
          backgroundImage: `url(/assets/img/HeaderImg/cars.webp)`,
        }}
      ></div>
      <div className="container">
        <div className="row align-center">
          <div className="col-xl-7 offset-xl-5">
            <div className="content">
              <h4 className="fade-in-up">MyKeyBox</h4>
              <h2 className="slide-in-left">
                <strong>FIND CAR KEY FOR PICKUP AT</strong>{" "}
                <strong style={{ color: "orange" }}>ANYTIME 24/7</strong>
              </h2>
              <div className="button mt-40">
                <Link className="btn-animation" href="/pricing">
                  <i className="fas fa-arrow-right"></i> <span>SEE PRICES</span>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="banner-shape-bg">
        <Image
          src={`/assets/img/shape/${shapeThumb}`}
          width={916}
          height={693}
          alt="Shape"
        />
      </div>
    </>
  );
};

export default SingleBanner1;
