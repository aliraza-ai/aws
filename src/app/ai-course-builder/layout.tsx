import React from "react";
import type { Metadata } from "next";
import PageProps from "@/components/PageProps";
import Scripts from "@/components/Scripts";

export const metadata: Metadata = {
  title: "IntelliWriter.io – Course Builder",
  description: "Access your IntelliWriter.io dashboard to manage and create AI-driven content effortlessly. Write, design, and innovate with our comprehensive tools.",
}

const CourseBuilderLayout = ({ children }: { children: React.ReactNode; }) => {
  return (
    <>
      <head>
        <title>IntelliWriter.io – Course Builder</title>
        <meta name="description" content="Access your IntelliWriter.io dashboard to manage and create AI-driven content effortlessly. Write, design, and innovate with our comprehensive tools." />
        <link rel="canonical" href="https://intelliwriter.io/ai-course-builder" />
      </head>
      <body>
        <PageProps>
          {children}
        </PageProps>
        <Scripts />
      </body>
    </>
  );
};

export default CourseBuilderLayout;
