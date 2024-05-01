"use client";

import { ABOUTUS_CONTENT } from "@/constants";
import { useWebContext } from "@/context/ContextProvider";
import dynamic from "next/dynamic";
const AboutSection = dynamic(() => import("@/components/AboutSection"));

const AboutUs = () => {
  const { aboutRef } = useWebContext();
  const content = ABOUTUS_CONTENT[0];
  return (
    <div className='w-full flex flex-col gap-3 py-10 items-center' id="about" ref={aboutRef}>
      <div className='xl:px-16 md:px-6 px-4 py-10 w-full container'>
        <h2 className='lg:text-6xl text-5xl font-normal relative lg:p-10 md:p-6 p-4'>
          <span className='border-text text-white opacity-20 absolute md:top-3 lg:top-4 top-0 lg:left-10'>Our Story &</span>
          <span className='text-white relative lg:p-6 p-6'>ABOUT US</span>
        </h2>

        <p className='md:text-lg text-base font-extralight !text-white lg:px-10 md:p-6 p-4'>
          Established on March 20, 2023, Intelliwriter has been a trailblazer in the realm of AI-powered content generation. Initially specializing in text modules, our journey has since evolved to encompass AI Images and AI Voice capabilities, catering to diverse content needs. Our platform is designed to streamline the content creation process, enabling individuals and businesses to produce high-quality, engaging content effortlessly. With a focus on innovation and user satisfaction, we continue to push the boundaries of what's possible in content creation, making creativity accessible to all. Join us as we lead the way in shaping the future of intelligent content creation with Intelliwriter.
        </p>

        {/* <div className="w-full py-20 flex justify-center items-center">
          <div className="w-[1200px] h-[650px] shadow-lg rounded-[30px] about-us bg-slate-700">
            <img src={aboutUs} alt={aboutUs} className="h-full" />
          </div>
        </div> */}
      </div>

      <>
        <AboutSection />
      </>

      {/* <h2 className="text-white lg:text-4xl md:text-4xl text-3xl font-normal md:py-20 py-10">
        Fuel Your Content Creation with
        <span className=" mx-2 bg-clip-text text-transparent bg-gradient-to-tr from-[#ec44ff] to-[#2d46ff]">
          Intelliwriter
        </span>
      </h2>
       */}

      {/* <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 items-center justify-between sm:gap-10 md:gap-24 pt-0 pb-4 px-8 md:px-36 contentSec">
        {content.steps.map((step, index) => (
          <div key={index} className=" flex justify-between mb-5 gap-24">
            <div className="rounded-3xl shadow metaBorder gap-24">
              <Image
                src={step.image}
                width={1000}
                height={500}
                alt={`Step ${index + 1}`}
                className="max-w-full h-auto gap-24"
              />
            </div>
          </div>
        ))}
      </div> */}
    </div>
  );
};

export default AboutUs;
