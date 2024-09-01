import React from "react";
import heroImage from "../../assets/images/hero-image.png";

function Hero() {
  return (
    <section className="relative">
      <img
        src={heroImage}
        alt="Hero image"
        className="w-full h-691 object-cover"
      />
      <div className="container absolute left-0 bottom-36 md:bottom-20 z-10 text-white max-w-900 flex flex-col gap-10 items-start">
        <div className="flex flex-col gap-3">
          <h1 className="font-semibold text-3xl md:text-5xl uppercase">
            Enjoy your city to the fullest
          </h1>
          <p className="font-medium text-xs md:text-xl font-montserrat">
            Find events that match your interests and book your tickets
            effortlessly. From theater shows to sports events, we have it all!
          </p>
        </div>
        <button className=" py-2 md:py-4 px-4 md:px-8 bg-button rounded-lg">
          Find events
        </button>
      </div>
    </section>
  );
}

export default Hero;
