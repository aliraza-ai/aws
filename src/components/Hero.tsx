"use client";

import { useState } from "react";
import { heroBg } from "../../public";
import Button from "./Button";
import Link from "next/link";
import { Typewriter } from "react-simple-typewriter";

const Hero = () => {
  const [popup, setPopup] = useState(false);

  return (
    <div className="w-full relative md:h-screen h-full overflow-hidden"
      style={{
        backgroundImage: `url('/intelli-bg.png')`,
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover",
      }}>
      {/* <img src="/intelli-bg.png" alt="hero" className="h-full opacity-60 -z-20 absolute bottom-0 left-0" /> */}
      {/* <Image src={HeroBg} alt={HeroBg} width={1200} height={500} className="absolute w-fit md:h-screen sm:h-[700px] h-[600px] top-0 right-0 overflow-hidden" /> */}
      {/* <video autoPlay loop muted className="absolute top-0 left-0 w-full h-screen object-cover">
        <source src={heroBg} />
      </video> */}


      <div className="flex h-screen items-start w-full relative overflow-hidden">
        <>
          {/* <div className="w-full h-[300px] bg-gradient-to-b from-primary to-transparent absolute top-0 left-0" /> */}
          <div className="w-full h-[450px] bg-gradient-to-t from-primary from-20% to-transparent absolute bottom-0 left-0" />
        </>
        <div className="w-[600px] h-[600px] bg-[#471c7c] blur-[300px] absolute bottom-4 right-4 -z-20" />
        <div className="w-[300px] h-[300px] bg-[#c18ffd] blur-[140px] absolute bottom-4 right-10 -z-10" />

        <div className="w-full h-screen md:px-10 px-3 flex gap-3 items-center ">
          {/* Side */}
          {/* <div className="md:w-12 w-6 flex items-center flex-col gap-2 self-end">
            <FaRegLightbulb className="text-[#7628d6] text-2xl" />
            <div className="w-0.5 h-[60vh] bg-gradient-to-b from-[#471c7c] to-[#7628d6]"></div>
          </div> */}

          <div className="w-full flex md:flex-row flex-col items-center justify-center relative">
            {/* Left side */}
            <div className="w-full text-center flex items-center justify-between flex-col gap-3">
              <h1 className="xl:text-[78px] lg:text-[78px] md:text-7xl !leading-normal sm:text-6xl text-5xl flex flex-col justify-between font-semibold text-white w-full relative py-10">
                <span>Touch the Power of</span>
                <span className="flex md:flex-row items-center flex-col justify-center gap-3"><span className="whitespace-nowrap w-[455px] h-[110px] flex items-center justify-center rounded-lg px-3 bg-[#4d0663]">
                  <Typewriter
                    words={["AI Content", "AI Visuals", "AI Speech",]}
                    loop={100}
                    typeSpeed={70}
                    deleteSpeed={50}
                    delaySpeed={1000}
                  />
                </span> with </span>
                <span>IntelliWriter.</span>
              </h1>

              <p className="w-full text-center md:text-[24px] text-lg !text-white font-sans font-[500] -mt-4 md:w-3/4 leading-40">
                Generate Images, Voices, NFTs & text content with <span className="font-medium">Intelli GPT-4</span> LLM</p>

              <Link href="/user/dashboard">
                <Button
                  title="Get Started"
                  btnType="button"
                  className="mt-4 !px-10 !py-3 2xl:text-2xl xl:text-xl md:text-lg text-base"
                />
              </Link>
            </div>

            {/* Right side */}
            {/* <div className="md:w-1/2 w-full flex justify-center items-center">
              <img src={righthero} alt={righthero} className="w-4/5" />
            </div> */}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;