import React from "react";
import type { Metadata } from "next";
import PageProps from "@/components/PageProps";
import Scripts from "@/components/Scripts";

export const metadata: Metadata = {
  title: "IntelliWriter AI Blog generator  – Get Support for AI Content Tools",
  description: "Generate effortlessly blog content for our AI tool by defining you thoughts!",
}

const AIBlogs = ({ children }: { children: React.ReactNode; }) => {
  return (
    <>
      <head>
        <title>IntelliWriter AI Blog generator – Get Instant AI Generated Images</title>
        <meta name="description" content="Generate effortlessly blog content for our AI tool by defining you thoughts!" />
        <link rel="canonical" href="https://intelliwriter.io/ai-blog-generator" />
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

export default AIBlogs;
