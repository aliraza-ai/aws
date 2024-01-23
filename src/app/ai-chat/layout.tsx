import React from "react";
import type { Metadata } from "next";
import PageProps from "@/components/PageProps";
import Scripts from "@/components/Scripts";

export const metadata: Metadata = {
  title: "IntelliWriter.io – AI Chat",
  description: "Access your IntelliWriter.io dashboard to manage and create AI-driven content effortlessly. Write, design, and innovate with our comprehensive tools.",
}

const ChatLayout = ({ children }: { children: React.ReactNode; }) => {
  return (
    <>
      <head>
        <title>IntelliWriter.io – AI Chat</title>
        <meta name="description" content="Access your IntelliWriter.io dashboard to manage and create AI-driven content effortlessly. Write, design, and innovate with our comprehensive tools." />
        <link rel="canonical" href="https://intelliwriter.io/ai-chat" />
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

export default ChatLayout;
