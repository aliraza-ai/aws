"use client";

import React from "react";
import SwiperCore from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import { EffectCards } from "swiper/modules";
import { images, nfts } from "@/constants";
import Image from "next/image";
SwiperCore.use([EffectCards]);

const AboutSection = () => {
  
  return (
    <div className="flex flex-wrap w-full">
      <div className="flex lg:flex-row flex-col items-center w-full container mx-auto p-10">
        <div className="lg:w-[45%] w-full flex justify-start">
          <Swiper effect={"cards"} grabCursor={true} className="mySwiper w-[300px]" initialSlide={1} slidesPerView={1}>
            {images.map((item) => (
              <SwiperSlide key={item.id} className="bg-slate-300">
                <Image src={item.img} alt={item.img} className="object-cover" fill />
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
        
        <div className="lg:w-1/2 w-full text-left xl:pr-20">
          <h2 className="flex flex-col justify-center items-center text-white lg:text-5xl md:text-4xl text-3xl font-normal md:w-full">
            Create Images with <br />
            <span className=" flex bg-clip-text text-transparent justify-center bg-gradient-to-tr from-[#ec44ff] to-[#2d46ff]">
             {" "}  Intelliwriter
            </span>
          </h2>
          <p className="py-6 text-white text-base font-thin md:w-4/5">
            The Intelliwriter Image Generator Module is a powerful addition to the Intelliwriter platform, enabling users to effortlessly create custom images that enhance their written content. With intuitive controls and advanced algorithms, this module ensures a seamless integration of dynamic visuals, elevating the overall impact and engagement of your message across various platforms.
          </p>
        </div>
      </div>

      <div className="flex lg:flex-row flex-col items-center w-full container mx-auto p-10">
        <div className="lg:w-1/2 w-full text-left xl:pl-20">
          <h2 className="flex flex-col justify-center items-center text-white lg:text-5xl md:text-4xl text-3xl font-normal md:w-full">
            Generate NFTs using <br />
            <span className="flex justify-center bg-clip-text text-transparent bg-gradient-to-tr from-[#ec44ff] to-[#2d46ff]">
              Intelliwriter
            </span>
          </h2>
          <p className="py-6 text-white text-base font-thin md:w-4/5">
            The NFT Generator Module in Intelliwriter is your go-to tool for effortlessly creating unique non-fungible tokens. With easy-to-use controls and advanced algorithms, it simplifies the process of tokenizing digital assets, making it a seamless experience for showcasing and owning digital content. Dive into the world of NFTs with Intelliwriter's user-friendly NFT Generator Module.          </p>
        </div>

        <div className="lg:w-[45%] w-full">
          <Swiper effect={"cards"} grabCursor={true} className="mySwiper w-[300px]" initialSlide={1} slidesPerView={1}>
            {nfts.map((item) => (
              <SwiperSlide key={item.id} className="bg-slate-300">
                <Image src={item.img} alt={item.img} className="object-cover" fill />
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>
    </div>
  );
};

export default AboutSection;
