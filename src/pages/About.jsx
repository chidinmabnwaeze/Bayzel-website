import React from "react";
import Header from "../components/Header";
import image from "../assets/images/markus-spiske-sFydXGrt5OA-unsplash.jpg";
import Footer from "../components/Footer";

const About = () => {
  return (
    <main>
      <Header />
      <section className="relative ">
        <div className="overlay bg-black opacity-100">
          <img className="about-img opacity-40" src={image} alt="about" />
          <p className="absolute bottom-32 left-0 right-0 flex justify-center text-3xl text-white">
            About Us
          </p>
        </div>
      </section>
      <section className="flex justify-center  m-24">
        <div className="about-text mr-40">
          <div className="heading flex items-center">
            <h1 className="text-3xl font-semibold text-blue-700 my-4">
              Who We Are
            </h1>
            <span className="flex w-24 h-1 bg-blue-700 ml-6 rounded-full">
              .
            </span>
          </div>
          <article>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Maiores
            quos voluptate repellat dolores harum reiciendis iusto sapiente hic
            culpa id similique fuga explicabo eos odio debitis cumque, excepturi
            placeat? Consectetur. Lorem ipsum dolor sit amet consectetur
            adipisicing elit. Magni praesentium, quo quisquam deleniti sequi
            illum non eius quas voluptas ipsum aliquam officia iusto error. Illo
            deserunt et maxime quidem dignissimos.
          </article>
          <article className="next-prgh m-10 flex">
            <span className=" w-1 h-24 bg-blue-700 mx-6 rounded-full flex flex-col">
              .
            </span>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Officia
            fugit deleniti vel alias tempora ad corrupti deserunt qui aperiam
            provident totam ea suscipit, officiis atque quibusdam blanditiis
            odio nisi reiciendis? Lorem, ipsum dolor sit amet consectetur
            adipisicing elit. Officia fugit deleniti vel alias tempora ad
            corrupti deserunt qui aperiam provident totam ea suscipit, officiis
            atque quibusdam blanditiis odio nisi reiciendis?
          </article>

          <section className="figures flex justify-center items-center mt-20">
            <div className="mr-10 text-center">
              <h1 className="text-2xl font-semibold text-blue-700">5+</h1>
              <p className="text-gray-500">Years Experience</p>
            </div>
            <div className="mr-10 text-center">
              <h1 className="text-2xl font-semibold text-blue-700">20+</h1>
              <p className="text-gray-500">Projects</p>
            </div>
            <div className="text-center">
              <h1 className="text-2xl font-semibold text-blue-700">6+</h1>
              <p className="text-gray-500">Organizations</p>
            </div>
          </section>

          {/* <div className="buttons">
            <button className="m-5 bg-blue-700 p-3 px-4 rounded-lg text-white font-semibold">
              Learn More
            </button>
            <button>Contact Us</button>
          </div> */}
        </div>

        <img className="img12 w-2/5" src={image} alt="" />
      </section>
      <Footer />
    </main>
  );
};

export default About;
