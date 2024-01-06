import React from "react";
import type { Metadata } from "next";
import { APISidebar } from '@/components';

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
      {/* <head>
        <link rel="canonical" href="https://intelliwriter.io/api" />
      </head> */}
      <div className='flex w-full text-white min-h-screen'>
        <APISidebar />
        {children}
      </div>
    </>
  );
};

export default APIPageLayout;
