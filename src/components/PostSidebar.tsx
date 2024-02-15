"use client";
import React from "react";
import {
  Alert,
  List,
  ListItem,
  ListItemPrefix,
  Typography,
} from "@material-tailwind/react";
import Image from "next/image";
import Link from "next/link";
import { BiSolidImageAlt } from "react-icons/bi";
import { CgWebsite } from "react-icons/cg";
import { FaBook, FaDollarSign, FaRegShareSquare } from "react-icons/fa";
import { GiSoundWaves } from "react-icons/gi";
import { IoIosClose } from "react-icons/io";
import { LuLayoutDashboard } from "react-icons/lu";
import { MdContactSupport } from "react-icons/md";
import { RiLogoutBoxRFill } from "react-icons/ri";
import {
  SiBloglovin,
  SiChatbot,
  SiGooglemarketingplatform,
} from "react-icons/si";
import Swal from "sweetalert2";
import { Logo } from "../../public";
import { IoIosSearch } from "react-icons/io";
import post1 from "../../public/post/post1.png";
import { postPage } from "@/constants/index";

const PostSidebar = () => {
  return (
    <div
      className={`sm:w-[430px] w-full absolute top-60 lg:right-24 transition-all text-white duration-200 $ ? "right-0" : "sm:-right-[250px] -right-full"
      } border-[#54515b] rounded-none h-screen text-white p-0 py-4 pt-0 transition-all duration-200 custom-scrollbar`}
    >
      <div className=" w-full lg:w-[100%] relative flex flex-col gap-8 bg-[#121636] shadow-xl rounded-2xl p-8 ">
        <p className="border-l-4 border-[#c5268b] px-4 text-white text-2xl">
          Recent Post
        </p>
        <label className=" relative flex items-center justify-between ">
          <input
            type="text"
            placeholder="Search"
            className="px-16 py-5 bg-[#121636] border border-slate-200 rounded-full "
          />
          <div className="absolute bg-[#c5268b] text-base text-white p-3 rounded-full lg:right-14 hover:opacity-80 right-[2.5rem] cursor-pointer">
            <IoIosSearch />
          </div>
        </label>
      </div>

      <div className=" w-full lg:w-[100%] relative flex flex-col gap-8 bg-[#121636] shadow-xl rounded-2xl p-8 my-8 ">
        <p className="border-l-4 border-[#c5268b] px-4 text-white text-2xl">
          Category
        </p>

        <ul className="flex flex-col gap-5 justify-between list-disc p-5 text-xl">
          <li>Payout</li>
          <li>Prompts</li>
          <li>AI</li>
        </ul>
      </div>

      <div className=" w-full lg:w-[100%] relative flex flex-col gap-8 bg-[#121636] shadow-xl text-white rounded-2xl p-8 ">
        <p className="border-l-4 border-[#c5268b] px-4 text-white text-2xl">
          Recent Post
        </p>

        
          {postPage.map((item, id) => (
            <div key={id} 
            className="flex flex-row justify-center gap-5 "
            >
              <Image
                src={item.image}
                alt={item.image}
                width={300}
                height={300}
                className="object-cover rounded-2xl w-1/2"
              />

              <div className="flex flex-col gap-2">
                <p className="text-white text-xl">{item.title}</p>
                <p className="text-sm">{item.date}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
  );
};

export default PostSidebar;
