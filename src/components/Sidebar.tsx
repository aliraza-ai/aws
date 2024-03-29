"use client";

import "@/app/globals.css";
import { useAuth } from "@/context/AuthContext";
import { useWebContext } from "@/context/ContextProvider";
import { Alert, List, ListItem, ListItemPrefix, Typography } from "@material-tailwind/react";
import Image from "next/image";
import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import React from "react";
import { BiSolidImageAlt } from "react-icons/bi";
import { CgWebsite } from "react-icons/cg";
import { FaBook, FaDollarSign, FaRegShareSquare } from "react-icons/fa";
import { GiSoundWaves } from "react-icons/gi";
import { IoIosClose } from "react-icons/io";
import { LuLayoutDashboard } from "react-icons/lu";
import { MdContactSupport } from "react-icons/md";
import { RiLogoutBoxRFill } from "react-icons/ri";
import { SiBloglovin, SiChatbot, SiGooglemarketingplatform } from "react-icons/si";
import Swal from "sweetalert2";
import { Logo } from "../../public";

export function Sidebar() {
  const router = useRouter();
  const [openAlert, setOpenAlert] = React.useState(true);
  const { setToggle, toggle } = useWebContext();
  const { setTokens, setNameLetter } = useAuth();

  const logout = async () => {
    sessionStorage.removeItem("tokens");
    sessionStorage.removeItem("name");
    sessionStorage.removeItem("nameLetter");
    sessionStorage.removeItem("userId");
    setTokens(null);
    setNameLetter("");
    await Swal.fire({
      icon: "success",
      title: "Success",
      text: "Logout Successfully!",
    });
    router.push("/");
  };

  const pathName = usePathname();

  return (
    <div className={`sm:w-[250px] w-full border-r z-[999] fixed top-0 lg:left-0 transition-all duration-200 ${toggle ? "left-0" : "sm:-left-[250px] -left-full"
      } border-[#54515b] rounded-none h-screen p-0 py-4 pt-0 shadow-xl bg-[rgb(32,45,72)] md:bg-[rgba(32,45,72,0.4)] backdrop-blur-sm overflow-y-auto transition-all duration-200 custom-scrollbar`}>
      {/* Close icon */}
      <IoIosClose className="text-white text-4xl absolute top-5 right-2 lg:hidden block" onClick={() => setToggle(!toggle)} />

      <div className="mb-0 p-4 border-b border-[#54515b]">
        <Link href="/">
          <Image src={Logo} alt="Logo" width={150} height={20} />
        </Link>
      </div>

      <List className="py-4 rounded-none space-y-2">
        {/* Dashboard */}
        <div className="space-y-2">
          <p className="text-[12px] font-medium uppercase text-gray-300">
            Start Here
          </p>

          <Link
            href="/user/dashboard"
            className={`flex items-center border-b-0 p-3 list-item-hover rounded-[6px]  ${pathName == "/user/dashboard" ? "bg-[#640f6c]" : ""
              } `}
            onClick={() => setToggle(!toggle)}
          >
            <ListItem className="p-0 ">
              <ListItemPrefix>
                <LuLayoutDashboard className="h-5 w-5 text-white" />
              </ListItemPrefix>
              <Typography className="text-white">Dashboard</Typography>

            </ListItem>
          </Link>
        </div>

        <div className="pt-3 space-y-2">
          <p className="text-[12px] font-medium uppercase text-gray-300">
            Our Tools
          </p>

          {/* Blog Content */}
          <Link
            href="/user/blog-content"
            className={`flex items-center border-b-0 p-3 list-item-hover rounded-[6px] ${pathName == "/user/blog-content" ? "bg-[#640f6c]" : " "
              } `}
            onClick={() => setToggle(!toggle)}
          >
            <ListItem className="p-0 ">
              <ListItemPrefix>
                <SiBloglovin className="h-5 w-5 text-white" />
              </ListItemPrefix>

              <Typography className="text-white">Blog Content</Typography>
            </ListItem>
          </Link>

          {/* Social Media */}
          <Link
            href="/user/social-media"
            className={`flex items-center border-b-0 p-3 list-item-hover rounded-[6px] ${pathName == "/user/social-media" ? "bg-[#640f6c]" : " "
              } `}
            onClick={() => setToggle(!toggle)}
          >
            <ListItem className="p-0 ">
              <ListItemPrefix>
                <FaRegShareSquare className="h-5 w-5 text-white" />
              </ListItemPrefix>
              <Typography className="text-white">Social Media</Typography>
            </ListItem>
          </Link>

          {/* Marketing */}
          <Link
            href="/user/marketing"
            className={`flex items-center border-b-0 p-3 list-item-hover rounded-[6px] ${pathName == "/user/marketing" ? "bg-[#640f6c]" : " "
              } `}
            onClick={() => setToggle(!toggle)}
          >
            <ListItem className="p-0 ">
              <ListItemPrefix>
                <SiGooglemarketingplatform className="h-5 w-5 text-white" />
              </ListItemPrefix>
              <Typography className="text-white">Marketing</Typography>
            </ListItem>
          </Link>

          {/* Website */}
          <Link
            href="/user/website"
            className={`flex items-center border-b-0 p-3 list-item-hover rounded-[6px] ${pathName == "/user/website" ? "bg-[#640f6c]" : " "
              } `}
            onClick={() => setToggle(!toggle)}
          >
            <ListItem className="p-0 ">
              <ListItemPrefix>
                <CgWebsite className="h-5 w-5 text-white" />
              </ListItemPrefix>
              <Typography className="text-white">Website</Typography>
            </ListItem>
          </Link>

          {/* Course Builder */}
          <Link
            href="/user/course-builder"
            className={`flex items-center border-b-0 p-3 list-item-hover rounded-[6px] ${pathName == "/user/course-builder" ? "bg-[#640f6c]" : " "
              } `}
            onClick={() => setToggle(!toggle)}
          >
            <ListItem className="p-0 ">
              <ListItemPrefix>
                <FaBook className="h-5 w-5 text-white" />
              </ListItemPrefix>
              <Typography className="text-white">Course Builder</Typography>
            </ListItem>
          </Link>

          {/* AI Image Generator */}
          <Link
            href="/user/image-generator"
            className={`flex items-center border-b-0 p-3 list-item-hover rounded-[6px] ${pathName == "/user/image-generator" ? "bg-[#640f6c]" : " "
              } `}
            onClick={() => setToggle(!toggle)}
          >
            <ListItem className="p-0 ">
              <ListItemPrefix>
                <BiSolidImageAlt className="h-5 w-5 text-white" />
              </ListItemPrefix>
              <Typography className="text-white">AI Image Generator</Typography>
            </ListItem>
          </Link>

          {/* AI Voice Generator */}
          <Link
            href="/user/voice-generator"
            className={`flex items-center border-b-0 p-3 list-item-hover rounded-[6px] ${pathName == "/user/voice-generator" ? "bg-[#640f6c]" : " "
              } `}
            onClick={() => setToggle(!toggle)}
          >
            <ListItem className="p-0 ">
              <ListItemPrefix>
                <GiSoundWaves className="h-5 w-5 text-white" />
              </ListItemPrefix>
              <Typography className="text-white">AI Voice Generator</Typography>
            </ListItem>
          </Link>

          {/* Chat */}
          <Link
            href="/user/chat"
            className={`flex items-center border-b-0 p-3 list-item-hover rounded-[6px] ${pathName == "/user/chat" ? "bg-[#640f6c]" : " "
              } `}
            onClick={() => setToggle(!toggle)}
          >
            <ListItem className="p-0 ">
              <ListItemPrefix>
                <SiChatbot className="h-5 w-5 text-white" />
              </ListItemPrefix>
              <Typography className="text-white">AI Chat</Typography>
            </ListItem>
          </Link>
        </div>

        <div className="pt-3 space-y-2">
          <p className="text-[12px] font-medium uppercase text-gray-300">
            Support
          </p>
          {/* Plans */}
          <Link
            href="/user/plans"
            className={`flex items-center border-b-0 p-3 list-item-hover rounded-[6px] ${pathName == "/user/plans" ? "bg-[#640f6c]" : " "
              } `}
            onClick={() => setToggle(!toggle)}
          >
            <ListItem className="p-0 ">
              <ListItemPrefix>
                <FaDollarSign className="h-5 w-5 text-white" />
              </ListItemPrefix>
              <Typography className="text-white">Pricing Plans</Typography>
            </ListItem>
          </Link>

          {/* FAQs & Help */}
          <Link
            href="/user/faqs"
            className={`flex items-center border-b-0 p-3 list-item-hover rounded-[6px] ${pathName == "/user/faqs" ? "bg-[#640f6c]" : " "
              } `}
            onClick={() => setToggle(!toggle)}
          >
            <ListItem className="p-0 ">
              <ListItemPrefix>
                <MdContactSupport className="h-5 w-5 text-white" />
              </ListItemPrefix>
              <Typography className="text-white">FAQs & Help</Typography>
            </ListItem>
          </Link>

          {/* Logout */}
          <div
            className="flex items-center border-b-0 p-3 list-item-hover rounded-[6px]"
            onClick={() => logout()}
          >
            <ListItem className="p-0 ">
              <ListItemPrefix>
                <RiLogoutBoxRFill className="h-5 w-5 text-white" />
              </ListItemPrefix>
              <Typography className="text-white">Log Out</Typography>
            </ListItem>
          </div>
        </div>
      </List>

      <Alert
        open={openAlert}
        className="mt-0 bg-gradient-to-r from-[rgba(247,15,255,1)] to-[#2C63FF]"
        onClose={() => setOpenAlert(false)}
      >
        <Typography variant="h6" className="mb-1">
          Upgrade to PRO
        </Typography>
        <Typography variant="small" className="font-normal opacity-80">
          Upgrade to premium and get even more advanced features and premium.
        </Typography>
        <div className="mt-4 flex gap-3">
          <Typography
            as="a"
            href="#"
            variant="small"
            className="font-medium opacity-80"
            onClick={() => setOpenAlert(false)}
          >
            Dismiss
          </Typography>
          <Typography
            as="a"
            href="/user/plans"
            variant="small"
            className="font-medium"
          >
            Upgrade Now
          </Typography>
        </div>
      </Alert>
    </div>
  );
}
