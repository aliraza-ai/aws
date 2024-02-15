"use client";

import { useWebContext } from "@/context/ContextProvider";
import Image from "next/image";
import { useRouter } from "next/navigation";
import React, { useEffect, useState } from "react";
import { CheckIcon } from "../../public";
import { pricingData as defaultPricingData } from "../constants";
import { PricingData } from "../types";
import Button from "./Button";

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
    <div className="bg-white/5 relative overflow-hidden border border-[#FFFFFF14] text-white text-opacity-70 shadow-lg rounded-xl pb-10 pt-10 sm:pl-10 sm:pr-5 md:px-10 pl-6 pr-1 space-y-5">
      <div className="absolute -bottom-4 -right-4 bg-blue-500 w-28 h-28 blur-[80px]"></div>
      <div className="absolute -bottom-4 -right-4 bg-cyan-400 w-16 h-16 blur-[50px]"></div>
      <div className="absolute top-4 left-4 bg-cyan-400 w-16 h-16 blur-[50px]"></div>

      <div className="flex flex-col justify-between h-full items-center gap-5 relative">
        <div>
          <div className="text-center text-white">
            <p className="font-semibold text-4xl">
              {card.id !== 0 && "$"}
              <span>{card.price}</span>
              {card.id !== 0 &&
                <span className="text-base font-extralight">/month</span>
              }
            </p>
            <p className="text-xl tracking-widest font-extralight pb-3">{card.package}</p>
          </div>

          <div className="pt-4">
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
        </div>

        <div className="flex justify-center py-6">
          {card.id === 0 && subscribed ? (
            <Button
              title="Subscribed"
              className="pointer-events-none"
              btnType="button"
              onClick={handleClick}
            />
          ) : (
            <div className="w-fit rounded-3xl p-0.5 bg-gradient-to-r from-[rgb(247,15,255,1)] to-[#2C63FF]">
              <Button
                title={card.id === 0 && subscribed ? "Subscribed" : "Subscribe now"}
                btnType="button"
                className={`${card.id === 0 && subscribed ? "hidden pointer-events-none" : ""}`}
                onClick={handleClick}

              />
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
          <h2 className="md:block hidden text-center lg:text-4xl md:text-3xl sm:text-2xl text-2xl font-normal">
            Choose the
            <span className="pl-1 bg-clip-text text-transparent bg-gradient-to-tr from-[#DE1DF5] to-[#011DFD]">
              Pricing
            </span>{" "}
            that fits you
          </h2>

          <h2 className="md:hidden block text-center lg:text-4xl md:text-3xl sm:text-2xl text-2xl font-normal  ">
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

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 justify-center gap-6 md:mx-8 mt-10">
          {pricingData.map((card) => (
            <PricingCard key={card.id} card={card} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default PricingPlan;
