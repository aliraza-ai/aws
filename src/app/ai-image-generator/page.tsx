"use client";
import { FAQs } from "@/components";
import { ImageGeneratorFAQs } from "@/constants/FaqsData";
import { MoretoolsImage, stepsImage } from "@/constants/index";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import { imagecontent, imagecontentbg } from "../../../public";
import Button from "@/components/Button";

const page = () => {
  return (
    <div className="my-16">
      <div className="text-center text-white flex flex-col items-center justify-between gap-3 my-20">
        <h1 className="text-3xl md:text-5xl font-medium capitalize w-[90%] xl:w-[60%] flex flex-col gap-3 pt-6">
          <span>Unleash your creativity</span>
          <span>with Intelliwriter's</span>
          <span className="text-gradient pb-2"> AI Image Generator</span>
        </h1>

        <p className="text-sm md:text-lg font-light w-[90%] xl:w-[50%] py-8">
          Explore your creativity through digital art exploration. Immerse
          yourself in a realm of creation and dynamic prompts that nurture
          artistic expression. Whether you're a blogger, social media marketer,
          or seeking to infuse creativity into your projects, our AI-powered
          tool empowers you to craft captivating images within seconds.
        </p>

        <div className="w-fit">
          <Link href="/user/image-generator">
            <Button
              title="Try Intelliwriter Image Generator!"
              btnType="button"
            />
          </Link>
        </div>
      </div>

      <div className="w-full h-[25rem] md:h-[40rem] flex items-center justify-center relative p-5 sm:px-28 md:py-20 md:px-40 opacity-80">
        <div className="absolute inset-0 filter blur-[5px] opacity-95">
          <img
            src={imagecontentbg}
            alt=""
            className="w-full h-[25rem] md:h-[40rem] object-cover"
          />
        </div>
        <img
          src={imagecontent}
          alt=""
          className="h-[20rem] md:w-[30rem] md:h-[30rem] z-10  rounded-2xl"
        />
      </div>

      <div className="my-10 md:my-20 text-center text-white flex flex-col items-center justify-center">
        <h2 className="text-2xl md:text-4xl font-bold capitalize w-[90%] xl:w-[70%]">
          Why use Intelliwriter's image generator
        </h2>
        <p className="text-sm md:text-lg my-4 w-[90%] xl:w-[50%]">
          Intelliwriter's AI Image Generator isn't just a tool, it's an
          experience. We've crafted a seamless platform that empowers you to
          effortlessly bring your visions to life. Join the revolution and
          discover the magic of AI-powered image creation.
        </p>
      </div>

      <div className="imageContentGeneratorSteps text-center py-10 px-[10%] text-white  flex flex-col items-center justify-center ">
        <h2 className="mb-5 text-2xl md:text-5xl font-semibold capitalize  ">
          OUR TOOL USES THE LATEST IN AI TECHNOLOGY TO GENERATE BEAUTIFUL IMAGES
          THAT ARE UNIQUE AND ENGAGING.
        </h2>

        {stepsImage.map((item) => (
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
              {/* <Image src={gradientcircle} alt='' height={600} width={600} className='opacity-40 absolute -translate-x-2/3 -translate-y-full'/> */}
              {/* <div className="bg-[#214abd] w-[330px] h-[330px] absolute rounded-full -translate-y-4/5 translate-x-1/2 md:translate-x-2/3 lg:translate-x-full blur-[120px]"></div> */}
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
          <div className="flex flex-wrap justify-center item-center">
            {MoretoolsImage.map((item, index) => (
              <div
                key={index}
                className="bg-blue-900 m-2 text-center p-2 bg-opacity-20 md:w-[25%] lg:w-[16%] Moretools"
              >
                <span
                  className="items-center justify-center block w-9 h-9 rounded-md text-xl m-3 mr-3 p-2"
                  style={{
                    backgroundColor: item.bgcolor,
                    color: item.color,
                  }}
                >
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
      </div>

      <div className="mt-10">
        <FAQs faqs={ImageGeneratorFAQs} />
      </div>
    </div>
  );
};

export default page;
