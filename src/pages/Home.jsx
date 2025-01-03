import React, { useEffect, useState } from "react";
import Header from "../components/Header";
import slide1 from "../assets/images/muhammad-sosiawan-unsplash.jpg";
import slide2 from "../assets/images/mario-heller-unsplash.jpg";
import slide3 from "../assets/images/marta-ortigosa-unsplash (1).jpg";
import { serviceCards } from "../data/service-card";
import secondimg from "../assets/images/erwan-hesry-1q75BReKpms-unsplash.jpg"
import { works } from "../data/work";

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
        <section className="slider-section max-h-full">
          <div className="slider overflow-hidden w-full">
            {slides.map((slide, index) => (
              <div
                className={slideIndex === index ? "slides" : "slideHidden"}
                key={index}
              >
                <div className="overlay bg-black opacity-100">
                  <img
                    className="slider-img opacity-50 w-full h-full object-cover object-center "
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
            {/* slide indicator */}
            {slides.map(( index)=>(
              <button className="absolute flex items-center justify-center bottom-2 " key={index}>
                &bull;
              </button>
            ))
            }
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
        <section className="about-info flex bg-blue-700 p-8 w-full">
          <div>
            <img
              className="secondimg w-4/5 object-cover rounded-2xl"
              src={secondimg}
              alt="image"
            />
          </div>
          <div className="why-us text-white w-full">
            <div className="title-head">
              <h2 className="font-semibold text-3xl text-slate-300 mb-3">
                Why Us?
              </h2>
              <p className="text-2xl">
                We've consulted for <span className="text-2xl">International Organizations</span> and
                supervised over <span className="text-2xl">300 farmers </span>in Nigeria
              </p>
            </div>
            <span className="summary-text mb-7 text-sm">
              Lorem ipsum, dolor sit amet consectetur adipisicing elit.
              Voluptates repellat quidem cupiditate dolor, explicabo, inventore
              similique quia aut nihil quos tempora ad reiciendis voluptatum
              harum sed consequuntur maiores expedita? Minus?
            </span>

            {/* 4th section */}
            <div className="ourProjects mt-6">
              {works.map((work, index)=>(
                
              <div className="project flex items-center justify-center mb-5" key={index}>
                <img src={work.img1} alt="" />
                <div className="project-info ml-3">
                  <h3 className="text-xl">{work.title}</h3>
                  <p>
                   {work.text}
                  </p>
                </div>
              </div>
              ))}
              {/* <div className="project">
                <img src="icons/healthicons_agriculture-worker.svg" alt="" />
                <div className="project-info">
                  <h3 className="text-xl">Gems4</h3>
                  <p>
                    Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                    Magnam quas ducimus animi tempora iusto! Officia{" "}
                  </p>
                </div>
              </div>
              <div className="project">
                <img
                  src="icons/material-symbols-light_agriculture-outline-sharp.svg"
                  alt=""
                />
                <div className="project-info">
                  <h3 className="text-xl">Gems4</h3>
                  <p>
                    Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                    Magnam quas ducimus animi tempora iusto! Officia{" "}
                  </p>
                </div>
              </div> */}
            </div>
          </div>
        </section>
        <section class="our-work m-3 flex justify-center flex-col relative">
          <div class="work-title">
            <h1 class="text-3xl font-semibold text-blue-700 mt-6">
              Our Projects
            </h1>
          </div>
          {/* slide indicator arrow  */}
          <div class="slide-indicator flex justify-between">
            <a href="">
              <img
                class="left-arrow absolute top-2/4 bottom-0 left-0"
                src="icons/material-symbols-light_arrow-back-ios.svg"
                alt="left-arrow"
              />
            </a>
            <a href="">
              <img
                class="right-arrow absolute top-2/4 bottom-0 right-0"
                src="icons/material-symbols-light_arrow-back-ios-1.svg"
                alt="right=arrow"
              />
            </a>
          </div>
          {/* Each slide  */}
          <section class="project-slider flex">
            <div class="project-slides w-500 m-2 bg-white p-2 rounded-xl relative">
              <img
                class="project-img"
                src="images/arjun-mj-792-GkRUtes-unsplash.jpg"
                alt=""
              />
              <div class="subject">
                <h3 class="text-2xl">PROJECT IN TARABA</h3>
                <p>Executed this Project</p>
              </div>
            </div>
            <div class="project-slides">
              <img
                class="project-img"
                src="images/arjun-mj-792-GkRUtes-unsplash.jpg"
                alt=""
              />
              <div class="subject">
                <h3>PROJECT IN TARABA</h3>
                <p>Executed this Project</p>
              </div>
            </div>
            <div class="project-slides">
              <img
                class="project-img"
                src="images/arjun-mj-792-GkRUtes-unsplash.jpg"
                alt=""
              />
              <div class="subject">
                <h3>PROJECT IN TARABA</h3>
                <p>Executed this Project</p>
              </div>
            </div>
          </section>
        </section>
        <section class="testimonal-section flex flex-col ">
          <div class="testimonal-heading">
            <h1 class="text-3xl font-semibold text-blue-700 mt-6">
              Testimonals
            </h1>
          </div>
          <section class="testimonals flex items-center justify-center px-0 py-4">
            <div class="testimonal-text w-2/4">
              <h1 class=" font-medium mb-3">Our Testimonals</h1>
              <p>
                {" "}
                We have had lot of testimonals from our clients Lorem ipsum
                dolor sit amet, consectetur adipisicing elit. Rem voluptatem
                consequuntur voluptas exercitationem quae aut temporibus
                quibusdam incidunt placeat accusamus, eligendi repellendus
                voluptatibus aliquam dolorum aperiam, molestiae id in. Quam.
              </p>
            </div>
            <section class="testimonal-cards flex p-7 justify-center items-center w-3/5">
              <div class="testimony flex flex-col justify-center items-center">
                <div class="client-info flex justify-center align-center">
                  <img
                    class="client-pic w-full rounded-full "
                    src="images/aiony-haust-3TLl_97HNJo-unsplash.jpg"
                    alt="client-picture"
                  />
                  <h3 class="text-blue-700">Sarah Jones</h3>
                  <p>M&E Manager</p>
                  {/* <span class="ratings"><img src="" alt=""></span>*/}
                </div>
                <div class="review">
                  <span>
                    <img src="/icons/raphael_quote.svg" alt="quotes" />
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Hic
                    eaque voluptates saepe maiores sit, labore autem tempore ab!
                    Saepe deleniti eveniet consectetur earum dolores officia
                    iste reprehenderit maxime autem cupiditate!
                    <img src="icons/entypo_quote.svg" alt="quotes" />
                  </span>
                </div>
              </div>
              <div class="scroll-indicator rounded-full">.</div>
            </section>
          </section>
        </section>
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
                <div class="social-links">
                  <a class="sm-link" href="#">
                    <img
                      src="/logo/facebook-logo-facebook-icon-transparent-free-png.webp"
                      alt="facebook"
                    />
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
      </section>
    </main>
  );
};

export default Home;
