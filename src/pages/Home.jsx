import React, { useEffect, useState } from "react";
import Header from "../components/Header";
// import { slides } from "../data/slides";
import slide1 from "../assets/images/muhammad-sosiawan-unsplash.jpg";
import slide2 from "../assets/images/mario-heller-unsplash.jpg";
import slide3 from "../assets/images/marta-ortigosa-unsplash (1).jpg";

const Home = () => {
  const [slideIndex, setSlideIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setSlideIndex((prevIndex) =>
        prevIndex === slides.length - 1 ? 0 : prevIndex + 1
      );
    }, 6000); // Change every 3 seconds

    return () => clearInterval(interval); // Cleanup on unmount
  }, []);

  let intervalID = null;

  const prevSlide = () => {
    setSlideIndex((prevIndex) =>
      prevIndex === 0 ? slides.length - 1 : prevIndex - 1
    );
  };
  const nextSlide = () => {
    setSlideIndex((prevIndex) =>
      prevIndex === slides.length - 1 ? 0 : prevIndex + 1
    );
  };

  const slides = [
    {
      img: slide1,
      title: "Bayzel Integrated Services",
      subText: (
        <>
          Bayzel Integrated Services Limited (Bayzel) offers services in
          consultancy, field surveys
          <br />
          equipment and material supplies, business, and value-chain
          development.
        </>
      ),
    },
    {
      img: slide2,
      title: "Bayzel Integrated Services",
      subText: (
        <>
          Bayzel Integrated Services Limited (Bayzel) offers services in
          consultancy, field surveys
          <br />
          equipment and material supplies, business, and value-chain
          development.
        </>
      ),
    },
    {
      img: slide3,
      title: "Bayzel Integrated Services",
      subText: (
        <>
          Bayzel Integrated Services Limited (Bayzel) offers services in
          consultancy, field surveys
          <br />
          equipment and material supplies, business, and value-chain
          development.
        </>
      ),
    },
  ];
  return (
    <main>
      <Header />
      <section className="body">
        <div className="slider">
          {slides.map((slide, index) => (
            <div
              className={slideIndex === index ? "slides" : "slideHidden"}
              key={index}
            >
              <div className="overlay bg-black opacity-100">
                <img
                  className="slider-img opacity-50"
                  src={slide.img}
                  alt="slide"
                />
              </div>
              <div className="content absolute top-60 bottom-0 m-6">
                <div className="heading-text mb-5">
                  <h1 className="title text-white text-5xl mb-3 font-semibold">
                    {slide.title}
                  </h1>
                  <p className="sub-text text-white ">{slide.subText}</p>
                </div>
                <button className="learn-more px-4 py-2.5 rounded-lg text-white bg-blue-700">
                  Learn More
                </button>
              </div>
            </div>
          ))}
          <button
            className="prev absolute top-60 bottom-0 left-0"
            onClick={prevSlide}
          >
            <span>&#10094</span>
          </button>
          <button
            className="next absolute top-60 bottom-0 right-0"
            onClick={nextSlide}
          >
            &#10095
          </button>
        </div>
      </section>
    </main>
  );
};

export default Home;
