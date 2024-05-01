"use client";

import { AboutUs } from "@/components";
import Models from "@/components/Models";
import { Accord } from "@/constants";
import { useWebContext } from "@/context/ContextProvider";
import dynamic from "next/dynamic";
import SocialApps from "../components/SocialApps";
const Header = dynamic(() => import("@/components/Header"));
const Footer = dynamic(() => import("@/components/Footer"));
const Hero = dynamic(() => import("@/components/Hero"));
const FAQs = dynamic(() => import("@/components/FAQs"));
const Features = dynamic(() => import("@/components/Features"));
const Banner = dynamic(() => import("@/components/Banner"));
const OurRoadmap = dynamic(() => import("@/components/OurRoadmap"));
const PricingPlan = dynamic(() => import("@/components/PricingPlan"));
const Community = dynamic(() => import("@/components/Community"));
const CookiePopup = dynamic(() => import("@/components/CookiePopup"));
const Slider = dynamic(() => import("@/components/Slider"));
const Chatbot = dynamic(() => import("@/components/Chatbot"));
export default function PageChild() {
  const { aboutRef, pricingRef } = useWebContext();

  return (
    <>
      <Header aboutRef={aboutRef} pricingRef={pricingRef} />
      <main className="overflow-hidden w-full">
        <div className="w-full flex flex-col items-center">
          <Hero />
          <AboutUs />
          <Slider />
          <Models />
          <Features />
          <PricingPlan />
          <SocialApps />
          {/* <Community /> */}
          {/* <Banner /> */}
          {/* <OurRoadmap /> */}
          <FAQs faqs={Accord} />
        </div>
        {/* <Chatbot /> */}
        <CookiePopup />
      </main>
      <Footer />
    </>
  );
}
