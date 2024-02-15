"use client";

import { Accord } from "@/constants";
import { useWebContext } from "@/context/ContextProvider";
import dynamic from "next/dynamic";
const Header = dynamic(() => import("@/components/Header"));
const Footer = dynamic(() => import("@/components/Footer"));
const AboutUs = dynamic(() => import("@/components/AboutUs"));
const Hero = dynamic(() => import("@/components/Hero"));
const FAQs = dynamic(() => import("@/components/FAQs"));
const Features = dynamic(() => import("@/components/Features"));
const Banner = dynamic(() => import("@/components/Banner"));
const OurRoadmap = dynamic(() => import("@/components/OurRoadmap"));
const PricingPlan = dynamic(() => import("@/components/PricingPlan"));
const Community = dynamic(() => import("@/components/Community"));
const CookiePopup = dynamic(() => import("@/components/CookiePopup"));

export default function PageChild() {
  const { aboutRef, pricingRef } = useWebContext();

  return (
    <>
      <Header aboutRef={aboutRef} pricingRef={pricingRef} />
      <main className="overflow-hidden">
        <div className="w-full">
          <Hero />
          <AboutUs />
          <Features />
          <PricingPlan />
          <Community />
          <Banner />
          <OurRoadmap />
          <FAQs faqs={Accord} />
        </div>
        <CookiePopup />
      </main>
      <Footer />
    </>
  );
}
