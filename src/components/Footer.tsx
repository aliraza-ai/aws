"use client";

import SocialIcons from "@/components/SocialIcons";
import { FOOTER_FEATURES, FOOTER_LINKS, SOCIAL_LINKS } from "@/constants";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import { Logo } from "../../public";

const Footer: React.FC = () => {
  return (
    <div className="md:pt-0 text-[16px] text-white md:w-full w-full">
      <div className="bg-gradient-to-r from-blue-500/10 to-pink-600/10 relative overflow-hidden pb-2 pt-8 px-5 md:px-14 xl:px-36 xl:pt-14">

        <div className="md:flex-row flex-col gap-6 flex justify-between">
          <div className="flex flex-col gap-2 md:w-1/2 w-full">
            <div className="w-36">
              <Link href="/">
                <Image
                  src={Logo}
                  alt="Logo"
                  width={250}
                  height={25}
                  className="object-contain w-40 xl:w-48"
                />
              </Link>
            </div>
            <div className="py-2 md:mr-20 max-w-md">
              <p className="text-base opacity-75 font-normal">
                At IntelliWriter, we are passionate about the power of
                technology to revolutionize the way we create content.
              </p>
            </div>
            <div>
              <SocialIcons socialLinks={SOCIAL_LINKS} />
            </div>
          </div>

          <div className="flex flex-row md:justify-end justify-between md:w-1/2 w-full gap-8 pb-10">
            <div className="flex flex-col w-1/2">
              <span className="bg-gradient-to-r from-[#F70FFF] to-[#1754fc] text-transparent bg-clip-text text-xl font-semibold">
                Menu
              </span>
              <ul className="flex-col">
                {FOOTER_LINKS.map((item, index) => (
                  <li
                    key={index}
                    className="py-1 text-base opacity-75 font-light"
                  >
                    <Link href={item.link}>{item.title}</Link>
                  </li>
                ))}
              </ul>
            </div>
            <div className="flex flex-col w-1/2">
              <span className="bg-gradient-to-r from-[#F70FFF] to-[#1754fc] text-transparent bg-clip-text text-xl font-semibold">
                Features
              </span>
              <ul className="flex-col">
                {FOOTER_FEATURES.map((item, index) => (
                  <li
                    key={index}
                    className="py-1 text-base opacity-75 font-light"
                  >
                    <Link href={item.link}>{item.title}</Link>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
        <div className="border-t-2 border-[#ffffff37] my-2"></div>
        <div className="md: md:flex-row flex flex-col items-center justify-center md:justify-between opacity-75 text-base">
          <p>
            <Link href="/" className="text-pink-500">
              Intelliwriter.io{" "}
            </Link>{" "}
            &copy; All rights reserved.
          </p>
          <div>
            <ul className="flex items-center justify-center gap-5 text-sm">
              <li className="md:pb-0 pb-1">
                <Link href="/termsandcondition" className="hover:text-pink-500">
                  Terms and conditions
                </Link>
              </li>
              <li>
                <Link href="/privacypolicy" className="hover:text-pink-500">
                  Privacy policy
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
