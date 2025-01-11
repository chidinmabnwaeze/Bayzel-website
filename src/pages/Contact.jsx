import React from "react";
import Header from "../components/Header";
import image from "../assets/images/markus-spiske-sFydXGrt5OA-unsplash.jpg";
import Footer from "../components/Footer";

const Contact = () => {
  const handleSubmit = (e) => {
    e.preventDefault(e);
  };
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
      <div className="mapContainer w-full">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d31513.05365471729!2d7.287349510839833!3d9.142575499999998!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x104dd9003af78bd7%3A0x4be77d6985601b98!2sBy%20Union%20Bank%20Building%2C%20Nymex%20plaza!5e0!3m2!1sen!2sng!4v1736580875000!5m2!1sen!2sng"
          width="100%"
          height="350"
          style={{ border: 0 }}
          allowfullscreen=""
          loading="eager"
          referrerpolicy="no-referrer-when-downgrade"
        ></iframe>
      </div>
      <section className="flex justify-between mx-40 my-10 bg-gray-50">
        <div className="contactInfo">
          <div className="phone flex items-center m-4">
            <span className="rounded-full mr-6 p-4 shadow-lg bg-slate-200">
              <i class="bx bx-phone text-xl"></i>
            </span>
            <span>
              <h3 className="font-semibold text-lg">Phone Number</h3>
              <p className="text-sm text-gray-400">08022409706</p>
            </span>
          </div>
          <div className="email flex items-center m-4">
            <span className="rounded-full mr-6 p-4 shadow-lg bg-slate-200">
              <i class="bx bx-envelope text-xl"></i>
            </span>
            <span>
              <h3 className="font-semibold text-lg">Email Address</h3>
              <p className="text-sm text-gray-400">
                bayzelintegratedservices@gmail.com
              </p>
            </span>
          </div>
          <div className="map flex items-center m-4">
            <span className="rounded-full mr-6 p-4 shadow-lg bg-slate-200">
              <i class="bx bx-map text-xl"></i>
            </span>
            <span>
              <h3 className="font-semibold text-lg">Address</h3>
              <p className="text-sm text-gray-400">
                Nymex Plaza,No 2 GadoNasko road,By NNPC Bustop, Kubwa Abuja
              </p>
            </span>
          </div>
        </div>
        <form onSubmit={handleSubmit} className=" w-1/2 p-6 shadow-lg bg-white">
          <h3 className="mb-3 text-2xl font-medium flex justify-center">
            Send us a message
          </h3>
          <section>
            <h1>Name</h1>
            <input type="text" className="border rounded-md p-2 w-full" />
          </section>
          <section>
            <h1>Email Address</h1>
            <input type="text" className="border rounded-md p-2 w-full" />
          </section>
          <section>
            <h1>Phone Number</h1>
            <input type="text" className="border rounded-md p-2 w-full" />
          </section>
          <section>
            <h1>Write your message</h1>
            <textarea type="text" className="border rounded-md p-8 w-full " />
          </section>
          <div className="flex justify-center">
            <button className="CTA bg-blue-700 p-2.5 w-4/5 text-white rounded-md mt-5">
              Submit
            </button>
          </div>
        </form>
      </section>
      <Footer />
    </main>
  );
};

export default Contact;
