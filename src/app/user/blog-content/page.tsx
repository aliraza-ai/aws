import React, { createContext } from "react";
import type { NextPage } from "next";
import { Sidebar } from "@/components/Sidebar";
import UserHeader from "@/components/UserHeader";

const BlogContent: NextPage = () => {
  

  return (
    <div className="flex relative">
      <div className="w-full fixed z-50 top-0 left-0">
        <UserHeader />
      </div>
      <Sidebar  />
    </div>
  );
};

export default BlogContent;
