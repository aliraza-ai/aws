"use client";

import React, { useEffect } from "react";
import { PricingData } from "@/types";
import { pricingData as defaultPricingData } from "@/constants";
import Image from "next/image";
import { CheckIcon } from "../../../../public";
import Link from "next/link";
import { FaChevronRight } from "react-icons/fa6";
import { useRouter } from "next/navigation";

type PricingPlanProps = {
  pricingData?: PricingData[];
};

const PricingCard: React.FC<{ card: PricingData }> = ({ card }) => {
  return (
    <div className="bg-[rgba(32,45,72,0.41)] border-1 border-white text-white text-opacity-70 shadow-lg rounded-xl py-10 px-5 md:px-10 space-y-5">
      <div className="flex flex-col ">
        <div className="font-semibold text-4xl text-white ">
          {card.price}
          <span className="text-[16px] ">{card.currency}</span>
        </div>

        <div className="pt-4 text-slate-400">
          <ul className="flex flex-col gap-4 ">
            {card.features.map((feature, index) => (
              <li
                key={index}
                className="flex gap-2 items-center text-[16px]  w-full"
              >
                <div className="saturate-[3] object-cover w-4 h-4">
                  <Image
                    src={CheckIcon}
                    alt="Check Icon"
                    width={20}
                    height={20}
                  />
                </div>
                {feature}
              </li>
            ))}
          </ul>
        </div>

        <div className="mt-12">
          <div className="">
            {card.id === 0 ? (
              <button className="w-full max-w-xs p-0.5 rounded-md flex items-center justify-center bg-gradient-to-r from-[rgba(247,15,255,1)] to-[#2C63FF] text-white py-2 cursor-not-allowed opacity-70">
                <span className="opacity-80">Subscribed</span>
              </button>
            ) : (
              <button className="w-full max-w-xs p-0.5 rounded-md flex items-center justify-center bg-gradient-to-r from-[rgba(247,15,255,1)] to-[#2C63FF] text-white py-2 hover:opacity-75">
                <Link
                  href={card.id === 0 ? "#" : `/user/payment?planId=${card.id}`}
                >
                  Subscribe now
                </Link>
              </button>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

const PlanPage: React.FC<PricingPlanProps> = ({ pricingData = defaultPricingData }) => {
  const router = useRouter();
  const sessionTokens = typeof window !== "undefined" ? sessionStorage.getItem("tokens") : null;
  
  useEffect(() => {
    if (!sessionTokens) {
      router.push("/auth/login");
    }
  }, [sessionTokens, router]);
  
  if (!sessionTokens) {
    return null;
  }

  return (
    <div className="layout">
      <div className="absolute top-14 right-0 md:px-20 md:py-10 p-6 w-full lg:w-[calc(100%-250px)] mx-auto text-white">
        <div className="text-base text-slate-400 font-light p-2 flex items-center gap-2">
          <Link href="/user/dashboard">Dashboard</Link>
          <FaChevronRight className="text-sm" />
          <Link href="/user/plans">Plans</Link>
        </div>

        <h2 className="text-3xl font-semibold p-2 pb-3">Plans</h2>
        <div className="flex flex-col items-center justify-center">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 mt-4">
            {pricingData.map((card) => (
              <PricingCard key={card.id} card={card} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default PlanPage;
