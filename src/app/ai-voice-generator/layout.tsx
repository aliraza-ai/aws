import PageProps from "@/components/PageProps";
import Scripts from "@/components/Scripts";
import type { Metadata } from "next";
import React from "react";

export const metadata: Metadata = {
  title: "IntelliWriter Voice generator – Get Instant AI Generated Voice",
  description:
    "Generate effortlessly voices for our AI tool by defining you thoughts!",
};

const AIVoice = ({ children }: { children: React.ReactNode }) => {
  return (
    <>
      <head>
        <title>
          IntelliWriter Voice generator – Get Instant AI Generated Voices
        </title>
        <meta
          name="description"
          content="Generate effortlessly Voices for our AI tool by defining you thoughts!"
        />
        <link
          rel="canonical"
          href="https://intelliwriter.io/ai-voice-generator"
        />
      </head>
      <body>
        <PageProps>{children}</PageProps>
        <Scripts />
      </body>
    </>
  );
};

export default AIVoice;
