import React from "react";
import { pricingCards } from "../../../constants/index";

const PricingPlans = () => {
  return (
    <div className="">
      <div className="flex flex-col lg:flex-row lg:p-20 md:p-10 p-6 items-center justify-between overflow-hidden">
        <div className="w-full lg:w-2/4">
          <div>
            <h2 className="text-4xl lg:text-6xl text-white font-semibold">
              The Right Plan for Transparent Pricing
            </h2>
          </div>
        </div>
        <div className="w-full lg:w-3/5 mt-6 lg:mt-0">
          <p className="text-white text-lg lg:text-xl leading-relaxed">
            We have several powerful plans to showcase your business and get
            discovered as creative entrepreneurs. Everything you need.
          </p>
        </div>
      </div>
      {/* cards */}
      <div className="cards px-20 flex flex-col items-center justify-around">
        {pricingCards.map((card, index) => (
          <div
            key={index}
            className="flex w-[80%] flex-col sm:flex-row items-center justify-between overflow-hidden shadow-lg m-4 bg-none text-white border rounded-[12px]"
          >
            <div className="px-6 py-4">
              <h1 className=" font-bold text-[36px] mb-2 leading-[28px]">
                {card.title}
              </h1>
              <p className="text-gray-300 text-[18px] max-w-[340px]">
                {card.description}
              </p>
            </div>
            <ul className="px-6 py-4">
              {card.features.map((feature, idx) => (
                <li
                  key={idx}
                  className="flex gap-2 text-white text-[18px] mb-2"
                >
                  <span className="">
                    <svg
                      width="26"
                      height="26"
                      viewBox="0 0 26 26"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M16.0642 9.93589L9.93591 16.0641M16.0642 16.0641L9.93591 9.93585"
                        stroke="white"
                        stroke-width="2"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                      ></path>
                      <g opacity="0.5">
                        <path
                          fill-rule="evenodd"
                          clip-rule="evenodd"
                          d="M13 2.16666C7.01687 2.16666 2.16663 7.01691 2.16663 13C2.16663 18.9831 7.01687 23.8333 13 23.8333C18.983 23.8333 23.8333 18.9831 23.8333 13C23.8333 7.01691 18.983 2.16666 13 2.16666ZM13 4.33333C17.7864 4.33333 21.6666 8.21353 21.6666 13C21.6666 17.7865 17.7864 21.6667 13 21.6667C8.21349 21.6667 4.33329 17.7865 4.33329 13C4.33329 8.21353 8.21349 4.33333 13 4.33333Z"
                          fill="#DADADA"
                        ></path>
                      </g>
                    </svg>
                  </span>
                  {feature}
                </li>
              ))}
            </ul>
            <div className="px-6 py-4">
              <h2 className="font-bold text-[48px] text-white">{card.price}</h2>
            </div>
            <div className="px-6 py-4">
              <button className="gradient-outline-btn">Get Started</button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default PricingPlans;
