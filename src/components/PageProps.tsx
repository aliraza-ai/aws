"use client";

import React from 'react'
import dynamic from "next/dynamic";
import { useWebContext } from "@/context/ContextProvider";
const Header = dynamic(() => import("@/components/Header"));
const Footer = dynamic(() => import("@/components/Footer"));

const PageProps = ({ children }: { children: React.ReactNode; }) => {

    const { aboutRef, pricingRef } = useWebContext()
    return (
        <>
            <Header aboutRef={aboutRef} pricingRef={pricingRef} />
            {children}
            <Footer />
        </>
    )
}

export default PageProps