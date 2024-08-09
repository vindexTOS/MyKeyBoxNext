"use client";
import React from "react";
import logo from "@/assets/img/HeaderImg/logo-light.png";
import Image from "next/image";
import Link from "next/link";

const HeaderLogo = ({ openMenu }) => {
  return (
    <>
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
            src={logo}
            className="logo me-2"
            alt="Logo"
            width={80}
            height={80}
          />
        </Link>
      </div>
    </>
  );
};

export default HeaderLogo;
