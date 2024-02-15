import PageProps from "@/components/PageProps";
import Scripts from "@/components/Scripts";
import type { Metadata } from "next";
import React from "react";

export const metadata: Metadata = {
  title: "IntelliWriter.io – AI Marketing generator",
  description:
    "Access your IntelliWriter.io dashboard to manage and create AI-driven content effortlessly. Write, design, and innovate with our comprehensive tools.",
};

const MarketingLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <>
      <head>
        <title>IntelliWriter.io – AI Marketing generator</title>
        <meta
          name="description"
          content="Access your IntelliWriter.io dashboard to manage and create AI-driven content effortlessly. Write, design, and innovate with our comprehensive tools."
        />
        <link
          rel="canonical"
          href="https://intelliwriter.io/ai-marketing-generator"
        />
      </head>
      <body>
        <PageProps>{children}</PageProps>
        <Scripts />
      </body>
    </>
  );
};

export default MarketingLayout;
