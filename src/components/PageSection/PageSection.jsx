import React from "react";
import Card from "../Card/Card";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import { Navigation } from "swiper/modules";
import arrowRightIcon from "../../assets/icons/arrow-right.svg";

function PageSection({ title, list }) {
  const formattedTitle = title.toLowerCase().replace(/ /g, "-");

  return (
    <section className="container flex flex-col gap-5 py-6 md:py-12">
      <div className="flex justify-between">
        <h1 className="font-semibold text-lg md:text-3xl">{title}</h1>
        <button className="p-0 hidden md:block text-xl font-semibold ">
          See all
        </button>
      </div>
      <div className="flex gap-5 relative">
        <button
          id={formattedTitle + "-btn-prev"}
          className="swiper-custom-prev absolute"
        >
          <img src={arrowRightIcon} alt="Arrow right icon" />
        </button>
        <Swiper
          spaceBetween={30}
          navigation={{
            prevEl: `#${formattedTitle + "-btn-prev"}`,
            nextEl: `#${formattedTitle + "-btn-next"}`,
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
            1280: {
              slidesPerView: 5,
            },
          }}
          modules={[Navigation]}
          className="mySwiper pb-10"
        >
          {list.map((listItem, index) => (
            <SwiperSlide key={index}>
              <Card item={listItem} />
            </SwiperSlide>
          ))}
        </Swiper>
        <button
          id={formattedTitle + "-btn-next"}
          className="swiper-custom-next "
        >
          <img src={arrowRightIcon} alt="Arrow right icon" />
        </button>
      </div>
    </section>
  );
}

export default PageSection;
