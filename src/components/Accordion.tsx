"use client";

import React, { useState } from "react";
import { BsArrowUp, BsArrowDown } from "react-icons/bs";
interface AccordProps {
  id: number;
  question: string;
  answer: string;
}

type SomeSpecificType = number | string;

const Accordion = ({ faqs }: { faqs?: AccordProps[] }) => {
  const [openIndices, setOpenIndices] = useState<SomeSpecificType[]>([]);

  const toggleAccordion = (index: SomeSpecificType) => {
    if (isOpenIndex(index)) {
      setOpenIndices(openIndices.filter((i) => i !== index));
    } else {
      if (openIndices.length === 2) {
        setOpenIndices([index]);
      } else {
        setOpenIndices([...openIndices, index]);
      }
    }
  };

  const isOpenIndex = (index: SomeSpecificType): index is number => {
    return openIndices.includes(index as number);
  };

  if (!faqs) {
    return <div className="text-white opacity-60">No FAQs available.</div>;
  }

  return (
    <div className="flex flex-col items-center">
      {faqs.map((accords, index) => (
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
                {openIndices.includes(index) ? (
                  <BsArrowUp
                    className={`text-white md:text-xl text-lg mr-2 ${
                      openIndices.includes(index)
                        ? "transition-all duration-500 ease-in-out opacity-100"
                        : "opacity-0"
                    }`}
                  />
                ) : (
                  <BsArrowDown
                    className={`text-white md:text-xl text-lg mr-2 ${
                      !openIndices.includes(index)
                        ? "transition-all duration-500 ease-in-out opacity-100"
                        : "opacity-0"
                    }`}
                  />
                )}
              </div>
            </div>
          </div>
          <div
            className={`bg-primary-two/75 w-full border-gray-500 border-1 drop-shadow-lg transition-all duration-300 ease-in-out ${
              openIndices.includes(index) ? "max-h-[1000px]" : "max-h-0"
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

