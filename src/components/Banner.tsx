"use client";

import React from "react";
import Image from "next/image";
import { CTA_Shape1, CTA_Shape3, CTA_Graph } from "../../public";
import { useRouter } from "next/navigation";

const tokens =
  typeof window !== "undefined" ? sessionStorage.getItem("tokens") : null;

const Banner = () => {
  const router = useRouter();

  const handleClick = () => {
    if (tokens) {
      router.push("/user/dashboard");
    } else {
      router.push("/auth/register");
    }
  };
  return (
    <div className="container mx-auto w-full p-5 md:px-10 lg:px-24 pb-16 relative">
      <div className="bg-[#54157eec] text-white md:flex items-center justify-center px-2 py-4 md:p-10 rounded-2xl relative">
        <div>
          <Image
            src={CTA_Shape3}
            className="absolute top-0 left-0"
            alt=""
            width={800}
            height={300}
          />
        </div>
        <div className="md:w-1/2 p-5">
          <Image src={CTA_Graph} alt="cta" width={500} height={300} />
        </div>

        <div className="md:w-1/2 py-3 px-5 md:p-5 relative z-10">
          <h2 className="font-vietnam font-semibold text-lg md:text-3xl lg:text-4xl md:my-6 relative">
            More than 13000 teams use our platform
          </h2>
          <p className="text-base my-4 md:my-8">
            Experience the difference and elevate your content creation with our
            cutting-edge tools and support.
          </p>
          <button onClick={handleClick}>
            <div className=" bg-gradient-to-r from-[rgba(247,15,255,1)] to-[#2C63FF] font-semibold  px-4 py-2 rounded-md h-fit flex justify-between items-center gap-2 hover:opacity-90">
              Get Started
            </div>
          </button>
        </div>
      </div>

      <div className="absolute right-0 bottom-0 md:block hidden md:mr-8 mt-10 z-0">
        <Image src={CTA_Shape1} alt="cta-shape" width={300} height={100} />
      </div>
    </div>
  );
};

export default Banner;
