"use client";
import React, { useState, useEffect } from "react";
import logo from "@/assets/img/HeaderImg/logo-light.png";
import logos from "@/assets/img/HeaderImg/logo-dark.png";
import Image from "next/image";
import Link from "next/link";

const HeaderLogo = ({ openMenu }) => {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div className="navbar-header">
      <button
        type="button"
        className="navbar-toggle"
        data-toggle="collapse"
        data-target="#navbar-menu"
        onClick={openMenu}
      >
        <i className="fa fa-bars"></i>
      </button>

      <Link href="/">
        <Image
          src={isScrolled ? logos : logo}
          className="logo me-2"
          alt="Logo"
          width={80}
          height={80}
        />
      </Link>
    </div>
  );
};

export default HeaderLogo;
