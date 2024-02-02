"use client";

import React, { useState, useEffect, FormEvent } from "react";
import Select from "react-select";
import Link from "next/link";
import AudioPlayer from "react-h5-audio-player";
import "react-h5-audio-player/lib/styles.css";
import { FaChevronRight, FaCirclePlay } from "react-icons/fa6";
import { TbSend } from "react-icons/tb";
import IntelliVoice from "@/utils/IntelliVoice";
import { MdDownloadForOffline } from "react-icons/md";

type Voice = {
    id: number;
    prompt: string;
    voice: string;
};

type Option = {
    value: string;
    label: string;
};

const VoiceGenerator = () => {
    const [waitResponse, setWaitResponse] = useState<boolean>(false);
    const [voiceList, setVoiceList] = useState<Voice[]>([]);
    const [selectedOption, setSelectedOption] = useState<Option>({
        value: "alloy",
        label: "Alloy",
    });
    const [buttonDisabled, setButtonDisabled] = useState<boolean>(false);
    const [promptError, setPromptError] = useState<string>("");
    const userId = typeof window !== "undefined" ? sessionStorage.getItem("userId") : null;

    useEffect(() => {
        const voicesStore = typeof window !== 'undefined' ? sessionStorage.getItem("voiceList") : null;
        if (voicesStore) {
            setVoiceList(JSON.parse(voicesStore));
        }
    }, []);

    const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        const speech = e.currentTarget.querySelector("input")!.value;
        const voice = selectedOption.value;

        try {
            setWaitResponse(true);
            setButtonDisabled(true);

            const query = {
                prompt: speech,
                voice: voice,
                userId: userId,
            }

            const response = await IntelliVoice(query);
            if (response.success) {
                setWaitResponse(false);
                setButtonDisabled(false);

            const updatedVoiceList = [
                ...voiceList,
                {
                    id: voiceList.length,
                    prompt: speech,
                    voice: response.file,
                },
            ];
            
            setVoiceList(updatedVoiceList);
            sessionStorage.setItem("voiceList", JSON.stringify(updatedVoiceList));
            } else {
                setPromptError(response.message)
            }
        } catch (error) {
            setPromptError(`${error}`)
        }
    };

    const downloadAudio = (voice: any) => {
        const url = URL.createObjectURL(voice);
        const link = document.createElement('a');
        link.href = url;
        link.setAttribute('download', 'intelliwriter_audio.mp3');
        document.body.appendChild(link);
        link.click();
    };

    const option: Option[] = [
        { value: "alloy", label: "Alloy" },
        { value: "echo", label: "Echo" },
        { value: "fable", label: "Fable" },
        { value: "onyx", label: "Onyx" },
        { value: "vova", label: "Nova" },
        { value: "shimmer", label: "Shimmer" },
    ];

    const styles = {
        option: (provided: any, state: any) => ({
            ...provided,
            backgroundColor: state.isFocused ? "#00BBFE" : state.isSelected ? "#00BBFE" : "transparent",
        }),
    };

    return (
        <div className="absolute top-14 right-0 md:px-20 md:py-5 p-6 w-full lg:w-[calc(100%-250px)] text-white">
            <div className="flex justify-center w-full flex-col h-full text-white md:py-10 py-5 -mt-6">
                <div className="text-base text-slate-400 font-light p-2 flex items-center gap-2">
                    <Link href="/user/dashboard">Dashboard</Link>
                    <FaChevronRight className="text-sm" />
                    <Link href="/user/voice-generator">Voice Generator</Link>
                </div>

                <h1 className="text-3xl font-semibold p-2 pb-3">Voice Generator</h1>

                <div className=" w-full flex flex-col justify-between items-center gap-5 py-5">
                    <form
                        onSubmit={(e: FormEvent<HTMLFormElement>) => handleSubmit(e)}
                        className="w-full border border-gray-600 rounded-md bg-[rgba(32,45,72,0.41)]"
                    >
                        <div className="w-full lg:p-5 p-3 border-b border-b-gray-600 flex md:flex-row flex-col gap-3 justify-between items-center">
                            <input
                                className="w-11/12 md:py-5 p-2 outline-none rounded-md bg-primary px-3"
                                placeholder="Describe your speech!"
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

                        <div className="xl:w-1/3 lg:1/3 md:w-1/2 w-full p-5">
                            <div className="w-full flex md:flex-row flex-col gap-3 sm:justify-start justify-between items-center">
                                <label className="opacity-60 font-thin text-sm">
                                    Aspect Ratio
                                </label>
                                <Select
                                    className="w-[120px]"
                                    defaultValue={selectedOption}
                                    onChange={(e) => setSelectedOption(e as Option)}
                                    options={option}
                                    styles={styles}
                                />
                            </div>
                        </div>
                    </form>

                    <p className="text-red-500 text-sm">
                        {promptError}
                    </p>

                    {waitResponse && (
                        <div className="w-full flex items-center justify-center">
                            <div className="bg-[rgba(32,45,72,0.41)] w-full h-[100px] rounded-lg card-reload flex items-center justify-between gap-3 p-3">
                                <div className="w-[60px] h-[60px] bg-gray-700 rounded-md flex items-center justify-center">
                                    <FaCirclePlay className="text-2xl text-slate-950/50" />
                                </div>
                                <div className="space-y-2 w-11/12 h-full flex flex-col justify-center">
                                    <div className="w-1/2 h-6 bg-gray-700 rounded-md"></div>
                                    <div className="w-full h-6 bg-gray-700 rounded-md"></div>
                                </div>
                            </div>
                        </div>
                    )}

                    {voiceList.length > 0 && (
                        voiceList .slice().reverse().map((item) => (
                            <div key={item.id} className="w-full">
                                <p className="opacity-70">&quot;{item.prompt}&quot;</p>
                                <div className="bg-[rgba(32,45,72,0.41)] w-full flex md:flex-row flex-col-reverse items-center justify-between rounded-lg gap-3 p-3">
                                    <div className="md:w-4/5 w-full">
                                    <AudioPlayer
                                        src={item.voice}
                                        autoPlayAfterSrcChange={false}
                                    />
                                    </div>
                                    <div className="w-fit flex flex-col items-center gap-2">
                                    <MdDownloadForOffline
                                            className='text-white opacity-60 md:text-4xl text-3xl cursor-pointer'
                                            onClick={() => downloadAudio(item.voice)}
                                        />
                                    <span className="text-[10px] opacity-60 text-white">Download</span>
                                    </div>
                                </div>
                            </div>
                        ))
                    )}
                </div>
            </div>
        </div>
    );
};

export default VoiceGenerator;

