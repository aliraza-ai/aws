"use client";

import React, { ReactNode } from "react";
import Link from "next/link";
import { useParams } from 'next/navigation';
import { FaChevronRight } from "react-icons/fa6";
import ContentResponse from "@/components/Content/ContentResponse";
import SocialPages from "@/components/Content/social-media/SocialPages";
import VideoTags from "@/components/Content/social-media/VideoTags";

type Props = {
  children: ReactNode;
};

const ModuleLayout = ({ children }: Props) => {
  const { module }: any = useParams();
  const pageTitle = module.replace(/-/g, ' ');

  const socialPages = [
    "hashtags",
    "social-post",
    "social-post-caption",
    "tweet",
    "tweet-thread",
    "video-description",
    "video-script",
    "video-title",
  ];

  return (
    <>
      {/* Top Section */}
      <main>{children}</main>

      <div className="absolute top-14 right-0 md:px-20 md:py-10 p-6 w-full lg:w-[calc(100%-250px)] mx-auto text-white overflow-y-auto">
        <div className="w-full pb-4">
          {/* Top Breadcrumbs */}
          <div className="text-base text-slate-400 font-light p-2 flex items-center gap-2">
            <Link href="/user/home">Home</Link>
            <FaChevronRight className="text-sm" />
            <Link href="/user/social-media">Social Media</Link>
            <FaChevronRight className="text-sm" />
            <Link href={`/user/modules/social-media/${module}`} className="capitalize">{pageTitle}</Link>
          </div>

          {/* Title */}
          <h2 className="text-3xl font-semibold p-2 pb-3 capitalize">{pageTitle}</h2>
        </div>
        
        <div className="flex w-full md:flex-row flex-col gap-5">
          <div className="md:w-1/2 w-full">
            {module === "video-tags" ?
              <VideoTags type={module} /> :
              socialPages.includes(module) ?
                <SocialPages type={module} /> :
                <div className="w-full h-screen flex items-center justify-center text-2xl opacity-80">
                  No module found!
                </div>
            }
          </div>

          <div className="md:w-1/2 w-full">
            <ContentResponse />
          </div>
        </div>
      </div>
    </>
  );
};

export default ModuleLayout;
