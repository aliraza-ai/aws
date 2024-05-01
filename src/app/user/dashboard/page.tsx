"use client";

import Button from "@/components/Button";
import { BasicCardData, templateData } from "@/constants/dashboard";
import Box from "@mui/material/Box";
import LinearProgress, {
  LinearProgressProps,
} from "@mui/material/LinearProgress";
import Typography from "@mui/material/Typography";
import { ArcElement, Legend, Tooltip } from "chart.js";
import Chart from "chart.js/auto";
import Link from "next/link";
import React, { useEffect, useState } from "react";
import { Doughnut } from "react-chartjs-2";
import { FaUser } from "react-icons/fa";
import { IoIosClose } from "react-icons/io";
import { MdOutlineArrowRightAlt } from "react-icons/md";
import {
  ImageGeneration2,
  ImageGenerationBanner,
} from "../../../../public";
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

function LinearProgressWithLabel(
  props: LinearProgressProps & { value: string | number; max?: number }
) {
  const { value, max = 100, ...rest } = props;

  // Convert value to number
  const numericValue = typeof value === "string" ? parseFloat(value) : value;

  let percentage: number;
  if (
    isNaN(numericValue) ||
    (typeof value === "string" && value === "unlimited")
  ) {
    percentage = 100;
  } else {
    percentage = Math.min((numericValue / max) * 100, 100);
  }

  return (
    <Box sx={{ display: "flex", alignItems: "center" }}>
      <Box sx={{ width: "100%", mr: 1 }}>
        <LinearProgress
          variant="determinate"
          sx={{
            height: 10,
            borderRadius: 10,
            backgroundColor: "#202d4869",
            "& .MuiLinearProgress-bar": {
              backgroundColor: "#1976D2",
            },
          }}
          value={percentage}
          {...rest}
        />
      </Box>
      <Box sx={{ minWidth: 35 }}>
        <Typography variant="body2" color="text.secondary">{`${Math.round(
          percentage
        )}%`}</Typography>
      </Box>
    </Box>
  );
}

const DashboardPage = () => {
  const [userName, setUserName] = useState<string | null>("");
  const [wordCount, setWordCount] = useState<string | null>(null);
  const [chatCount, setChatCount] = useState<string | null>(null);
  const [imagesCount, setImagesCount] = useState<string | null>(null);
  const [voiceCount, setVoicesCount] = useState<string | null>(null);
  const [planName, setPlanName] = useState<string | null>(null);
  const [profileImage, setProfileImage] = useState<string | null>(null);

  useEffect(() => {
    const sessionName = sessionStorage.getItem("name");
    setUserName(sessionName);

    const storedImage = localStorage.getItem("profileImage");
    setProfileImage(storedImage);
  }, []);

  const tokens =
    typeof window !== "undefined" ? sessionStorage.getItem("tokens") : null;

  const userEmail =
    typeof window !== "undefined" ? sessionStorage.getItem("userEmail") : null;

  const userId =
    typeof window !== "undefined" ? sessionStorage.getItem("userId") : null;

  useEffect(() => {
    const sessionName = sessionStorage.getItem("name");
    setUserName(sessionName);
  }, []);

  const fetchCurrentPlan = async () => {
    try {
      const response = await fetch(
        `${process.env.NEXT_PUBLIC_API_URL}/current-plan/get-plan/${userId}`,
        {
          method: "GET",
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${tokens}`,
          },
        }
      );
      if (!response.ok) {
        throw new Error("Failed to fetch current plan");
      }
      const data = await response.json();

      // Set state variables based on the response
      setWordCount(data.words_left === "unlimited" ? 100 : data.words_left);
      setChatCount(data.chat_count);
      setImagesCount(data.image_count);
      setVoicesCount(data.voice_count);
      setPlanName(data.plan_name);
      setPlanName(data.plan_name);
    } catch (error: any) {
      console.error("Error fetching current plan:", error.message);
    }
  };

  useEffect(() => {
    fetchCurrentPlan();
  }, []);

  // const chartLabelsWords = [
  //   `Remaining Words: ${wordCount || 0}`,
  //   `Total Words`,
  // ];
  // const chartLabelsChats = [
  //   `Remaining Chats: ${chatCount || 0}`,
  //   `Total Chats`,
  // ];

  const [banner, setBanner] = useState(true);
  const hideBanner = () => {
    setBanner(false);
  };

  return (
    <div className="absolute top-14 right-0 md:px-20 md:py-10 p-6 w-full lg:w-[calc(100%-250px)] mx-auto text-white">
      <div className="gap-4 w-full flex flex-col flex-wrap lg:flex-nowrap justify-between rounded-md items-center mx-auto p-0 pt-2">
        {banner && (
          <div className="w-full overflow-hidden rounded-md object-cover relative backdrop-blur-md shadow">
            <div className="absolute -bottom-4 -right-4 bg-blue-500 w-28 h-28 blur-[80px] rounded-md"></div>
            <div className="absolute -bottom-4 -right-4 bg-cyan-400 w-16 h-16 blur-[50px] rounded-md"></div>
            <div
              className="absolute opacity-[0.15] h-full"
              style={{
                backgroundImage: `url(${ImageGenerationBanner})`,
                backgroundRepeat: "repeat-y",
              }}
            >
              <img
                alt=""
                src={ImageGenerationBanner}
                className="opacity-0 md:opacity-100"
              />
            </div>
            <button
              type="button"
              className="z-50 absolute top-2 right-2 text-3xl font-semibold opacity-80 hover:font-bold hover:opacity-100 rounded-full bg-white/80"
              onClick={hideBanner}
              aria-label="Close banner"
            >
              <IoIosClose className="text-slate-800" />
            </button>

            <div className="z-20 relative w-full bg-[rgba(32,45,72,0.3)] rounded-md justify-start flex md:flex-row flex-col md:items-center gap-2 p-3">
              <div className=" md:flex items-center justify-center hidden px-4">
                <img
                  src={ImageGeneration2}
                  alt="Image generation"
                  className="rounded-lg w-[170px] h-[170px] "
                />
              </div>

              <div className="flex flex-col gap-2 md:w-4/5">
                <h2 className="text-white text-2xl md:text-3xl font-semibold">
                  Ready to try Intelliwriter's Image Generator
                </h2>
                <p className="text-white md:w-[80%]">
                  Revolutionizing the way you convert simple text into visually
                  captivating artwork. Go on, Just click on get started and turn
                  your imaginations into reality!
                </p>

                <Link
                  href="/user/image-generator"
                >
                  <Button title="Test Image Generator" className="!rounded-md !w-fit" />
                </Link>
              </div>
            </div>
          </div>
        )}
        <div className="w-full min-h-[280px] flex flex-col justify-between gap-4 rounded-[12px] bg-[rgba(32,45,72,0.41)] px-2 py-6 md:p-6 ">
          <div className="flex flex-col md:flex-row w-full gap-2 relative">
            <div className="w-20 h-20 flex items-center justify-center">
              {profileImage ? (
                <img
                  src={profileImage}
                  alt={profileImage}
                  className="object-cover object-center h-full w-full rounded-md"
                />
              ) : (
                <FaUser className="object-cover object-center h-full w-full rounded-md" />
              )}
            </div>

            <div className="md:w-4/5 w-full flex flex-row gap-3 items-center justify-between relative overflow-hidden ">
              <div className="flex flex-col items-start justify-start md:px-4 w-full">
                <h2 className="font-semibold text-base md:text-3xl">{userName}</h2>
                <p className="text-sm md:text-base opacity-80 text-wrap">{userEmail}</p>
              </div>
            </div>

            <span
              key={BasicCardData[0].id}
              className={`absolute -top-3 right-0 text-sm md:text-base md:-top-3 md:-right-3 rounded-lg px-2 bg-gradient-to-bl ${planName === "Basic Plan"
              ? "from-[#8b828c] to-[#444444]"
              : planName === "Standard Plan"
                ? "from-cyan-500 to-[#113391]"
                : "from-[#ff00c8] to-[#2C63FF] "
              }`}
          >
            {planName}
            </span>
          </div>
          <div className="w-full mt-2 grid grid-cols-1 md:grid-cols-2 gap-5">
            {/* Cards */}
            {BasicCardData.slice(1).map((item) => (
              <Box className="mx-2" key={item.id}>
                <label className="opacity-80">{item.title}</label>
                <LinearProgressWithLabel
                  variant="determinate"
                  value={
                    item.id === 2
                      ? typeof wordCount === "string"
                        ? parseInt(wordCount)
                        : wordCount || 0
                      : item.id === 3
                        ? typeof chatCount === "string"
                          ? parseInt(chatCount)
                          : chatCount || 0
                        : item.id === 4
                          ? typeof imagesCount === "string"
                            ? parseInt(imagesCount)
                            : imagesCount || 0
                          : item.id === 5
                            ? typeof voiceCount === "string"
                              ? parseInt(voiceCount)
                              : voiceCount || 0
                            : 0
                  }
                  max={item.remaining || 0}
                />
              </Box>
            ))}
          </div>
        </div>
      </div>

      {/* Templates section */}
      <h2 className="text-2xl font-semibold p-2">Modules</h2>
      <div className="grid grid-cols-1 gap-5 py-3 md:grid-cols-2">
        {templateData.map((item) => (
          <div key={item.id}>
             <div className="relative md:h-64 overflow-hidden flex flex-col md:flex-row-reverse items-center justify-between w-full p-3 rounded-lg shadow-lg bg-gradient-to-tr from-[#0f1829] to-[#1d3249]" >
              <div className="md:w-[40%]">
                <img src={item.icon} className=" max-w-full h-full w-[180px] md:w-[200px] overflow-hidden" />
              </div>
              <div className="text-white md:max-w-[50%] z-50 w-full h-full pt-3 pl-3 items-start justify-center flex flex-col ">
                <h2 className="text-base md:text-xl lg:text-2xl font-semibold italic">{item.title}</h2>
                <p className="w-full">{item.description}</p>
                <Link href={item.url} className="w-fit border-b-2 py-0.5 border-white flex gap-1 hover:scale-105">Try it<MdOutlineArrowRightAlt className=" h-full justify-center text-xl" /></Link>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Overview section */}
      <div className="flex w mx-auto flex-col gap-5 my-8">
        <div className="font-semibold text-2xl">Statistics</div>

        <div className="flex flex-col lg:flex-row justify-evenly gap-5 ">
          <div className="w-full py-5 bg-[rgba(32,45,72,0.41)] shadow rounded-[12px] ">
            <div className="font-semibold px-5 pb-3 metaText border-b">
              Words Usage
            </div>
            <div className="w-3/4 mx-auto pt-2 white-color">
              <DoughnutChart
                data={[
                  wordCount === "unlimited"
                    ? 100
                    : wordCount
                      ? parseInt(wordCount)
                      : 0,
                  2000,
                ]}
              // labels={chartLabelsWords}
              />
            </div>
          </div>

          <div className="w-full py-5 bg-[rgba(32,45,72,0.41)]  shadow rounded-md ">
            <div className="font-semibold px-5 pb-3 metaText border-b">
              Chat Usage
            </div>
            <div className="w-[83%] mx-auto pt-2">
              <DoughnutChart
                data={[
                  chatCount === "unlimited"
                    ? 100
                    : chatCount
                      ? parseInt(chatCount)
                      : 0,
                  10,
                ]}
              // labels={chartLabelsChats}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DashboardPage;
