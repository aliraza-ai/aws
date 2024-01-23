"use client";

import React, { useState } from "react";
import { Typewriter } from "react-simple-typewriter";
import dynamic from "next/dynamic";
const ScrollButton = dynamic(() => import("@/components/ScrollButton"));
import { HERO_CONTENT } from "../constants";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { heroEffect, logoMin } from "../../public";
import { IoIosClose } from "react-icons/io";

const Hero = () => {
  const [popup, setPopup] = useState(false);
  const sessionTokens = typeof window !== "undefined" ? sessionStorage.getItem("tokens") : null;
  const isLoggedIn = sessionTokens !== null;
  const navigate = useRouter();

  const handleClick = () => {
    if (isLoggedIn) {
      navigate.push("/user/dashboard");
    } else {
      setPopup(true);
    }
  };

  return (
    <>
      <div className="h-screen mx-auto px-36 absolute mt-0 md:top-20 flex justify-center">
        <div className="w-fit mt-0 md:mt-60 sm:block hidden">
          <Image src={heroEffect} width={2000} height={1000} alt="Hero Icons Image" loading="lazy" />
        </div>
      </div>

      <div className="xl:pt-20 pt-10 bg-cover bg-center Hero-bg">
        <div className=" flex flex-col items-center gap-3 px-4 md:px-8 lg:px-12 xl:px-24">
          <h2 className="text-white text-4xl md:text-5xl lg:text-6xl font-semibold text-center pt-10">
            <span className="bg-clip-text text-transparent bg-gradient-to-tr from-[#ec44ff] to-[#2d46ff]">
              AI Magic
            </span>
            
            <br />
            
            <div className="flex flex-col lg:flex-row items-center gap-4 mt-3">
              <span>{HERO_CONTENT.heading}</span>
              
              <p className="lg:w-[280px] md:w-[210px] w-[170px] lg:h-20 md:h-16 h-12 flex items-center justify-center rounded-lg p-3 bg-primary-two">
                <span className="metaText">
                  <Typewriter
                    words={["Images", "Ads", "NFTs", "Blogs", "Content"]}
                    loop={100}
                    typeSpeed={70}
                    deleteSpeed={50}
                    delaySpeed={1000}
                  />
                </span>
              </p>
            </div>
          </h2>

          <h1 className="py-2 text-center text-xl tracking-widest text-white">
            Free AI Writing Generator & Best AI Image Generator
          </h1>

          <div className="text-white text-base lg:text-lg my-0 mx-auto max-w-2xl">
            <p className="text-base text-center mb-6">
              {HERO_CONTENT.description}
            </p>
          </div>

          <div className="relative flex text-white rounded-3xl bg-gradient-to-r from-[rgba(247,15,255,1)] to-[#2C63FF] p-0.5 items-center justify-start w-[90%] md:w-[70%] lg:w-[40%] gap-3">
            <button
              type="button"
              className="bg-black text-[9px] md:text-[13px] md:py-2 md:px-5 py-2 px-2 flex items-center justify-center rounded-3xl hover:opacity-75"
              onClick={handleClick}
            >
              Create Prompt
            </button>
            
            <input
              type="text"
              placeholder="Create your prompts"
              className="placeholder-white text-[9px] md:text-[14px] focus:outline-none bg-transparent"
            />
          </div>

          <div className="pt-20 w-full flex items-center justify-center">
            <ScrollButton />
          </div>
        </div>
      </div>

      {popup && (
        <div>
          <div
            className="w-full h-screen fixed bg-black/40 top-0 left-0"
            onClick={() => setPopup(false)}
          ></div>

          <div className=" lg:w-[500px] lg:h-[500px] w-[280px] h-[400px] md:w-[500px] md:h-[500px]  fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-primary-two rounded-lg drop-shadow-xl z-50">
            <div className="w-full h-full flex flex-col items-center justify-center px-6 gap-6 text-white">
              <div className="w-16 h-16 bg-slate-500 rounded-full flex items-center justify-center">
                <div className="h-4/5">
                  <Image
                    src={logoMin}
                    alt={logoMin}
                    width={50}
                    height={50}
                  />
                </div>
              </div>

              <h3 className="font-medium text-[16px] lg:text-2xl">
                Welcome to Intelliwriter
              </h3>

              <p className="text-[16px] text-white font-[500]">
                Register or Login to continue
              </p>

              <button
                type="button"
                className="w-full py-3 bg-[#5F0E66] rounded-md font-semibold cursor-pointer"
                onClick={() => navigate.push("/auth/login")}
              >
                Login
              </button>

              <button
                type="button"
                className="w-full py-3 bg-gray-700 rounded-md font-semibold cursor-pointer"
                onClick={() => navigate.push("/auth/register")}
              >
                Register
              </button>
            </div>

            <IoIosClose
              className="text-white text-2xl cursor-pointer absolute top-2 right-2"
              onClick={() => setPopup(false)}
            />
          </div>
        </div>
      )}
    </>
  );
};

export default Hero;
