import React from "react";
import type { Metadata } from "next";
import PageProps from "@/components/PageProps";
import Scripts from "@/components/Scripts";

export const metadata: Metadata = {
  title: "IntelliWriter Image generator – Get Instant AI Generated Images",
  description: "Generate effortlessly images for our AI tool by defining you thoughts!",
}

const AIImages = ({ children }: { children: React.ReactNode; }) => {
  return (
    <>
      <head>
        <title>IntelliWriter Image generator – Get Instant AI Generated Images</title>
        <meta name="description" content="Generate effortlessly images for our AI tool by defining you thoughts!" />
        <link rel="canonical" href="https://intelliwriter.io/contact" />
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

export default AIImages;
