"use client";
import { FAQs } from "@/components";
import { CourseBuilderFAQs } from "@/constants/FaqsData";
import { MoretoolsCourse, dataCourse, stepsCourse } from "@/constants/index";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import { coursecontent, curve1 } from "../../../public";
import Button from "@/components/Button";

const CourseBuilderPage = () => {
  return (
    <div className="my-16">
      <div className="text-center text-white flex flex-col items-center justify-between gap-3 my-20">
        <h1 className="text-3xl md:text-5xl font-medium capitalize w-[90%] xl:w-[60%] flex flex-col gap-3 pt-6">
          <span>Unleash your creativity</span>
          <span>with Intelliwriter's</span>
          <span className="text-gradient pb-2"> AI Course Builder</span>
        </h1>
        <p className="text-sm md:text-lg my-4 w-[90%] xl:w-[50%]">
          Explore your creativity through digital art exploration. Immerse
          yourself in a realm of creation and dynamic prompts that nurture
          artistic expression. Whether you're a Professor,Teacher,Academic
          controller or seeking to infuse creativity into your projects, our
          AI-powered tool empowers you to craft captivating Courses within
          seconds.
        </p>
        <div className="w-fit">
          <Link href="/auth/course-builder">
            <Button
              title="Try Intelliwriter AI Course Builder!"
              btnType="button"
            />
          </Link>
        </div>
      </div>

      <div className="w-full h-[25rem] md:h-[40rem] flex items-center justify-center relative p-5 sm:px-28 md:py-20 md:px-40 opacity-80">
        <div className="absolute inset-0 filter blur-[5px] opacity-95">
          <Image
            src={coursecontent}
            alt="course image"
            width={850}
            height={850}
            className="w-full h-[25rem] md:h-[40rem] object-cover"
          />
        </div>
        <Image
          src={coursecontent}
          alt=""
          width={850}
          height={850}
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
          {dataCourse.map((item, index) => (
            <div
              key={index}
              className="card w-FULL md:w-1/3 xl:w-1/6 bg-blue-900 bg-opacity-20 p-2 ml-2"
            >
              <span className=" bg-[#f3e8ff] m-2 block w-10 h-10 rounded-md text-[#9333ea] text-2xl  p-2">
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
          Why use Intelliwriter's Course Builder
        </h2>
        <p className="text-sm md:text-lg my-4 w-[90%] xl:w-[50%]">
          Intelliwriter's AI Course Builder isn't just a tool, it's an
          experience. We've crafted a seamless platform that empowers you to
          effortlessly bring your visions to life. Join the revolution and
          discover the magic of AI-powered Course creation.
        </p>
      </div>

      <div className="imageContentGeneratorSteps text-center py-10 px-[10%] text-white  flex flex-col items-center justify-center ">
        <h2 className="mb-5 text-2xl md:text-5xl font-semibold capitalize  ">
          OUR TOOL USES THE LATEST IN AI TECHNOLOGY TO GENERATE CREATIVE WEBSITE
          CONTENT THAT ARE UNIQUE AND ENGAGING.
        </h2>

        {stepsCourse.map((item) => (
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
                alt="website content"
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
          <div className="flex flex-wrap justify-center item-center">
            {MoretoolsCourse.map((item, index) => (
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
        <FAQs faqs={CourseBuilderFAQs} />
      </div>
    </div>
  );
};

export default CourseBuilderPage;
