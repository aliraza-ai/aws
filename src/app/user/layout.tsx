import Scripts from "@/components/Scripts";
import type { Metadata } from "next";
import React from "react";
import DashboardProps from "./DashboardProps";

export const metadata: Metadata = {
  title: "IntelliWriter.io Dashboard – Manage Your AI Content Creation",
  description:
    "Access your IntelliWriter.io dashboard to manage and create AI-driven content effortlessly. Write, design, and innovate with our comprehensive tools.",
};

const Layout = ({ children }: { children: React.ReactNode }) => {
  return (
    <>
      <head>
        <title>
          IntelliWriter.io Dashboard – Manage Your AI Content Creation
        </title>
        <meta
          name="description"
          content="Access your IntelliWriter.io dashboard to manage and create AI-driven content effortlessly. Write, design, and innovate with our comprehensive tools."
        />
        <link rel="canonical" href="https://intelliwriter.io/user/dashboard" />
      </head>
      <body>
        <DashboardProps>{children}</DashboardProps>
        <Scripts />
      </body>
    </>
  );
};

export default Layout;
