"use client";

import SocialIcons from "@/components/SocialIcons";
import { FOOTER_FEATURES, FOOTER_LINKS, SOCIAL_LINKS } from "@/constants";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import { Logo } from "../../public";

const Footer: React.FC = () => {
  return (
    <div className="bg-transparent border-t-2 mt-10 border-[#FFFFFF14] text-white xl:px-16 md:px-6 px-4 w-full">
      <div className="relative overflow-hidden pb-2 py-10">
        <div className="w-full flex md:flex-row flex-col justify-between gap-10  md:py-6 p-4">
          <div className="flex flex-col gap-2 xl:w-2/5">
            <div className="w-20 md:w-32">
              <Link href="/" passHref className="text-white font-extrabold text-3xl tracking-wide font-montserrat -mb-[10px]">
                <img
                  src={Logo}
                  alt="Logo"
                  className="object-contain w-28 xl:w-48"
                />
                {/* Intelliwriters<span className="text-4xl px-0.5">.</span> */}

              </Link>
            </div>

            <div className="py-2 w-11/12">
              <p className="text-sm lg:text-base !text-white font-extralight">
                At IntelliWriter, we are passionate about the power of
                technology to revolutionize the way we create content.
              </p>
            </div>

            <div className="text-3xl">
              <SocialIcons socialLinks={SOCIAL_LINKS} />
            </div>
          </div>

          <div className="whitespace-nowrap xl:w-fit w-full flex md:justify-end">
            <div className="w-full grid md:grid-cols-3 grid-cols-2 lg:gap-20 gap-10">
              <div className="w-fit space-y-2">
                <span className="text-white text-base lg:text-lg font-semibold">
                  General
                </span>

                <ul className="space-y-1">
                  {FOOTER_LINKS.map((item, index) => (
                    <li
                      key={index}
                      className="py-1 text-sm lg:text-base opacity-75 hover:opacity-100 transition duration-300 font-extralight"
                    >
                      <Link href={item.link}>{item.title}</Link>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="w-fit space-y-2">
                <span className="text-white text-base lg:text-lg font-semibold">
                  Features
                </span>

                <ul className="space-y-1">
                  {FOOTER_FEATURES.map((item, index) => (
                    <li
                      key={index}
                      className="py-1 text-sm lg:text-base opacity-75 hover:opacity-100 transition duration-300 font-extralight"
                    >
                      <Link href={item.link}>{item.title}</Link>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="w-fit space-y-2">
                <span className="text-white text-base lg:text-lg font-semibold">
                  Important Links
                </span>

                <ul className="space-y-1">
                  <li className="py-1 text-sm lg:text-base opacity-75 hover:opacity-100 font-light">
                    <Link href="/termsandcondition" >
                      Terms and conditions
                    </Link>
                  </li>

                  <li className="py-1 text-sm lg:text-base opacity-75 hover:opacity-100 font-light">
                    <Link href="/#faqs">
                      FAQs
                    </Link>
                  </li>

                  <li className="py-1 text-sm lg:text-base opacity-75 hover:opacity-100 font-light">
                    <Link href="/privacypolicy">
                      Privacy policy
                    </Link>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t-2 border-[#ffffff37] my-4"></div>

        <div className="my-2 flex items-center justify-center opacity-75 text-base">

          <p>
            <Link href="/" className="text-pink-500">
              Intelliwriter.io{" "}
            </Link>{" "}
            &copy; All rights reserved.
          </p>

        </div>
      </div>
    </div>
  );
};

export default Footer;
