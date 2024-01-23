"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import { FOOTER_LINKS, FOOTER_FEATURES, SOCIAL_LINKS } from "@/constants";
import SocialIcons from "@/components/SocialIcons";
import { Logo } from "../../public";

const Footer: React.FC = () => {
  return (
    <div className="md:pt-0 text-[16px] text-white w-full">
      <div className="bg-primary-two pb-2 pt-8 px-5 xl:px-10 xl:pt-14">
        <div className="md:flex-row flex-col gap-10 flex justify-between">
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
              <p className="text-base opacity-75 font-light">
                At IntelliWriter, we are passionate about the power of
                technology to revolutionize the way we create content.
              </p>
            </div>
            <div>
              <SocialIcons socialLinks={SOCIAL_LINKS} />
            </div>
          </div>

          <div className="flex flex-row md:justify-end justify-between md:w-1/2 w-full gap-6 pb-10">
            <div className="flex flex-col w-1/5">
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

        <div className="border-t-2 border-[#ffffff37] my-2 "></div>

        <div className="md:flex justify-between opacity-75 text-base">
          <p>
            <Link href="/" className="text-pink-500">
              Intelliwriter.io{" "}
            </Link>{" "}
            &copy; All rights reserved.
          </p>
          <div>
            <ul className="flex items-center justify-center gap-5 text-sm">
              <li className="pb-1">
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
