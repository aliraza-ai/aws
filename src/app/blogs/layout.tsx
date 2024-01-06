import React from "react";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "IntelliWriter.io Blogs – Keep in touch with Us",
  description: "Daily Updated blogs of Intelliwriter AI Development and features",
};
type Props = {
  children: React.ReactNode;
};

export default function Layout({ children }: Props) {
  return (
    <>
      <head>
        <meta charSet="UTF-8" />
        <meta name="google-site-verification" content="jOLdFKT4EB_AxoR8fQqHLckgsvnJ_Ta4WPY40UNfjwo" />
        <link rel="canonical" href="https://intelliwriter.io/blogs" />
      </head>
      <div>
        {children}
      </div>
    </>
  );
}

