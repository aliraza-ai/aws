import Image from "next/image";
import Link from "next/link";
import React from "react";
import {
  blogcontent,
  blogstep1,
  blogstep2,
  blogstep3,
  blogstep4,
} from "../../../public";
import { FAQs } from "@/components";
import { BlogContentFAQs } from "@/constants/FaqsData";

const steps = [
  {
    id: 1,
    step: "Step#1",
    detail:
      "Access Intelliwriter AI Content Generator: Open your preferred web browser and navigate to the Intelliwriter.io website. Login and from the user dashboard chose what you want to create.",
    image: blogstep1,
  },
  {
    id: 2,
    step: "Step#2",
    detail:
      "Enter Prompt to Search: Within the AI Blog Content tab, you'll find a blank canvas eagerly awaiting your inspiration. Guide the AI with your words and watch your ideas transform into content.",
    image: blogstep2,
  },
  {
    id: 3,
    step: "Step#3",
    detail:
      "Wait For the Response: Sit back, relax, and let the AI generate your prompt.",
    image: blogstep3,
  },
  {
    id: 4,
    step: "Step#4",
    detail: "Get ready to be amazed – your content is ready.",
    image: blogstep4,
  },
];

const page = () => {
  return (
    <div className="my-16">
      <div className="text-center text-white flex flex-col items-center justify-between gap-3 my-20">
        <h1 className="text-3xl md:text-5xl font-medium capitalize w-[90%] xl:w-[60%] flex flex-col gap-3 pt-6">
          <span>Unleash your creativity</span>
          <span>with Intelliwriter's</span>
          <span className="text-gradient pb-2"> AI Blog Generator</span>
        </h1>

        <p className="text-sm md:text-lg font-light w-[90%] xl:w-[50%] py-8">
          The world of content creation is in the midst of a seismic shift. Gone
          are the days of hunched writers battling blank pages; enter the age of
          the AI-powered content generator. These clever bots are breathing new
          life into the process, offering a level of speed, efficiency, and even
          creativity that human wordsmiths alone can't match.
        </p>
        <div className="w-fit">
          <button className="w-fit rounded-lg bg-gradient-to-r from-[rgba(247,15,255,1)] to-[#2C63FF] px-3 py-1 md:px-4 md:py-2 hover:opacity-90">
            <Link href="/user/blog-content" target="_blank">
              Try Intelliwriter Blog Generator!
            </Link>
          </button>
        </div>
      </div>

      <div className="w-full h-[25rem] md:h-[40rem] flex items-center justify-center relative p-5 sm:px-28 md:py-20 md:px-40 opacity-80">
        <div className="absolute inset-0 filter blur-[5px] opacity-95">
          <img
            src={blogcontent}
            alt=""
            className="w-full h-[25rem] md:h-[40rem] object-cover"
          />
        </div>
        <img
          src={blogcontent}
          alt=""
          className="h-[20rem] md:w-[30rem] md:h-[30rem] z-10  rounded-2xl"
        />
      </div>

      <div className="my-10 md:my-20 text-center text-white flex flex-col items-center justify-center">
        <h2 className="text-2xl md:text-4xl font-bold capitalize w-[90%] xl:w-[70%]">
          Why use Intelliwriter's blog generator
        </h2>
        <p className="text-sm md:text-lg my-4 w-[90%] xl:w-[50%]">
          IIntelliWriter isn't just a tool, it's a creative partner. It's your
          AI muse, your content companion, your secret weapon against writer's
          block and tired tropes. So, say goodbye to the blank page blues and
          unleash your inner creative beast with IntelliWriter's AI blog
          generator.
        </p>
      </div>

      <div className="imageContentGeneratorSteps text-center py-10 px-[10%] text-white  flex flex-col items-center justify-center ">
        <h2 className="mb-5 text-2xl md:text-5xl font-semibold capitalize  ">
          Our Intelliwriter AI blog generator unlocks stunningly original and
          magnetic content that grabs readers and never lets go.
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
      
      <div className="mt-10">
        <FAQs faqs={BlogContentFAQs} />
      </div>
    </div>
  );
};

export default page;
