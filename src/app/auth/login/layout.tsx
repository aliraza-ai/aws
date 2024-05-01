import Scripts from "@/components/Scripts";
import type { Metadata } from "next";
import Head from "next/head";
import React from "react";

export const metadata: Metadata = {
  title: "Login to IntelliWriter.io – Access AI-Powered Content Tools",
  description:
    "Log in to your IntelliWriter.io account to start creating exceptional content with AI. Access our advanced writing and image generation tools to revolutionize your content strategy.",
};

const LoginPage = ({ children }: { children: React.ReactNode }) => {
  return (
    <>
      <Head>
        <title>
          Login to IntelliWriter.io – Access AI-Powered Content Tools
        </title>
        <meta
          name="description"
          content="Log in to your IntelliWriter.io account to start creating exceptional content with AI. Access our advanced writing and image generation tools to revolutionize your content strategy."
        />
        <link rel="canonical" href="https://intelliwriter.io/auth/login" />
        <script
          dangerouslySetInnerHTML={{
            __html: `(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
})(window,document,'script','dataLayer','GTM-MNPNZ6PR');`,
          }}
        />
      </Head>
      <body>
        {children}
        <Scripts />
      </body>
    </>
  );
};

export default LoginPage;
