import React, { useEffect, useState } from "react";
import { testimonals } from "../data/testimony";
import leftQuote from "../assets/icons/raphael_quote.svg";
import rightQuote from "../assets/icons/entypo_quote.svg";

const Testimonals = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % testimonals.length);
    }, 5000);

    return () => clearInterval(interval);
  }, [testimonals.length]);

  return (
    <main class="testimonal-section flex flex-col items-center my-20 ">
      <div class="testimonal-heading">
        <h1 class="text-3xl font-semibold text-blue-700 mt-6">Testimonals</h1>
      </div>
      <section class="testimonals flex items-center justify-center m-8 px-0 py-4">
        <div class="testimonal-text w-2/4">
          <h1 class=" font-semibold text-xl mb-3">Our Testimonals</h1>
          <p>
            {" "}
            We have had lot of testimonals from our clients Lorem ipsum dolor
            sit amet, consectetur adipisicing elit. Rem voluptatem consequuntur
            voluptas exercitationem quae aut temporibus quibusdam incidunt
            placeat accusamus, eligendi repellendus voluptatibus aliquam dolorum
            aperiam, molestiae id in. Quam.
          </p>
        </div>
        <section class="testimonal-card flex p-20 justify-center items-center w-3/5 relative overflow-hidden">
          {testimonals.map((testimony, index) => (
            <div
              class={`testimony p-12 flex flex-col justify-center items-center ${
                currentIndex === index
                  ? "slideVisible"
                  : currentIndex ===
                    (index - 1 + testimonals.length) % testimonals.length
                  ? "slideExit"
                  : "slideHidden "
              }`}
              key={index}
            >
              <div class="client-info flex justify-center items-center">
                <img
                  class="client-pic w-16 h-16 object-cover mr-3"
                  src={testimony.img}
                  alt="client-picture"
                />
                <span>
                  <h3 class="text-blue-700">{testimony.name}</h3>
                  <p>{testimony.role}</p>
                  {/* <span class="ratings"><img src="" alt=""></span>*/}
                </span>
              </div>
              <div class="review">
                <span>
                  <img src={leftQuote} alt="quotes" />
                  {testimony.message}
                  <img src={rightQuote} alt="quotes" />
                </span>
              </div>
            </div>
          ))}
          <div className="indicators absolute bottom-3">
            {testimonals.map((_, btnIndex) => (
              <button
                className={
                  currentIndex === btnIndex
                    ? "scroll-indicator shadow-md"
                    : "indicator-inactive"
                }
                key={btnIndex}
                onClick={() => setCurrentIndex(btnIndex)}
              >
                &#11044;
              </button>
            ))}
          </div>
        </section>
      </section>
    </main>
  );
};

export default Testimonals;
