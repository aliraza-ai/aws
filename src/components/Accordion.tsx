"use client";

import React, { useState } from "react";
import { Accord } from "@/constants";
import { BsArrowUp, BsArrowDown } from "react-icons/bs";

const Accordion = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggleAccordion = (index: number) => {
    setOpenIndex((prevIndex) => (prevIndex === index ? null : index));
  };

  return (
    <div className="flex flex-col items-center">
      {Accord.map((accords, index) => (
        <div
          key={index}
          className="w-full my-1 overflow-hidden mx-0 rounded-[12px] border border-[#FFFFFF14]"
        >
          <div
            className={`rounded-t-[12px] bg-primary-two w-full p-6  py-4 cursor-pointer transition-all duration-300 ease-in-out`}
            onClick={() => toggleAccordion(index)}
          >
            <div className="flex items-center w-full justify-between">
              <span className="sm:text-base md:text-lg lg:text-lg text-white">
                {accords.question}
              </span>
              <div className="flex items-center">
                {openIndex === index ? (
                  <BsArrowUp className="text-white md:text-2xl text-lg font-bold ml-24" />
                ) : (
                  <BsArrowDown className="text-white md:text-2xl font-bold text-lg ml-24" />
                )}
              </div>
            </div>
          </div>
          <div
            className={`bg-primary-two/75 w-full border-gray-500 border-1 drop-shadow-lg transition-all duration-300 ease-in-out ${
              openIndex === index ? "max-h-[1000px]" : "max-h-0"
            } overflow-hidden`}
          >
            <p className="text-white text-[16px] px-4 sm:text-[16px] md:text-[16px] lg:text-[16px] mt-2 py-2">
              {accords.answer}
            </p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Accordion;
