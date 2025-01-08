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
      <section className="flex justify-center mt-10 place-items-center">
        <div className="about-text">
          <h1>Who We Are</h1>
          <article>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Maiores
            quos voluptate repellat dolores harum reiciendis iusto sapiente hic
            culpa id similique fuga explicabo eos odio debitis cumque, excepturi
            placeat? Consectetur. Lorem ipsum dolor sit amet consectetur
            adipisicing elit. Magni praesentium, quo quisquam deleniti sequi
            illum non eius quas voluptas ipsum aliquam officia iusto error. Illo
            deserunt et maxime quidem dignissimos.
          </article>
        </div>
        <div className="side-img relative">
          <div className="mergedImg1 m-5 bg-red-700 border-red-800">
            <img className="img12" src={image} alt="" />
          </div>
          <div className="mergedImg2 absolute right-0 left- bottom-32 ">
            <img className="img2" src={image} alt="" />
          </div>
        </div>
      </section>
      <Footer />
    </main>
  );
};

export default About;
