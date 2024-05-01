"use client";

import Accordion from "./Accordion";

interface AccordProps {
  id: number;
  question: string;
  answer: string;
}

const FAQs = ({ faqs }: { faqs?: AccordProps[] }) => {
  return (
    <div className="xl:px-16 md:px-6 px-4 py-10 w-full container">
      <div className="py-10">
        <h2 className="lg:text-6xl text-5xl font-normal relative lg:p-10 md:p-6 p-4">
          <span className="border-text text-white opacity-20 absolute md:top-3 lg:top-4 top-0 lg:left-10">
            FREQUENTLY ASKED
          </span>
          <span className="text-white relative lg:p-6 p-6">QUESTIONS</span>
        </h2>

        <p className="2xl:text-xl md:text-lg text-[18px] font-normal !text-white/70 lg:px-10 md:p-6 p-4">
          We&apos;re dedicated to assisting individuals interested in generating
          AI-driven content and imageS.
        </p>
      </div>

      <div className="w-full flex items-center justify-center lg:px-10 md:px-6 px-4">
        <Accordion faqs={faqs} />
      </div>
    </div>
  );
};

export default FAQs;
