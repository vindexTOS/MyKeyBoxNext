import Image from "next/image";
import React from "react";
import shape7 from "@/assets/img/shape/7.png";
import shape9 from "@/assets/img/shape/9.png";
import logoLight from "@/assets/img/HeaderImg/logo-light.png";
import Link from "next/link";
import SocialShare from "../utilities/SocialShare";
import FooterNewsLetter from "../form/FooterNewsLetter";

const FooterStyle1 = ({ shape, shapeClass, logo, formStyle }) => {
  return (
    <>
      <footer className="bg-dark text-light">
        <div className="footer-shape">
          <div className={`item ${shapeClass}`}>
            {shape ? (
              <Image src={shape} alt="Shape" />
            ) : (
              <Image src={shape7} alt="Shape" />
            )}
          </div>
          <div className="item">
            <Image src={shape9} alt="Shape" />
          </div>
        </div>
        <div className="container">
          <div className="f-items relative pt-50 pb-70 pt-xs-0 pb-xs-50">
            <div className="row">
              <div className="col-lg-4 col-md-6 footer-item pr-50 pr-xs-15 ">
                <div className="f-item about">
                  <Link href="/">
                    {logo ? (
                      <Image className="logo" src={logo} alt="Logo" />
                    ) : (
                      <Image
                        style={{ width: "30%", height: "30%" }}
                        className="logo"
                        src={logoLight}
                        alt="Logo"
                      />
                    )}
                  </Link>
                  <h1>MYKEYBOX</h1>
                  <div className="opening-hours">
                    <h5>Opening Hours</h5>
                    <ul>
                      <li>
                        <div className="working-day">Monday – Sunday:</div>
                        <div className="marker"></div>
                        <div className="working-hour">24/7</div>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
              <div className="col-lg-2 col-md-6 footer-item">
                {/* <div className="f-item link">
                  <h4 className="widget-title">Our Services</h4>
                  <ul>
                    <li>
                      <Link href="/services-details/1">Manage investment</Link>
                    </li>
                    <li>
                      <Link href="/services-details/1">Business planning</Link>
                    </li>
                    <li>
                      <Link href="/services-details/1">Financial advices</Link>
                    </li>
                    <li>
                      <Link href="/services-details/1">Tax strategy</Link>
                    </li>
                    <li>
                      <Link href="/services-details/1">Insurance strategy</Link>
                    </li>
                  </ul>
                </div> */}
              </div>
              <div className="col-lg-2 col-md-6 footer-item">
                <div className="f-item link">
                  <h4 className="widget-title">Our Company</h4>
                  <ul>
                    <li>
                      <Link href="/about-us">About Us</Link>
                    </li>

                    <li>
                      <Link href="/project">Products</Link>
                    </li>
                    <li>
                      <Link href="/pricing">Plans & Pricing</Link>
                    </li>
                    <li>
                      <Link href="/contact-us">Contact</Link>
                    </li>
                  </ul>
                </div>
              </div>
              <div className="col-lg-4 col-md-6 footer-item">
                <h4 className="widget-title">Newsletter</h4>
                <p>
                  Join our subscribers list to get the latest <br /> news and
                  special offers.
                </p>
                <div className={`f-item newsletter ${formStyle}`}>
                  {/* <FooterNewsLetter /> */}
                </div>
                <ul className="footer-social">
                  <SocialShare />
                </ul>
              </div>
            </div>
          </div>
        </div>
        <div className="footer-bottom">
          <div className="container">
            <div className="row">
              <div className="col-lg-6">
                <p>&copy; Copyright © 2023 My Key Box. All Rights Reserved.</p>
              </div>
              <div className="col-lg-6 text-end">
                <ul>
                  <li>
                    <Link href="/faq">Privacy & Policy See More</Link>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
};

export default FooterStyle1;
