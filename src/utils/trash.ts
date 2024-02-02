"use client";

import React, { useState, useEffect, FormEvent } from "react";
import Link from "next/link";
import { FaChevronRight } from "react-icons/fa6";
import { TbSend } from "react-icons/tb";
import axios from "axios";

const ImageGeneratorPages = () => {
    const [progress, setProgress] = useState<number>(0);
    const [dots, setDots] = useState<number>(1);
    const [waitResponse, setWaitResponse] = useState<boolean>(false);
    const [buttonDisabled, setButtonDisabled] = useState<boolean>(false);
    const [promptError, setPromptError] = useState<string>("");


    const handleDownload = async (imageUrl: string) => {
        try {
            const response = await axios.get(imageUrl, {
                responseType: "arraybuffer",
            });

            const blob = new Blob([response.data], {
                type: response.headers["content-type"],
            });
            const url = window.URL.createObjectURL(blob);

            const link = document.createElement("a");
            link.href = url;
            link.download = `intelliwriter_ai`;
            document.body.appendChild(link);
            link.click();
            document.body.removeChild(link);
            window.URL.revokeObjectURL(url);
        } catch (error) {
            console.error("Error downloading image:", error);
        }
    };

    const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault();
    };


    useEffect(() => {
        const intervalId = setInterval(() => {
            setDots((prevDots) => (prevDots === 4 ? 1 : prevDots + 1));
        }, 400);
        return () => clearInterval(intervalId);
    }, []);

    const progressDone = (): string => {
        if (progress >= 90) {
            return "Almost done! 🙈";
        } else if (progress >= 75) {
            return "Finalizing image! 🤩";
        } else if (progress >= 50) {
            return "Processing on the query! 🙈";
        } else if (progress >= 30) {
            return "Start executing your prompt! 🤩";
        } else {
            return "Getting things ready! 😍";
        }
    };

    return (
        <div className="absolute top-14 right-0 md:px-20 md:py-5 p-6 w-full lg:w-[calc(100%-250px)] text-white">
            <div className="flex justify-center w-full flex-col h-full text-white md:py-10 py-5 -mt-6">
                {/* Prompt box */}
                <div className="text-base text-slate-400 font-light p-2 flex items-center gap-2">
                    <Link href="/user/dashboard">Dashboard</Link>
                    <FaChevronRight className="text-sm" />
                    <Link href="/user/voice-generator">Voice Generator</Link>
                </div>

                <h1 className="text-3xl font-semibold p-2 pb-3">Voice Generator</h1>

                <div className=" w-full flex flex-col justify-between items-center gap-5 py-5">
                    {/* Prompt Form */}
                    <form
                        onSubmit={(e: FormEvent<HTMLFormElement>) => handleSubmit(e)}
                        className="w-full border border-gray-600 rounded-full bg-[rgba(32,45,72,0.41)]"
                    >
                        {/* Upper prompt field */}
                        <div className="w-full lg:p-5 p-3 flex md:flex-row flex-col gap-3 justify-between items-center">
                            <input
                                className="w-11/12 md:py-5 p-2 px-4 outline-none rounded-full bg-primary"
                                placeholder="Describe what you need to be voice over!"
                                required
                            />
                            <button
                                type="submit"
                                className="bg-gradient-to-r from-[rgba(247,15,255,1)] to-[#2C63FF] font-semibold  px-4 py-2 rounded-md h-fit flex justify-between items-center gap-2 hover:opacity-90"
                                disabled={buttonDisabled}
                            >
                                {buttonDisabled ? (
                                    "Processing..."
                                ) : (
                                    <>
                                        Go <TbSend className="text-white text-xl" />
                                    </>
                                )}
                            </button>
                        </div>
                    </form>

                    <p className="text-red-500 text-sm">
                        {promptError}
                    </p>

                    {/* Response box */}
                    {waitResponse && (
                        <div className="w-full flex flex-col items-center justify-center">
                            <div className="text-center flex items-center gap-2">
                                <span className="font-thin py-5">
                                    {progress}% - {progressDone()}
                                </span>
                                <div>
                                    {Array.from({ length: dots }).map((_, index) => (
                                        <span key={index}>.</span>
                                    ))}
                                </div>
                            </div>

                            <div className="flex items-center justify-center sm:w-fit w-full">
                                <div className="bg-[rgba(32,45,72,0.41)] w-4/5 h-40 rounded-full card-reload"></div>
                            </div>
                        </div>
                    )}

                </div>
            </div>
        </div>
    );
};

export default ImageGeneratorPages;
