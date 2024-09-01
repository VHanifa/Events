import React from "react";
import workshopsIcon from "../../assets/icons/workshops.svg";
import exhibitionsIcon from "../../assets/icons/exhibitions.svg";
import foodAndDrinksIcon from "../../assets/icons/food-and-drinks.svg";
import holidaysIcon from "../../assets/icons/holidays.svg";
import sportsIcon from "../../assets/icons/sports-icon.svg";
import concertsIcon from "../../assets/icons/concerts.svg";
function Services() {
  const services = [
    {
      title: "Workshops",
      icon: workshopsIcon,
    },
    {
      title: "Exhibitions",
      icon: exhibitionsIcon,
    },
    {
      title: "Food & Drinks",
      icon: foodAndDrinksIcon,
    },
    {
      title: "Holidays",
      icon: holidaysIcon,
    },
    {
      title: "Sports",
      icon: sportsIcon,
    },
    {
      title: "Concerts",
      icon: concertsIcon,
    },
  ];

  return (
    <section className="container py-10 md:py-16 grid grid-cols-3 lg:grid-cols-4 xl:grid-cols-6 gap-5 justify-center">
      {services.map((service, index) => (
        <div key={index} className="flex flex-col gap-2 items-center group">
          <div className="aspect-square lg:w-190 lg:h-185 flex justify-center items-center rounded-full border-surface-color border">
            <img
              className="w-[30%] h-1/2"
              src={service.icon}
              alt={service.title + "icon"}
            />
          </div>
          <p className="font-medium text-xs md:text-xl lg:text-2xl text-center ">
            {service.title}
          </p>
        </div>
      ))}
    </section>
  );
}

export default Services;
