"use client";

import React from "react";
import Image from "next/image";
import { ABOUTUS_CONTENT } from "@/constants";
import { useWebContext } from "@/context/ContextProvider";
import dynamic from "next/dynamic";
const AboutSection = dynamic(() => import("@/components/AboutSection"));

const AboutUs = () => {
  const { aboutRef } = useWebContext();
  const content = ABOUTUS_CONTENT[0];
  return (
    <div
      ref={aboutRef}
      className="container mx-auto text-white text-center w-full pt-24 overflow-hidden"
      id="about"
    >
      <div className=" w-full flex items-center justify-center flex-col">
        <div className="w-full text-white flex-col flex gap-2 items-center justify-center ">
          <h2 className="text-center lg:text-[36px] md:text-3xl sm:text-2xl text-2xl font-semibold">
            <span>About</span>
            <span className="text-gradient pl-1">Us</span>
          </h2>
          <div className="w-full flex items-center justify-center text-center gap-8 max-w-4xl">
            <p className="md:w-[85%] w-full px-2 md:px-0 text-center pb-10 lg:pb-10 pt-3 leading-8 lg:text-[16px] md:text-[16px] text-[16px] font-thin">
              {content.description}
            </p>
          </div>
        </div>
      </div>

      <>
        <AboutSection />
      </>

      <h2 className="text-white lg:text-5xl md:text-4xl text-3xl font-normal md:py-20 py-10">
        Generate Content Images using <br />
        <span className="bg-clip-text text-transparent bg-gradient-to-tr from-[#ec44ff] to-[#2d46ff]">
          Intelliwriter
        </span>
      </h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 items-center justify-center sm:gap-10 pt-0 pb-4 px-8 md:px-36 contentSec">
        {content.steps.map((step, index) => (
          <div key={index} className="mb-5">
            <div className="rounded-3xl shadow metaBorder">
              <Image
                src={step.image}
                width={1000}
                height={500}
                alt={`Step ${index + 1}`}
                className="max-w-full h-auto"
              />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default AboutUs;
