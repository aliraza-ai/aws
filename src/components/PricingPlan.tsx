"use client";

import React, { useState, useEffect } from "react";
import { PricingData } from "../types";
import { pricingData as defaultPricingData } from "../constants";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { CheckIcon } from "../../public";
import { useWebContext } from "@/context/ContextProvider";

const tokens = typeof window !== "undefined" ? sessionStorage.getItem("tokens") : null;

interface PricingPlanProps {
  pricingData?: PricingData[];
}

const PricingCard: React.FC<{ card: PricingData }> = ({ card }) => {
  const router = useRouter();
  const [subscribed, setSubscribed] = useState(false);

  useEffect(() => {
    if (card.id === 0 && tokens) {
      setSubscribed(true);
    } else {
      setSubscribed(false);
    }
  }, [card.id, tokens]);

  const handleClick = () => {
    if (tokens) {
      router.push(`/user/payment?planId=${card.id}`);
    } else {
      router.push("/auth/login");
    }
  };
  return (
    <div className="bg-primary-two border-1 border-white text-white text-opacity-70 shadow-lg rounded-xl pb-10 pt-10 sm:pl-10 sm:pr-5 md:px-10 pl-6 pr-1 space-y-5">
      <div className="flex flex-col items-center gap-5">
        <div className="font-semibold text-4xl text-white">
          {card.price}
          <span className="text-[16px] text-white">{card.currency}</span>
        </div>

        <div className="pt-4 ">
          <ul className="flex flex-col gap-4 ">
            {card.features.map((feature, index) => (
              <li
                key={index}
                className="flex gap-2 items-center text-[16px] text-white w-full"
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

        <div className="flex justify-center pt-10">
          {card.id === 0 && subscribed ? (
            <div className="w-fit rounded-3xl p-0.5 pt-24 bg-gradient-to-r from-[rgb(247,15,255,1)] to-[#2C63FF] opacity-70">
              <button className="bg-black text-white py-2 px-2 lg:px-9 rounded-3xl cursor-not-allowed " disabled={true} >
                Subscribed
              </button>
            </div>
          ) : (
            <div className="w-fit rounded-3xl pt-24 p-0.5 bg-gradient-to-r from-[rgb(247,15,255,1)] to-[#2C63FF]">
              <button
                className={`bg-black text-white py-2 px-2 lg:px-9 rounded-3xl hover:opacity-75 ${card.id === 0 && subscribed ? "hidden" : ""
                  }`}
                onClick={handleClick}
                disabled={card.id === 0 && subscribed}
              >
                {card.id === 0 && subscribed ? "Subscribed" : "Subscribe now"}
              </button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

const PricingPlan: React.FC<PricingPlanProps> = ({
  pricingData = defaultPricingData,
}) => {
  const { pricingRef } = useWebContext()

  return (
    <section ref={pricingRef} className="w-full bg-no-repeat bg-cover pt-20" id="pricing">
      <div className="container mx-auto text-white lg:max-w-7xl p-5">
        <div className="w-full text-white flex-col flex gap-2 items-center justify-center">
          <h2 className="md:block hidden text-center lg:text-4xl md:text-3xl sm:text-2xl text-2xl font-semibold  ">
            Choose the
            <span className="pl-1 bg-clip-text text-transparent bg-gradient-to-tr from-[#DE1DF5] to-[#011DFD]">
              Pricing
            </span>{" "}
            that fits you
          </h2>

          <h2 className="md:hidden block text-center lg:text-4xl md:text-3xl sm:text-2xl text-2xl font-semibold  ">
            Choose the{" "}
            <span className="bg-clip-text text-transparent bg-gradient-to-tr from-[#DE1DF5] to-[#011DFD]">
              Pricing <br />
            </span>
            that fits you
          </h2>

          <p className="text-[16px] text-white text-center">
            Simple pricing plans for everyone and every budget.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 justify-center gap-10 mt-10">
          {pricingData.map((card) => (
            <PricingCard key={card.id} card={card} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default PricingPlan;
