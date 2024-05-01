"use client";

import { images, nfts } from "@/constants";
import Image from "next/image";
import SwiperCore from "swiper";
import { EffectCards } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
SwiperCore.use([EffectCards]);

const AboutSection = () => {
  return (
    <div className="flex flex-wrap w-full justify-center">
      <div className="flex lg:flex-row flex-col items-center w-full lg:gap-2 gap-8 container py-10">
        <div className="lg:w-[45%] w-full flex justify-start">
          <Swiper
            effect={"cards"}
            grabCursor={true}
            className="mySwiper w-[300px]"
            initialSlide={1}
            slidesPerView={1}
          >
            {images.map((item) => (
              <SwiperSlide key={item.id} className="bg-slate-300">
                <Image
                  src={item.img}
                  alt={item.img}
                  className="object-cover"
                  fill
                />
              </SwiperSlide>
            ))}
          </Swiper>
        </div>

        <div className="flex flex-col justify-center items-center lg:w-1/2 w-full text-left">
          <span className="text-white text-[30px] leading-[52px] md:text-[42px] md:text-start text-center font-normal lg:w-full">
            Transforming Ideas into Stunning Images with Intelliwriter
          </span>
          <p className="py-6 text-white text-base md:text-start text-center font-normal w-full md:w-full">
            The Intelliwriter Image Generator Module is a powerful addition to
            the Intelliwriter platform, enabling users to effortlessly create
            custom images that enhance their written content. With intuitive
            controls and advanced algorithms, this module ensures a seamless
            integration of dynamic visuals, elevating the overall impact and
            engagement of your message across various platforms.
          </p>
        </div>
      </div>

      <div className="flex lg:flex-row flex-col items-center w-full gap-2 container mx-auto p-10">
        <div className="flex flex-col justify-center items-center md:justify-center md:items-center lg:w-1/2 w-full text-left xl:pl-20">
          <span className="text-white text-[30px] leading-[52px] md:text-[42px] md:text-start text-center font-normal lg:w-full">
            Unlock the NFT Creations with Intelliwriter
          </span>
          <p className="py-6 text-white text-base font-normal md:w-full">
            The NFT Generator Module in Intelliwriter is your go-to tool for
            effortlessly creating unique non-fungible tokens. With easy-to-use
            controls and advanced algorithms, it simplifies the process of
            tokenizing digital assets, making it a seamless experience for
            showcasing and owning digital content. Dive into the world of NFTs
            with Intelliwriter's user-friendly NFT Generator Module.{" "}
          </p>
        </div>

        <div className="lg:w-[45%] w-full">
          <Swiper
            effect={"cards"}
            grabCursor={true}
            className="mySwiper w-[300px]"
            initialSlide={1}
            slidesPerView={1}
          >
            {nfts.map((item) => (
              <SwiperSlide key={item.id} className="bg-slate-300">
                <Image
                  src={item.img}
                  alt={item.img}
                  className="object-cover"
                  fill
                />
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>
    </div>
  );
};

export default AboutSection;
