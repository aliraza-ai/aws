"use client";

import React from "react";
import dynamic from "next/dynamic";
import { useWebContext } from "@/context/ContextProvider";;

const AboutUs = dynamic(() => import("../components/AboutUs"));
const Hero = dynamic(() => import("../components/Hero"));
const FAQs = dynamic(() => import("../components/FAQs"));
const Features = dynamic(() => import("../components/Features"));
const Banner = dynamic(() => import("../components/Banner"));
const OurRoadmap = dynamic(() => import("../components/OurRoadmap"));
const PricingPlan = dynamic(() => import("../components/PricingPlan"));
const Community = dynamic(() => import("../components/Community"));
const CookiePopup = dynamic(() => import("../components/CookiePopup"));

export default function Home() {
  const { aboutRef, pricingRef } = useWebContext()

  return (
    <>
      <main className="overflow-hidden">
        <div className="w-full">
          <Hero />
          <div ref={aboutRef} id="about">
            <AboutUs />
          </div>
          <Features />
          <div ref={pricingRef} id="pricing">
            <PricingPlan />
          </div>
          <Community />
          <Banner />
          <OurRoadmap />
          <FAQs />
        </div>
        <CookiePopup />
      </main>
    </>
  );
}