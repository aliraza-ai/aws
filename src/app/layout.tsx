import React from "react";
import { AuthProvider } from "@/context/AuthContext";
import { ContextProvider } from "@/context/ContextProvider";
// import type { Metadata } from "next";
import "./globals.css";
import GlobalLayout from './GlobalLayout';

interface Metadata {
  title: string;
  description: string;
}

export const metadata: Metadata = {
  title: " Intelliwriter.io: Best AI Image Generator & Free AI Writing",
  description: "Boost creativity with the best AI image generator & free AI writing tools. Explore 70+ innovative features!",
};

declare global {
  interface Window {
    dataLayer: any[];
    gtag: (...args: any[]) => void;
  }
}

export default function RootLayout({ children }: { children: React.ReactNode; }) {

  return (
    <html lang="en">
        <head>
          <meta charSet="UTF-8" />
          <title> Intelliwriter.io: Best AI Image Generator & Free AI Writing</title>
          <meta name="description" content="Unlock limitless creativity with Intelliwriter, your trusted AI-based content generator. Explore a new era of efficient writing powered by Robx.AI. Discover features like intelligent content creation, seamless image generation, and intuitive APIs. Transform your ideas into compelling narratives effortlessly. Start your writing journey with Intelliwriter today!" />
          <meta name="google-site-verification" content="jOLdFKT4EB_AxoR8fQqHLckgsvnJ_Ta4WPY40UNfjwo" />
          <link rel="canonical" href="https://intelliwriter.io" />
        </head>
      <ContextProvider>
        <AuthProvider>
          <body className="relative">
            <GlobalLayout>
              {children}
            </GlobalLayout>
          </body>
        </AuthProvider>
      </ContextProvider>

      
      <script 
    async 
    src="https://www.googletagmanager.com/gtag/js?id=G-1S9VKDRTK8">
  </script>
        <script 
          dangerouslySetInnerHTML={{
            __html: `
              window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments);}
              gtag('js', new Date());

              gtag('config', 'G-1S9VKDRTK8');
            `,
          }}
        />
    </html>
  );
}
