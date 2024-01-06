"use client";

import React from 'react'
import dynamic from "next/dynamic";
import { useWebContext } from "@/context/ContextProvider";
import { usePathname } from 'next/navigation';
const Header = dynamic(() => import("../components/Header"));
const Footer = dynamic(() => import("../components/Footer"));

const GlobalLayout = ({ children }: { children: React.ReactNode; }) => {
    const pathname = usePathname();
    const shouldShowHeaderInFooter = pathname.startsWith('/user/');
    const { aboutRef, pricingRef } = useWebContext()
    
    return (
        <>
            {!shouldShowHeaderInFooter && <Header aboutRef={aboutRef} pricingRef={pricingRef} />}
            {children}
            {!shouldShowHeaderInFooter && <Footer />}
        </>
    )
}

export default GlobalLayout