import React from "react";
import DestinationCard from "../DestinationCard/DestinationCard";
import { destinations } from "../../constants/data";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import { Navigation } from "swiper/modules";
import arrowRightIcon from "../../assets/icons/arrow-right.svg";

function Destinations() {
  return (
    <section className="container flex flex-col gap-7 md:gap-4 box-border ">
      <h1 className="font-semibold text-lg md:text-3xl">
        Popular destinations
      </h1>
      <div className="flex relative gap-5">
        <button
          id={"destination-btn-prev"}
          className="swiper-custom-prev absolute"
        >
          <img src={arrowRightIcon} alt="Arrow right icon" />
        </button>
        <Swiper
          slidesPerView={4}
          spaceBetween={20}
          navigation={{
            prevEl: `#${"destination-btn-prev"}`,
            nextEl: `#${"destination-btn-next"}`,
          }}
          breakpoints={{
            0: {
              slidesPerView: 1,
            },
            640: {
              slidesPerView: 2,
            },
            768: {
              slidesPerView: 3,
            },
            1024: {
              slidesPerView: 4,
            },
          }}
          modules={[Navigation]}
          className="mySwiper"
        >
          {destinations.map((destination, index) => (
            <SwiperSlide key={index}>
              <DestinationCard item={destination} />
            </SwiperSlide>
          ))}
        </Swiper>
        <button
          id={"destination-btn-next"}
          className="swiper-custom-next absolute"
        >
          <img src={arrowRightIcon} alt="Arrow right icon" />
        </button>
      </div>
    </section>
  );
}

export default Destinations;
