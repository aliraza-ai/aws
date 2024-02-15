import React from "react";
import type { Metadata } from "next";
import PageProps from "@/components/PageProps";
import Scripts from "@/components/Scripts";
import PostSidebar from "@/components/PostSidebar";

export const metadata: Metadata = {
  title: "IntelliWriter.io Blog Post – Keep in touch with Us",
  description:
    "Daily Updated blog posts of Intelliwriter AI Development and features",
};
type Props = {
  children: React.ReactNode;
};

export default function Layout({ children }: Props) {
  return (
    <>
      <head>
        <title>IntelliWriter.io Blog Post – Keep in touch with Us</title>
        <meta
          name="description"
          content="Daily Updated blog posts of Intelliwriter AI Development and features."
        />
        <link rel="canonical" href="https://intelliwriter.io/blog-post" />
      </head>
      <body>
        
        <PageProps>{children}</PageProps>
        <PostSidebar/>
        <Scripts />
      </body>
    </>
  );
}
