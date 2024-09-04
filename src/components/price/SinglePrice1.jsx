"use client";
import Link from "next/link";
import React, { useEffect, useRef } from "react";

const SinglePrice1 = ({ price }) => {
  const usernameRef = useRef(null);

  useEffect(() => {
    usernameRef.current.scrollIntoView({ behavior: "smooth", block: "center" });

    usernameRef.current.focus();
  }, []);

  const {
    activeClass,
    title,
    text,
    planType,
    btnText,
    planCurrency,
    planPrice,
    btnClass,
  } = price;

  return (
    <>
      <div
        className={`pricing-style-one ${activeClass}`}
        style={{
          backgroundImage: `url(/assets/img/shape/15.webp)`,
        }}
      >
        <div className="pricing-header">
          <h4 style={{ paddingLeft: 10 }}>{title}</h4>
          <p>{text}</p>
        </div>
        <div className="pricing-content">
          <div className="price">
            <h2 style={{ paddingLeft: 40 }}>
              <sup>{[planCurrency]}</sup>
              <span className={typeof planPrice === "string" ? "free" : ""}>
                {[planPrice]}
              </span>{" "}
            </h2>
          </div>
          <ul
            style={{
              display: "flex",
              justifyContent: "center",
              paddingTop: 30,
            }}
            ref={usernameRef}
          >
            {price.listData.map((list) => (
              <li key={list.id}>
                {/* <i className={list.listIcon}></i> {list.listData} */}
                <h2 style={{ fontSize: 70 }}>Each</h2>
              </li>
            ))}
          </ul>
          <Link
            className={`btn mt-25 btn-sm animation ${btnClass}`}
            href="pay-stripe"
          >
            GET STARTED
          </Link>
        </div>
      </div>
    </>
  );
};

export default SinglePrice1;
