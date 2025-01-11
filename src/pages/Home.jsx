import React, { useEffect, useState } from "react";
import Header from "../components/Header";
import slide1 from "../assets/images/muhammad-sosiawan-unsplash.jpg";
import slide2 from "../assets/images/mario-heller-unsplash.jpg";
import slide3 from "../assets/images/marta-ortigosa-unsplash (1).jpg";
import slide4 from "../assets/images/meric-tuna-unsplash.jpg";
import { serviceCards } from "../data/service-card";
import secondimg from "../assets/images/erwan-hesry-1q75BReKpms-unsplash.jpg";
import { works } from "../data/work";
import { projectCards } from "../data/project-cards";
import Testimonals from "../components/Testimonals";
import Footer from "../components/Footer";

const Home = () => {
  const [slideIndex, setSlideIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setSlideIndex((prevIndex) =>
        prevIndex === slides.length - 1 ? 0 : prevIndex + 1
      );
    }, 5000); // Change every 5 seconds

    return () => clearInterval(interval); // Cleanup on unmount
  }, []);

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

  const [scrollbody, setScrollbody] = useState("show");

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
    {
      img: slide4,
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
        <section className="slider-section">
          <div className="slider overflow-hidden w-full relative">
            {slides.map((slide, index) => (
              <div
                className={slideIndex === index ? "slides fade" : "slideHidden"}
                key={index}
              >
                <div className="overlay bg-black opacity-100">
                  <img
                    className="slider-img opacity-50 w-full h-full object-cover object-center "
                    src={slide.img}
                    alt="slide"
                  />
                </div>
                <div className="content absolute top-64 bottom-0 ml-20 slideIn">
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
              className="prev absolute top-80 bottom-0 left-0"
              onClick={prevSlide}
            >
              &#10094;
            </button>
            <button
              className="next absolute top-80 bottom-0 right-0 w-8"
              onClick={nextSlide}
            >
              &#10095;
            </button>
          </div>
          {/* slide indicator */}
          <div className="absolute bottom-3 left-0 right-0 flex justify-center items-center">
            {slides.map((_, index) => (
              <button
                className={`${
                  slideIndex === index
                    ? " slideActive text-white"
                    : "slideInactive text-gray-400"
                }`}
                onClick={() => setSlideIndex(index)}
                key={index}
              >
                &bull;
              </button>
            ))}
          </div>
        </section>

        {/* 2nd section */}
        <section className="services flex flex-col justify-center items-center ">
          <div className="services-head mt-6">
            <h1 className="text-3xl font-semibold text-blue-700 mt-6">
              Our Services
            </h1>
            <p className="">Here's what we offer</p>
          </div>
          <div className="service-cards js-services-card grid grid-cols-3 gap-5 m-8 content-center">
            {serviceCards.map((cards, index) => (
              <a
                className="service-card w-4/5 p-6 items-center flex flex-col "
                href=""
                key={index}
              >
                <img src={cards.img} alt="" />
                <div className="card-text">
                  <h3 className="font-medium text-xl pb-3 ">{cards.title}</h3>
                  <p>{cards.text}</p>
                </div>
              </a>
            ))}
          </div>
        </section>

        {/* 3rd section */}
        <section className="about-info mt-20 flex p-8 ">
          <img
            className="secondimg w-3/5 object-cover rounded-2xl "
            src={secondimg}
            alt="image"
          />

          <div className="why-us w-full ml-12">
            <div className="title-head">
              <h2 className="font-semibold text-3xl text-blue-700 mb-3">
                Why Us?
              </h2>
              <p className="text-2xl">
                We've consulted for{" "}
                <span className="text-2xl">International Organizations</span>{" "}
                and supervised over{" "}
                <span className="text-2xl">300 farmers </span>in Nigeria
              </p>
            </div>
            <span className="summary-text mb-7 text-sm">
              Lorem ipsum, dolor sit amet consectetur adipisicing elit.
              Voluptates repellat quidem cupiditate dolor, explicabo, inventore
              similique quia aut nihil quos tempora ad reiciendis voluptatum
              harum sed consequuntur maiores expedita? Minus?
            </span>

            <div className="ourProjects mt-6">
              {works.map((work, index) => (
                <div
                  className="project flex items-center justify-center mb-5"
                  key={index}
                >
                  <img className="work-img" src={work.img} alt="" />
                  <div className="project-info ml-3">
                    <h3 className="text-xl font-semibold text-blue-700">
                      {work.title}
                    </h3>
                    <p>{work.text}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* 4th section */}
        <section class="our-work mt-20 flex justify-center items-center flex-col relative ">
          <div class="work-title mt-6 mb-4">
            <h1 class="text-3xl font-semibold text-blue-700 mt-6">
              Our Projects
            </h1>
          </div>
          {/* Each slide  */}
          <section class="project-slider flex p-20 bg-black">
            {projectCards.map((project, index) => (
              <div
                class="project-slides relative w-2/5 max m-auto m-2 p-2 rounded-xl flex flex-col justify-between"
                key={index}
              >
                <img
                  class="project-img h-full w-full object-cover"
                  src={project.img}
                  alt="project-image"
                />
                <div class="subject py-3 hidden z-10 absolute bottom-5 m-5">
                  <h3 class="text-2xl text-white">{project.heading}</h3>
                  <p className="text-white">{project.subtext}</p>
                </div>
              </div>
            ))}
          </section>
          {/* slide indicator arrow  */}
          <div class="slide-indicator ">
            <span className="h-1">
              <a
                className="bg-white m-4 p-2 rounded-full absolute top-2/4 left-0"
                href=""
                onClick={(e) => e.preventDefault(e)}
              >
                &#x1F860;
              </a>
            </span>
            <a
              className="bg-white m-4 p-2 rounded-full absolute top-2/4 right-0"
              href=""
              onClick={(e) => e.preventDefault(e)}
            >
              &#x1F862;
            </a>
          </div>
        </section>

        <Testimonals />
        <Footer />
      </section>
    </main>
  );
};

export default Home;
