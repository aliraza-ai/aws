"use client";

import React from "react";
import SwiperCore from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/effect-cards";
import { EffectCards } from "swiper/modules";
import { SliderActive } from "../../public";
import Image from "next/image";
SwiperCore.use([EffectCards]);


const HeroSlider = () => {

  const images = [
    {
      id: 1,
      img: SliderActive,
    },
    {
      id: 2,
      img: SliderActive,
    },
    {
      id: 3,
      img: SliderActive,
    },
    {
      id: 4,
      img: SliderActive,
    },
  ];

  return (
    <Swiper
      effect={"cards"}
      grabCursor={true}
      className="mySwiper flex items-center justify-center"
      initialSlide={1}
      slidesPerView={1}
    >
      {images.map(item => (
        <SwiperSlide key={item.id}>
          <div className="swiper-slide w-[600px] h-[300px] bg-slate-400">
            <Image src={item.img} alt={item.img} fill className="object-cover max-h-[400px] max-w-[800px]" />
          </div>
        </SwiperSlide>

      ))}

    </Swiper>

  );
};

export default HeroSlider;
