import React from "react";
import logo from "../assets/logo/logo bayzel.jpg";

const Header = () => {
  return (
    <header
      className="header flex p-4 w-full fixed justify-between items-center z-10 bg-white"
      id="header"
    >
      <div className="navbar-brand flex">
        <a className="bayzel flex items-center text-base text-blue-700" href="">
          <img className="logo w-40 mr-2" src={logo} alt="logo" />
          BAYZEL INTEGRATED SERVICES LIMITED
        </a>
      </div>
      <nav className="navbar flex ">
        <div className="nav-menu">
          <ul className="nav-lists flex">
            <li className="nav-list">
              <a className="nav-link" href="#home">
                Home
              </a>
            </li>
            <li className="nav-list">
              <a className="nav-link" href="#about">
                About Us
              </a>
            </li>
            <li className="nav-list">
              <a className="nav-link" href="#services">
                Our Services
              </a>
            </li>
            <li className="nav-list">
              <a className="nav-link" href="#testimonals">
                Testimonals
              </a>
            </li>
            <li className="nav-list">
              <a className="nav-link" href="#blog">
                Blog
              </a>
            </li>
            <li className="nav-list">
              <a className="nav-link" href="#contact">
                Contact Us
              </a>
            </li>
          </ul>
        </div>
      </nav>
    </header>
  );
};

export default Header;
