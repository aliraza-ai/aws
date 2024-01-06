import type { Metadata } from "next";
import React from "react";

export const metadata: Metadata = {
  title: "Login to IntelliWriter.io – Access AI-Powered Content Tools",
  description: "Log in to your IntelliWriter.io account to start creating exceptional content with AI. Access our advanced writing and image generation tools to revolutionize your content strategy.",
}

const LoginPage = ({ children }: { children: React.ReactNode; }) => {
  return (
    <>
      {/* <head>
        <link rel="canonical" href="https://intelliwriter.io/auth/login" />
      </head> */}
      <div>
        {children}
      </div>
    </>
  );
};

export default LoginPage;
