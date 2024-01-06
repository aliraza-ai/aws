import React from "react";
import type { Metadata } from "next";
import { Sidebar } from "@/components/Sidebar";
import UserHeader from "@/components/UserHeader";

export const metadata: Metadata = {
  title: "IntelliWriter.io Dashboard – Manage Your AI Content Creation",
  description: "Access your IntelliWriter.io dashboard to manage and create AI-driven content effortlessly. Write, design, and innovate with our comprehensive tools.",
};

const Layout = ({ children }: { children: React.ReactNode; }) => {

  return (
    <>
      {/* <head>
        <link rel="canonical" href="https://intelliwriter.io/user/dashboard" />
      </head> */}
      <section className="flex relative">
        <section className="w-full fixed z-50 top-0 left-0">
          <UserHeader />
        </section>
        <Sidebar />
        {children}
      </section>
    </>
  );
};

export default Layout;
