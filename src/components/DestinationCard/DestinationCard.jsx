import React from "react";

function DestinationCard({ item }) {
  return (
    <div className="flex flex-col gap-3 group items-center">
      <img
        className="h-60   duration-300 border border-transparent rounded-full object-cover aspect-square"
        src={item.image}
        alt={item.place + " image"}
      />
      <p className="font-medium text-2xl text-center">{item.place}</p>
    </div>
  );
}

export default DestinationCard;