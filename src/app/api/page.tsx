// import Image from "next/image";
import { FAQs } from "@/components";
import { APILandingFAQs } from "@/constants/FaqsData";
import Link from "next/link";
import React from "react";
import {
  apicontent,
  apistep1,
  apistep2,
  apistep3,
  apistep4,
} from "../../../public";
import Button from "@/components/Button";

const steps = [
  {
    id: 1,
    step: "Step#1",
    detail:
      "Access Intelliwriter AI website: Checkout the link for API in navbar, Click and Jump to the API Docs of Intelliwriter",
    image: apistep1,
  },
  {
    id: 2,
    step: "Step#2",
    detail:
      "Here You are! Look for your desired service, APIs for Content, Images, and Voice overs, Just a click away ",
    image: apistep2,
  },
  {
    id: 3,
    step: "Step#3",
    detail:
      "Dive into the documentation of your API, Have a go through and in case let us know what we can do more",
    image: apistep3,
  },
  {
    id: 4,
    step: "Step#4",
    detail: "Just hit the copy button and boost your productivity",
    image: apistep4,
  },
];

const page = () => {
  return (
    <div className="my-16">
      <div className="text-center text-white flex flex-col items-center justify-between gap-3 my-20">
        <h1 className="text-3xl md:text-5xl font-medium capitalize w-[90%] xl:w-[60%] flex flex-col gap-3 pt-6">
          <span>Integrate Powerful Writing</span>
          <span>Capabilities Seamlessly with </span>
          <span className="text-gradient">Intelliwriter APIs</span>
        </h1>

        <p className="text-sm md:text-lg font-light w-[90%] xl:w-[50%] py-8">
          Infuse your applications with the ability to understand, analyze, and
          generate human-quality text, unlocking a multitude of new features and
          possibilities.
        </p>
        <div className="w-fit">
          <Link href="/api/docs">
            <Button
              title="Discover Intelliwriter's API Services!"
              btnType="button"
            />
          </Link>
        </div>
      </div>

      <div className="w-full h-[25rem] md:h-[40rem] flex items-center justify-center relative p-5 sm:px-28 md:py-20 md:px-40 opacity-80">
        <div className="absolute inset-0 filter blur-[5px] opacity-65">
          <img
            src={apicontent}
            alt=""
            className="w-full h-[25rem] md:h-[40rem] object-cover"
          />
        </div>
        <img
          src={apicontent}
          alt=""
          className="h-[20rem] md:w-[30rem] md:h-[30rem] z-10  rounded-2xl"
        />
      </div>

      <div className="mt-5 imageContentGeneratorSteps text-center py-10 px-[10%] text-white  flex flex-col items-center justify-center ">
        <h2 className="mb-10 text-2xl md:text-5xl font-semibold capitalize ">
          Intelliwriter offers an easy and scalable way to write your backend
          code
        </h2>

        {steps.map((item) => (
          <div
            key={item.id}
            className={` my-4 flex flex-col gap-5 md:flex md:flex-row md:items-center md:justify-between w-full ${item.id == 2 || item.id == 4 ? "md:flex-row-reverse" : ""
              }`}
          >
            <div className="items-start flex flex-col md:w-4/12 ">
              <h2 className="text-lg md:text-xl font-bold">{item.step}</h2>
              <p className="text-start text-base md:text-lg">{item.detail}</p>
            </div>

            <div className="rounded-md shadow-[#101027] shadow-2xl">
              <img
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

      <div className="mt-10">
        <FAQs faqs={APILandingFAQs} />
      </div>
    </div>
  );
};

export default page;
