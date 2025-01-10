import React from "react";
import Header from "../components/Header";
import image from "../assets/images/markus-spiske-sFydXGrt5OA-unsplash.jpg";
import Footer from "../components/Footer";

const Contact = () => {
  return (
    <main>
      <Header />
      <section className="relative ">
        <div className="overlay bg-black opacity-100">
          <img className="about-img opacity-40" src={image} alt="about" />
          <p className="absolute bottom-32 left-0 right-0 flex justify-center text-3xl text-white">
            Contact
          </p>
        </div>
      </section>
    </main>
  );
};

export default Contact;
