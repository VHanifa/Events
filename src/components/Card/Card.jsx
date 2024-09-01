import React from "react";
import heartIcon from "../../assets/icons/heart.svg";
import calendarIcon from "../../assets/icons/calendar.svg";
import checkCircleIcon from "../../assets/icons/check-circle.svg";
import ticketIcon from "../../assets/icons/ticket.svg";

function Card({ item }) {
  const truncatedTitle = item.title.substring(0, 13) + "...";
  const options = {
    year: "numeric",
    month: "short",
    day: "2-digit",
  };
  const eventDate = new Date(item.date);
  const formattedDate = eventDate.toLocaleDateString("en-US", options);

  return (
    <div className="event-card flex flex-col gap-1 items-center rounded-lg">
      <div className="relative w-full rounded-t-lg">
        <img
          className="w-full h-36 md:h-220 object-cover rounded-t-lg"
          src={item.image}
          alt={item.title + " image"}
        />
        <div className="absolute right-3 top-3">
          <button className="w-11 h-11 flex justify-center items-center bg-button-1 rounded-full ">
            <img src={heartIcon} alt="Heart icon" />
          </button>
        </div>
      </div>
      <div className="flex flex-col ">
        <h1 className="text-2xl font-semibold text-surface-color">
          {item.title.length > 15 ? truncatedTitle : item.title}
        </h1>
        <div className="flex items-center">
          <img src={calendarIcon} alt="Calendar icon" />
          <span className="pl-1">{formattedDate}</span>
          <span className="px-3">•</span>
          <span>{item.time}</span>
        </div>
        <div className="flex items-center gap-1">
          <img src={checkCircleIcon} alt="Check icon" />
          <p>
            <span>{item.applied}</span> going
          </p>
        </div>
        <div className="flex items-center gap-1 pb-2">
          <img src={ticketIcon} alt="Ticket icon" />
          <p className="flex text-button font-semibold text-xl">
            $ <span>{item.price}</span>
          </p>
        </div>
      </div>
    </div>
  );
}

export default Card;
