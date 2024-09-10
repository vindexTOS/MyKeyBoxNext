"use client";
import React, { useState, useEffect } from "react";
import MainMenu from "./MainMenu";
import HeaderLogo from "./HeaderLogo";
import Link from "next/link";
import useStickyMenu from "../hooks/useStickyMenu";
import useSubMenuToggle from "../hooks/useSubMenuToggle";
import useSidebarMenu from "../hooks/useSidebarMenu";
import Image from "next/image";
import logo from "@/assets/img/HeaderImg/logo-dark.png";
import "../../../public/assets/css/styles.css";

const MainHeaderStyle1 = () => {
  const isMenuSticky = useStickyMenu();
  const toggleSubMenu = useSubMenuToggle();
  const { isOpen, openMenu, closeMenu } = useSidebarMenu();
  const [isMobile, setIsMobile] = useState(false);
  const [showAuthOptions, setShowAuthOptions] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 1200);
    };

    window.addEventListener("resize", handleResize);
    handleResize();

    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const toggleAuthOptions = () => {
    setShowAuthOptions(!showAuthOptions);
  };

  return (
    <>
      <header>
        <nav
          className={`navbar mobile-sidenav navbar-style-one navbar-sticky navbar-default validnavs white navbar-fixed on menu-center no-full ${
            isMenuSticky ? "sticked" : "no-background"
          } ${isOpen ? "navbar-responsive force-sticky " : ""}`}
        >
          <div className="container">
            <div className="row align-center">
              <div className="col-xl-2 col-lg-3 col-md-2 col-sm-1 col-1">
                <HeaderLogo openMenu={openMenu} />
              </div>

              <div className="col-xl-6 offset-xl-1 col-lg-6 col-md-4 col-sm-4 col-4">
                <div
                  className={`collapse navbar-collapse collapse-mobile ${
                    isOpen ? "show" : ""
                  }`}
                  id="navbar-menu"
                >
                  <Image src={logo} alt="Logo" />
                  <button
                    type="button"
                    className="navbar-toggle"
                    data-toggle="collapse"
                    data-target="#navbar-menu"
                    onClick={closeMenu}
                  >
                    <i className="fa fa-times"></i>
                  </button>
                  <MainMenu
                    navbarPlacement="navbar-center"
                    isOpen={isOpen}
                    closeMenu={closeMenu}
                    toggleSubMenu={toggleSubMenu}
                  />
                </div>
              </div>
              <div
                className={`col-7 ${isMobile ? "" : "d-none"}`}
                style={{ paddingRight: 5 }}
              >
                <div className="auth-container">
                  <button className="auth-button" onClick={toggleAuthOptions}>
                    Auth
                  </button>
                  {showAuthOptions && (
                    <div className="auth-options">
                      <ul style={{ textAlign: "center" }}>
                        <Link href="/register">
                          <li>Register</li>
                        </Link>
                        <Link href="/login">
                          <li>Login</li>
                        </Link>
                      </ul>
                    </div>
                  )}
                </div>
              </div>
              <div
                className={`col-xl-3 col-lg-3 col-md-6 col-sm-7 col-7 ${
                  isMobile ? "d-none" : ""
                }`}
                style={{ paddingRight: 5 }}
              >
                <div className="attr-right">
                  <div className="attr-nav">
                    <ul>
                      <li className="button">
                        <Link href="/register">Register</Link>
                      </li>
                    </ul>
                  </div>
                </div>
                <div className="col-xl-3 col-lg-3 col-md-6 col-sm-5 col-7">
                  <Link href="/login">
                    <button className="login-button">Login</button>
                  </Link>
                </div>
              </div>
            </div>
            <div
              className={`overlay-screen ${isOpen ? "opened" : ""}`}
              onClick={closeMenu}
            ></div>
          </div>
        </nav>
      </header>
    </>
  );
};

export default MainHeaderStyle1;
