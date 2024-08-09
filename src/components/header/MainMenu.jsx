import React from "react";
import Link from "next/link";

const MainMenu = ({ toggleSubMenu, navbarPlacement }) => {
  return (
    <>
      <ul
        className={`nav navbar-nav  ${navbarPlacement}`}
        data-in="fadeInDown"
        data-out="fadeOutUp"
      >
        <li className="dropdown ">
          <Link
            href="#"
            className="dropdown-toggle active"
            data-toggle="dropdown"
            onClick={toggleSubMenu}
          >
            Home
          </Link>
          <ul className="dropdown-menu">
            <li>
              <Link href="/">Consulting Business</Link>
            </li>
            <li>
              <Link href="/home2">Corporate Business</Link>
            </li>
            <li>
              <Link href="/marketing-agency">Marketing Agency</Link>
            </li>
            <li>
              <Link href="/insurance">Insurance</Link>
            </li>
            <li>
              <Link href="/solar-energy">Solar Energy</Link>
            </li>
            <li>
              <Link href="/software-landing">Software Landing</Link>
            </li>
          </ul>
        </li>
        <li className="dropdown">
          <Link
            href="#"
            className="dropdown-toggle"
            data-toggle="dropdown"
            onClick={toggleSubMenu}
          >
            About Us
          </Link>
          <ul className="dropdown-menu">
            <li>
              <Link href="/about-us">About Us</Link>
            </li>
            <li>
              <Link href="/team">Team</Link>
            </li>
            <li>
              <Link href="/team-details/1">Team Details</Link>
            </li>
            <li>
              <Link href="/pricing">Pricing</Link>
            </li>
            <li>
              <Link href="/faq">FAQ</Link>
            </li>
            <li>
              <Link href="/contact-us">Contact Us</Link>
            </li>
            <li>
              <Link href="/not-found">Error Page</Link>
            </li>
          </ul>
        </li>
        <li className="dropdown">
          <Link
            href="project"
            className="dropdown-toggle"
            data-toggle="dropdown"
            onClick={toggleSubMenu}
          >
            Products
          </Link>
          <ul className="dropdown-menu">
            <li>
              <Link href="/project">Project style one</Link>
            </li>
            <li>
              <Link href="/project-details/1">Project Details</Link>
            </li>
          </ul>
        </li>
        {/* <li className="dropdown">
                    <Link href="#" className="dropdown-toggle" data-toggle="dropdown" onClick={toggleSubMenu}>Services</Link>
                    <ul className="dropdown-menu">
                        <li><Link href="/services">Services Version One</Link></li>
                        <li><Link href="/services-2">Services Version Two</Link></li>
                        <li><Link href="/services-details/1">Services Details</Link></li>
                    </ul>
                </li>
                <li className="dropdown">
                    <Link href="#" className="dropdown-toggle" data-toggle="dropdown" onClick={toggleSubMenu}>Blog</Link>
                    <ul className="dropdown-menu">
                        <li><Link href="/blog-standard">Blog Standard</Link></li>
                        <li><Link href="/blog-with-sidebar">Blog With Sidebar</Link></li>
                        <li><Link href="/blog-2-column">Blog Grid Two Colum</Link></li>
                        <li><Link href="/blog-3-column">Blog Grid Three Colum</Link></li>
                        <li><Link href="/blog-single/1">Blog Single</Link></li>
                        <li><Link href="/blog-single-with-sidebar/1">Blog Single With Sidebar</Link></li>
                    </ul>
                </li> */}
        <li>{/* <Link href="/contact-us">contact</Link> */}</li>
      </ul>
    </>
  );
};

export default MainMenu;
