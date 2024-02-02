"use client";

import React, { useState, useEffect } from 'react';
import { Doughnut } from "react-chartjs-2";
import Image from "next/image";
import Link from "next/link";
import { ArcElement, Tooltip, Legend } from "chart.js";
import Chart from "chart.js/auto";
import { BasicCardData, templateData } from "@/constants/dashboard";
import { AiOutlineRight } from "react-icons/ai";
import { ImageGeneration } from "../../../../public";
import getWordCount from "@/utils/getWordCount";
import getChatCount from "@/utils/getChatCount";
import { imageCount } from "@/utils/imageCount";
import getPlanName from '@/utils/getPlanName';
Chart.register(ArcElement, Tooltip, Legend);

interface DoughnutChartProps {
  data: number[];
  labels: string[];
}

const DoughnutChart: React.FC<DoughnutChartProps> = ({ data, labels }) => {
  const chartData = {
    labels,
    datasets: [
      {
        data,
        backgroundColor: ["#c75270", "#213856"],
        hoverBackgroundColor: ["#FF6384", "#36A2EB"],
      },
    ],
  };

  const chartOptions = {
    responsive: true,
    maintainAspectRatio: false,
  };

  return (
    <Doughnut
      data={chartData}
      options={chartOptions}
      width={400}
      height={400}
    />
  );
};

const DashboardPage = () => {
  const [wordCount, setWordCount] = useState<number | null>(0);
  const [chatCount, setChatCount] = useState<number | null>(0);
  const [imagesCount, setImagesCount] = useState<number | null>(0);
  const [planName, setPlanName] = useState<string | null>("Basic Plan");

  const fetchWordCount = async () => {
    try {
      const result = await getWordCount();
      if (result.success) {
        setWordCount(result.words_left);
      } else {
        console.error("Error fetching word count:", result.message);
      }
    } catch (error: any) {
      console.error("Error fetching word count:", error.message);
    }
  };

  const fetchChatCount = async () => {
    try {
      const result = await getChatCount();
      if (result.success) {
        setChatCount(result.chat_left);
      } else {
        console.error("Error fetching word count:", result.message);
      }
    } catch (error: any) {
      console.error("Error fetching word count:", error.message);
    }
  };

  const fetchImageCount = async () => {
    try {
      const result = await imageCount();
      if (result.success) {
        setImagesCount(result.imageCount);
        if (result.imageCount !== undefined && result.imageCount !== null) {
          sessionStorage.setItem("imageCount", result.imageCount.toString());
        }
      } else {
        console.error("Error fetching image count:", result.message);
      }
    } catch (error: any) {
      console.error("Error fetching image count:", error.message);
    }
  };

  const fetchPlanName = async () => {
    try {
      const result = await getPlanName();
      if (result.success) {
        setPlanName(result.plans_name);
      }
    } catch (error: any) {
      console.error("Fetch error:", error.message);
    }
  };

  useEffect(() => {
    fetchWordCount();
    fetchChatCount();
    fetchImageCount();
    fetchPlanName();
 }, []);

 const chartLabelsWords = [`Remaining Words: ${wordCount || 0}`, `Total Words`];
 const chartLabelsChats = [`Remaining Chats: ${chatCount || 0}`, `Total Chats`];

  return (
    <div className="absolute top-14 right-0 md:px-20 md:py-10 p-6 w-full lg:w-[calc(100%-250px)] mx-auto text-white">
      {/* <h2 className="text-2xl font-semibold p-2">Overview</h2> */}
      <div className="gap-4 w-full flex flex-col-reverse flex-wrap lg:flex-nowrap justify-between items-center mx-auto p-5 pt-2">
        <div className="w-full overflow-hidden relative backdrop-blur-md shadow">
          <div className="absolute -bottom-4 -right-4 bg-blue-500 w-28 h-28 blur-[80px]"></div>
          <div className="absolute -bottom-4 -right-4 bg-cyan-400 w-16 h-16 blur-[50px]"></div>

          <div className="p-2 w-full bg-[rgba(32,45,72,0.41)] py-4 rounded-[12px] justify-evenly flex md:flex-row flex-col md:items-center gap-4 px-4">
            <div className="flex md:flex-row flex-col md:items-center -ml-2 gap-2 w-4/5 px-4">
              <Image
                src={ImageGeneration}
                alt="Image generation"
                width={150}
                height={150}
              />
              <div className="block">
                <h2 className="text-white text-3xl font-semibold">
                  Intelliwriter Image Generator
                </h2>
                <p className="text-white font-thin">
                  Get Started image generation with Intelliwriter Images
                  generator module!
                </p>
              </div>
            </div>

            <Link
              href="/user/image-generator"
              className="w-fit rounded-lg bg-gradient-to-r from-[rgba(247,15,255,1)] to-[#2C63FF] px-3 py-1 md:px-4 md:py-2 hover:opacity-90"
            >
              Get Started
            </Link>
          </div>
        </div>

        <div className="w-full min-h-[300px] rounded-[12px] py-6 bg-[rgba(32,45,72,0.41)] p-6 ">
          <div className="flex justify-between items-center pb-4">
            <h2 className="text-white text-[18px] font-[600]">Overview</h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-5">
            {/* Cards */}
            {BasicCardData.map((basic, index) => (
              <div key={basic.id}>
                <div className="text-white p-5 basis-1/3 bg-[rgba(32,45,72,0.41)] overflow-hidden relative backdrop-blur-md shadow rounded-[20px]">
                  <div className="absolute -bottom-4 -right-4 bg-blue-500 w-28 h-28 blur-[80px]"></div>
                  <div className="absolute -bottom-4 -right-4 bg-cyan-400 w-16 h-16 blur-[50px]"></div>
                  
                  {/* Rest of the content */}
                  <div className="flex flex-col items-center gap-4 justify-center h-[200px]">
                    <span
                      className={`text-[28px] bg-gradient-to-r from-[#F871FF] to-[#2C63FF] rounded-full p-2`}
                    >
                      <basic.icon />
                    </span>

                    <span
                      className={`capitalize font-bold text-2xl bg-clip-text text-transparent bg-gradient-to-r from-[rgba(247,15,255,1)] to-[#2C63FF]`}
                    >
                      {basic.id === 1
                        ? planName
                        : basic.id === 2
                          ? wordCount
                          : basic.id === 3
                            ? chatCount
                            : basic.id === 4
                              ? imagesCount
                              : basic.remaining}
                    </span>

                    <p className="text-[16px] opacity-60 text-center">
                      {basic.title}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Overview section */}
      <div className="flex w mx-auto flex-col gap-5 my-8">
        <div className="font-semibold text-2xl">Statistics</div>

        <div className="flex flex-col lg:flex-row justify-evenly gap-5 ">
          <div className="w-full py-5 bg-[rgba(32,45,72,0.41)] shadow rounded-[12px] ">
            <div className="font-semibold px-5 pb-3 metaText border-b">
              Words Usage
            </div>
            {/* <Doughnut data={words} className="mx-auto pt-2" /> */}
            <div className="w-[83%] mx-auto pt-2 ">
              <DoughnutChart
                data={[wordCount || 0, 2000|| 0]}
                labels={chartLabelsWords}
              />
            </div>
          </div>

          <div className="w-full py-5 bg-[rgba(32,45,72,0.41)]  shadow rounded-md ">
            <div className="font-semibold px-5 pb-3 metaText border-b">
              Chat Usage
            </div>
            {/* <Doughnut  className="mx-auto pt-2" /> */}
            <div className="w-[83%] mx-auto pt-2">
              <DoughnutChart
                data={[chatCount || 0, 10 || 0]}
                labels={chartLabelsChats}
              />
            </div>
          </div>
        </div>
      </div>

      {/* Templates section */}
      <h2 className="text-2xl font-semibold p-2">Templates</h2>

      <div className="grid grid-cols-1 gap-5 py-3 md:grid-cols-2 lg:grid-cols-3">
        {templateData.map((item) => (
          <div key={item.id}>
            <div className="text-white basis-1/3 h-[70px] bg-[rgba(32,45,72,0.41)] overflow-hidden relative backdrop-blur-md shadow rounded-md">
              <Link
                href={item.url}
                className="flex items-center p-5 bg-cardcolor text-white text-opacity-60 shadow rounded-md"
              >
                <span
                  className="items-center justify-center block w-9 h-9 rounded-md text-xl mr-3 p-2"
                  style={{
                    backgroundColor: item.bgcolor,
                    color: item.color,
                  }}
                >
                  {React.createElement(item.icon)}
                </span>
                <div className="text-base">{item.title}</div>
                <AiOutlineRight size={15} className="ms-auto" />
              </Link>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default DashboardPage;