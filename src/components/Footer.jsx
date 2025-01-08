import React from "react";

const Footer = () => {
  return (
    <footer className="bg-blue-700 px-4 py-12 text-white">
      <section className="footer-info flex justify-around items-center">
        <section className="left ">
          <section className="one">
            <h1 className="text-lg">Bayzel Integrated Services</h1>
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
        <section className="right grid grid-cols-3 gap-2">
          <div>
            <h3 className="text-xl">Useful Links</h3>
            <ul>
              <li>
                <a href="/home">Home</a>
              </li>
              <li>
                <a href="/about">About Us</a>
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
            <h3 className="text-xl">Our Services</h3>
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
            <h3 className="text-xl">Follow Us</h3>
            <p>Follow us on all our socials</p>
            <div className="social-links flex">
              <a className="sm-link m-1" href="#">
                <i class="bx bxl-facebook text-2xl"></i>
              </a>
              <a className="sm-link m-1" href="#">
                <i class="bx bxl-instagram text-2xl"></i>
              </a>
              <a className="sm-link m-1" href="#">
                <i class="bx bxl-linkedin text-2xl"></i>
              </a>
              <a className="sm-link m-1" href="#">
                <i class="fa-brands fa-x-twitter text-2xl"></i>
              </a>
              <a className="sm-link m-1" href="#">
                <i class="bx bxl-github text-2xl"></i>
              </a>
            </div>
          </div>
        </section>
      </section>
      <div class="copy flex flex-col justify-center items-center mt-10">
        <p>&copy; Copyright Bayzel Integrated Services @2025</p>
        <p>All Rights Reserved</p>
      </div>
    </footer>
  );
};

export default Footer;
