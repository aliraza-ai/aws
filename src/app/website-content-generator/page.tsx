import Link from "next/link";
import React from "react";
import {
  websitecontent,
  websitestep1,
  websitestep2,
  websitestep3,
  websitestep4,
  blogcontent,
} from "../../../public";
import { FAQs } from "@/components";
import { WebsiteContentGeneratorFAQs } from "@/constants/FaqsData";

const steps = [
  {
    id: 1,
    step: "Step#1",
    detail:
      "Access Intelliwriter AI Content Generator: Open your preferred web browser and navigate to the Intelliwriter.io website. Login and from the user dashboard choose what you want to create.",
    image: websitestep1,
  },
  {
    id: 2,
    step: "Step#2",
    detail:
      "Enter Prompt to Search: Within the AI Image Generator, you'll find a blank canvas eagerly awaiting your inspiration. Guide the AI with your words and watch your ideas transform into art.",
    image: websitestep2,
  },
  {
    id: 3,
    step: "Step#3",
    detail:
      "Wait For the Response: Creativity takes time, even for AI. Sit back, relax, and let the magic unfold.",
    image: websitestep3,
  },
  {
    id: 4,
    step: "Step#4",
    detail: "Get ready to be amazed – your content is ready.",
    image: websitestep4,
  },
];

const page = () => {
  return (
    <div className="my-16">
      <div className="text-center text-white flex flex-col items-center justify-between gap-3 my-20">
        <h1 className="text-3xl md:text-5xl font-medium capitalize w-[90%] xl:w-[60%] flex flex-col gap-3 pt-6">
          <span>Unleash your creativity</span>
          <span>with Intelliwriter's</span>
          <span className="text-gradient">AI Website Content Generator</span>
        </h1>

        <p className="text-sm md:text-lg font-light w-[90%] xl:w-[50%] py-8">
          Explore your creativity through digital art exploration. Immerse
          yourself in a realm of creation and dynamic prompts that nurture
          artistic expression. Whether you're a Website Developer, Software
          Engineer, or seeking to infuse creativity into your projects, our
          AI-powered tool empowers you to craft captivating images within
          seconds.
        </p>
        <div className="w-fit">
          <button className="w-fit rounded-lg bg-gradient-to-r from-[rgba(247,15,255,1)] to-[#2C63FF] px-3 py-1 md:px-4 md:py-2 hover:opacity-90">
            <Link href="/user/website">
              Try Intelliwriter AI Website Content Generator!
            </Link>
          </button>
        </div>
      </div>

      <div className="w-full h-[25rem] md:h-[40rem] flex items-center justify-center relative p-5 sm:px-28 md:py-20 md:px-40 opacity-80">
        <div className="absolute inset-0 filter blur-[5px] opacity-95">
          <img
            src={websitecontent}
            alt=""
            className="w-full h-[25rem] md:h-[40rem] object-cover"
          />
        </div>
        <img
          src={websitecontent}
          alt=""
          className="h-[20rem] md:w-[30rem] md:h-[30rem] z-10  rounded-2xl"
        />
      </div>

      <div className="my-10 md:my-20 text-center text-white flex flex-col items-center justify-center">
        <h2 className="text-2xl md:text-4xl font-bold capitalize w-[90%] xl:w-[70%]">
          Why use Intelliwriter's Website content generator
        </h2>
        <p className="text-sm md:text-lg my-4 w-[90%] xl:w-[50%]">
          Intelliwriter's AI Website content Generator isn't just a tool, it's
          an experience. We've crafted a seamless platform that empowers you to
          effortlessly bring your visions to life. Join the revolution and
          discover the magic of AI-powered Website content creation.
        </p>
      </div>

      <div className="imageContentGeneratorSteps text-center py-10 px-[10%] text-white  flex flex-col items-center justify-center ">
        <h2 className="mb-5 text-2xl md:text-5xl font-semibold capitalize  ">
          OUR TOOL USES THE LATEST IN AI TECHNOLOGY TO GENERATE CREATIVE WEBSITE
          CONTENT THAT ARE UNIQUE AND ENGAGING.
        </h2>

        {steps.map((item) => (
          <div
            key={item.id}
            className={` my-4 flex flex-col gap-5 md:flex md:flex-row md:items-center md:justify-between w-full ${
              item.id == 2 || item.id == 4 ? "md:flex-row-reverse" : ""
            }`}
          >
            <div className="items-start flex flex-col md:w-4/12 ">
              <h2 className="text-lg md:text-xl font-semibold">{item.step}</h2>
              <p className="text-start text-base md:text-lg">{item.detail}</p>
            </div>

            <div className="rounded-md shadow-[#101027] shadow-2xl">
              <img
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

      <div className="mt-10">
        <FAQs faqs={WebsiteContentGeneratorFAQs} />
      </div>
    </div>
  );
};

export default page;
