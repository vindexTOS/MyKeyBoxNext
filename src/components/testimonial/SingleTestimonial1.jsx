import React from "react";
import RatingsStar from "../utilities/RatingsStar";

const SingleTestimonial1 = ({ testimonial }) => {
  const { ratings, title, text, name, designation } = testimonial;

  return (
    <>
      <div
        style={{
          marginLeft: 100,
        }}
      >
        <div className="testimonial-style-three ">
          <div className="item">
            <div className="content">
              <div className="rating">
                <RatingsStar ratings={ratings} />
              </div>
              <h2 className="sub-heading">{title}</h2>
              <p>{`“${text}”`}</p>
            </div>
            <div className="provider">
              {/* <i className="flaticon-quote"></i> */}
              <div className="info">
                <h4>{name}</h4>
                <span>{designation}</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default SingleTestimonial1;
