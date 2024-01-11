import React from "react";
import type { Metadata } from "next";
import { APISidebar } from '@/components';
import PageProps from "@/components/PageProps";
import Scripts from "@/components/Scripts";
export const metadata: Metadata = {
  title: "IntelliWriter.io API – Integrate AI Writing & Image Generation",
  description: "Seamlessly integrate IntelliWriter.io's AI capabilities into your platform with our robust API. Enhance your app with powerful writing and image tools.",
};

interface APIProps {
  children: React.ReactNode;
}

const APIPageLayout: React.FC<APIProps> = ({ children }) => {

  return (
    <>
      <head>
        <title>IntelliWriter.io API – Integrate AI Writing & Image Generation</title>
        <meta name="description" content="Seamlessly integrate IntelliWriter.io's AI capabilities into your platform with our robust API. Enhance your app with powerful writing and image tools." />
        <link rel="canonical" href="https://intelliwriter.io/api" />
      </head>
      <body>
        <PageProps>
          <div className='flex w-full text-white min-h-screen'>
            <APISidebar />
            {children}
          </div>
        </PageProps>
        <Scripts />
      </body>
    </>
  );
};

export default APIPageLayout;
