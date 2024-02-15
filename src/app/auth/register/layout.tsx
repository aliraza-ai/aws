import PageProps from "@/components/PageProps";
import Scripts from "@/components/Scripts";
import type { Metadata } from "next";
import React from "react";

export const metadata: Metadata = {
  title:
    "Join IntelliWriter.io – Register for Free AI Writing & Image Generation",
  description:
    "Sign up now on IntelliWriter.io to access the ultimate AI writing generator and image creator. Register today for free and unleash your content's potential.",
};

const RegisterPage = ({ children }: { children: React.ReactNode }) => {
  return (
    <>
      <head>
        <title>
          Join IntelliWriter.io – Register for Free AI Writing & Image
          Generation
        </title>
        <meta
          name="description"
          content="Sign up now on IntelliWriter.io to access the ultimate AI writing generator and image creator. Register today for free and unleash your content's potential."
        />
        <link rel="canonical" href="https://intelliwriter.io/auth/register" />
      </head>
      <body>
        <PageProps>{children}</PageProps>
        <Scripts />
      </body>
    </>
  );
};

export default RegisterPage;
