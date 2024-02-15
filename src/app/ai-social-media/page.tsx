"use client";
import { FAQs } from "@/components";
import { SocialMediaFAQs } from "@/constants/FaqsData";
import {
  MoretoolsSocialMedia,
  dataSocialMedia,
  stepsSocial,
} from "@/constants/index";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import { curve1, socialmediaBg } from "../../../public";
import Button from "@/components/Button";

const page = () => {
  return (
    <div className="my-16">
      <div className="text-center text-white  flex flex-col items-center justify-between gap-3 mb-20">
        <h1 className="text-3xl md:text-5xl font-semibold capitalize w-[90%] xl:w-[70%]">
          Unleash your{" "}
          <span className="bg-clip-text text-transparent bg-gradient-to-tr from-[#ec44ff] to-[#2d46ff]">
            creativity
          </span>{" "}
          with intelliwriter's
          <br />{" "}
          <span className="bg-clip-text text-transparent bg-gradient-to-tr from-[#ec44ff] to-[#2d46ff]">
            AI Social Media
          </span>{" "}
          generator
        </h1>
        <p className="text-sm md:text-lg my-4 w-[90%] xl:w-[50%]">
          Viral magic! AI crafts captions, titles & hashtags that skyrocket your
          reach. Ditch writer's block. Unleash AI to generate buzzworthy social
          content in seconds.
        </p>
        <div className="w-fit">
          <Link href="/auth/social-media">
            <Button
              title="Try Intelliwriter Social Media Generator!"
              btnType="button"
            />
          </Link>
        </div>
      </div>

      <div className="w-full h-[25rem] md:h-[40rem] flex items-center justify-center relative p-5 sm:px-28 md:py-20 md:px-40 opacity-80">
        <div className="absolute inset-0 filter blur-[5px] opacity-95">
          <img
            src={socialmediaBg}
            alt=""
            className="w-full h-[25rem] md:h-[40rem] object-cover"
          />
        </div>
        <img
          src={socialmediaBg}
          alt=""
          className="h-[20rem] md:w-[30rem] md:h-[30rem] z-10  rounded-2xl"
        />
      </div>

      <div className="w-1/3 text-white  m-12 ">
        <h2 className="text-3xl">
          Elevate your conservation
          <br />
          <Image src={curve1} alt="curve" className="w-1/4" />
        </h2>
        <p className="text-2sm">
          Embracing the age of Artifical Intelligence. Discover Boundless power
          and impact of AI.
        </p>
      </div>

      <div className="container mx-auto">
        <div className="flex flex-wrap gap-4 m-6 justify-center item-center">
          {dataSocialMedia.map((item, index) => (
            <div
              key={index}
              className="card w-FULL md:w-1/3 xl:w-1/5 bg-blue-900 bg-opacity-20 p-2 ml-4"
            >
              <span className=" bg-[#fef9c3] m-2 block w-10 h-10 rounded-md text-[#facc15] text-2xl  p-2">
                {React.createElement(item.icon)}
              </span>
              <div className="text text-white p-2">
                <h1 className="text-2xl">{item.title}</h1>
                <p className="text-sm">{item.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="my-10 md:my-20 text-center text-white flex flex-col items-center justify-center">
        <h2 className="text-2xl md:text-4xl font-bold capitalize w-[90%] xl:w-[70%]">
          Why use Intelliwriter's social media generator
        </h2>
        <p className="text-sm md:text-lg my-4 w-[90%] xl:w-[50%]">
          Intelliwriter's AI Social Media Generator isn't just a tool, it's an
          experience. We've crafted a seamless platform that empowers you to
          effortlessly bring your words an attractive look. Join the revolution
          and discover the magic of AI-powered Content Creation to boost your
          productivity.
        </p>
      </div>

      <div className="imageContentGeneratorSteps text-center py-10 px-[10%] text-white  flex flex-col items-center justify-center ">
        <h2 className="mb-5 text-2xl md:text-5xl font-semibold capitalize  ">
          OUR TOOL USES THE LATEST IN AI TECHNOLOGY TO GENERATE CAPTIVATING
          WORDS THAT ARE UNIQUE AND ENGAGING.
        </h2>

        {stepsSocial.map((item) => (
          <div
            key={item.id}
            className={` my-4 flex flex-col gap-5 md:flex md:flex-row md:items-center md:justify-between w-full ${item.id == 2 || item.id == 4 ? "md:flex-row-reverse" : ""
              }`}
          >
            <div className="items-start flex flex-col md:w-4/12 ">
              <h2 className="text-lg md:text-xl font-semibold">{item.step}</h2>
              <p className="text-start text-base md:text-lg">{item.detail}</p>
            </div>

            <div className="rounded-md shadow-[#101027] shadow-2xl">
              <Image
                src={item.image}
                alt=""
                height={650}
                width={650}
                className="rounded-xl border border-[#1f1f7a]"
              />
            </div>
          </div>
        ))}
      </div>

      <div className="reason py-8 mt-10 md:mt-20 text-center text-white flex flex-col items-center justify-center">
        <h2 className="text-2xl py-4 md:text-4xl font-bold capitalize w-[90%] xl:w-[70%]">
          Our more tools you may{" "}
          <span className="intelliwriter">like them</span>
        </h2>
        <div className="container mx-auto">
          <div className="flex flex-wrap justify-center items-center">
            {MoretoolsSocialMedia.map((item, index) => (
              <div
                key={index}
                className="bg-blue-900 m-2 text-center p-2 bg-opacity-20 md:w-[25%] lg:w-[16%] Moretools"
              >
                <span
                  className="flex items-center justify-center w-12 h-12 rounded-full text-2xl m-3 p-2"
                  style={{
                    backgroundColor: item.bgcolor,
                    color: item.color,
                  }}
                >
                  {React.createElement(item.icon)}
                </span>
                <div className="text text-white mt-2">
                  <h1 className="text-xl font-semibold">{item.title}</h1>
                  <p className="text-sm">{item.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
      <div className="mt-10">
        <FAQs faqs={SocialMediaFAQs} />
      </div>
    </div>
  );
};

export default page;
