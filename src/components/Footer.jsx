import React from "react";
import facebook from "../assets/logo/facebook-logo-facebook-icon-transparent-free-png.webp";
import insta from "../assets/logo/instagram-filled.png";
import linkedin from "../assets/logo/social_linkedin.png";
import twitter from "../assets/logo/twiitter x.jpeg";

const Footer = () => {
  return (
    <footer className="bg-blue-700 px-4 py-12 text-white">
      <section class="footer-info flex justify-around items-center">
        <section class="left">
          <section class="one">
            <h1>Bayzel Integrated Services</h1>
            <address>Bama road, Kubwa,Abuja</address>
            <div class="contact-details">
              <p>
                <span>Phone:</span>08022409706
              </p>
              <p>
                <span>Email:</span>bnwankpa@yahoo.co.uk
              </p>
            </div>
          </section>
        </section>
        <section class="right grid grid-cols-3 gap-2">
          <div>
            <h3>Useful Links</h3>
            <ul>
              <li>
                <a href="/home">Home</a>
              </li>
              <li>
                <a href="/about">About</a>
              </li>
              <li>
                <a href="/services">Services</a>
              </li>
              <li>
                <a href="/terms">Terms</a>
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
            <div class="social-links">
              <a class="sm-link" href="#">
                <img src={facebook} alt="facebook" />
              </a>
              <a class="sm-link" href="#">
                <img src="logo/instagram-filled.png" alt="insta" />
              </a>
              <a class="sm-link" href="#">
                <img src="logo/social_linkedin.png" alt="linkedin" />
              </a>
              <a class="sm-link" href="#">
                <img src="logo/twiitter x.jpeg" alt="twitter" />
              </a>
            </div>
          </div>
        </section>
      </section>
      <div class="copy flex flex-col justify-center items-center">
        <p>&copy; Copyright Bayzel Integrated Services @2025</p>
        <p>All Rights Reserved</p>
      </div>
    </footer>
  );
};

export default Footer;
