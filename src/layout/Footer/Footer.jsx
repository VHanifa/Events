import React from "react";
import envelopeIcon from "../../assets/icons/envelope.svg";
import { Link } from "react-router-dom";
function Footer() {
  const navigations = [
    {
      label: "Events",
      value: "/events",
    },
    {
      label: "About us",
      value: "/about-us",
    },
    {
      label: "Contact us",
      value: "/contact-us",
    },
    {
      label: "Sign in",
      value: "/sign-in",
    },
  ];

  return (
    <footer className="container bg-surface-color text-white font-medium py-8 flex flex-col gap-10 md:gap-14 md:items-end">
      <ul className="flex flex-col items-center  md:flex-row gap-8 ">
        {navigations.map((navigation, index) => (
          <Link
            className={
              navigation.value === "/sign-in" ? "text-text-1 font-normal" : ""
            }
            key={index}
            to={navigation.value}
          >
            {navigation.label}
          </Link>
        ))}
      </ul>
      <div className="flex w-full justify-between flex-col-reverse md:flex-row gap-4 items-center">
        <h1 className="font-jua uppercase text-2xl">Eventslink</h1>
        <a
          href="mailto:eventslink@gmail.com"
          className="flex gap-2 md:gap-3 items-center"
        >
          <img
            className="w-5 md:w-fit"
            src={envelopeIcon}
            alt="Envelope icon"
          />
          <p className="text-xs md:text-base">eventslink@gmail.com</p>
        </a>
      </div>
    </footer>
  );
}

export default Footer;
