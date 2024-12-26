import React from "react";
import logo from "../assets/logo/logo bayzel.jpg";

const Header = () => {
  return (
    <header className="header flex p-4 fixed justify-between z-10 bg-red-600" id="header">
      <div className="navbar-brand">
        <a className="bayzel" href="">
          <img className="logo" src={logo} alt="logo" />
          BAYZEL INTEGRATED SERVICES LIMITED
        </a>
      </div>
      <nav className="navbar flex ">
        <div className="nav-menu">
          <ul className="nav-lists flex">
            <li className="nav-list">
              <a className="nav-link text-2xl text-red-700" href="#home">
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
