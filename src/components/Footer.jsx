import React from "react";
import facebook from "../assets/logo/facebook-logo-facebook-icon-transparent-free-png.webp";
import insta from "../assets/logo/instagram-filled.png";
import linkedin from "../assets/logo/social_linkedin.png";
import twitter from "../assets/logo/twiitter x.jpeg";

const Footer = () => {
  return (
    <footer>
      <section className="footer-info">
        <section className="left">
          <section className="one">
            <h1>Bayzel Integrated Services</h1>
            <address>Bama road, Kubwa,Abuja</address>
            <div className="contact-details">
              <p>
                <span>Phone:</span>08022409706
              </p>
              <p>
                <span>Email:</span>bnwankpa@yahoo.co.uk
              </p>
            </div>
          </section>
        </section>
        <section className="right">
          <div>
            <h3>Useful Links</h3>
            <ul>
              <li>
                <a href="">Home</a>
              </li>
              <li>
                <a href="">About</a>
              </li>
              <li>
                <a href="">Services</a>
              </li>
              <li>
                <a href="">Terms</a>
              </li>
            </ul>
          </div>
          <div>
            <h3>Our Services</h3>
            <ul>
              <li>
                <a href="">Consulting</a>
              </li>
              <li>
                <a href="">Agribusiness</a>
              </li>
              <li>
                <a href="">Marketing</a>
              </li>
              <li>
                <a href="">Terms</a>
              </li>
            </ul>
          </div>
          <div>
            <h5>Follow Us</h5>
            <p>Follow us on all our socials</p>
            <div className="social-links">
              <a className="sm-link" href="#">
                <img src={facebook} alt="facebook" />
              </a>
              <a className="sm-link" href="#">
                <img src={insta} alt="insta" />
              </a>
              <a className="sm-link" href="#">
                <img src={linkedin} alt="linkedin" />
              </a>
              <a className="sm-link" href="#">
                <img src={twitter} alt="twitter" />
              </a>
            </div>
          </div>
        </section>
      </section>
      <div className="copy">
        <p>&copy; Copyright Bayzel Integrated Services @2025</p>
        <p>All Rights Reserved</p>
      </div>
    </footer>
  );
};

export default Footer;
