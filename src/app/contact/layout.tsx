import React from "react";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contact IntelliWriter.io – Get Support for AI Content Tools",
  description: "Access your IntelliWriter.io dashboard to manage and create AI-driven content effortlessly. Write, design, and innovate with our comprehensive tools.",
}

const ContactPage = ({ children }: { children: React.ReactNode; }) => {
  return (
    <>
      {/* <head>
        <link rel="canonical" href="https://intelliwriter.io/contact" />
      </head> */}
      <div>
        {children}
      </div>
    </>
  );
};

export default ContactPage;
