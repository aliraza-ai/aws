"use client"

import { Footer, Header } from "@/components";
import React, { useState, useRef } from "react";
import Image from "next/image";
import { HeroBg, TrustApi } from "../../../public/api/index";

import {
    HowItWorks,
    features,
    missions,
    trust_api_section_data,
} from "@/constants/index";
import Link from "next/link";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { coldarkDark } from "react-syntax-highlighter/dist/esm/styles/prism";
import PricingCard from "../api/pricing/PricingCard";
import { Plans } from "../../constants/index";

const layout = () => {

    interface codeOption {
        javascript: string;
        python: string;
        java: string;
    }

    const [language, setLanguage] = useState<keyof codeOption>("javascript");
    const [copyButtonText, setCopyButtonText] = useState("copy");
    const codeBlock = useRef<HTMLDivElement | null>(null);

    const codeOptions: codeOption = {
        javascript: `const fetch = require('node-fetch'); // For Node.js \n const api_key = 'your_api_key'; \n const url = 'https://api.yourdomain.com/ai-function'; \n const data = {text: 'Your text here' }; \n fetch(url, { \n   method: 'POST', \n   headers: { \n     'Authorization': \`Bearer \${api_key}\`, \n     'Content-Type': 'application/json', \n   }, \n   body: JSON.stringify(data), \n }) \n .then(response => response.json()) \n .then(result => console.log(result));`,

        python: `import requests \n api_key = 'your_api_key' \n url = 'https://api.yourdomain.com/ai-function' \n data = {'text': 'Your text here'} \n response = requests.post(url, headers={'Authorization': f'Bearer {api_key}'}, json=data) \n result = response.json() \n print(result)`,

        java: `import org.apache.http.HttpResponse; \n import org.apache.http.client.methods.HttpPost; \n import org.apache.http.entity.StringEntity; \n import org.apache.http.impl.client.CloseableHttpClient; \n import org.apache.http.impl.client.HttpClients; \n CloseableHttpClient client = HttpClients.createDefault(); \n HttpPost httpPost = new HttpPost("https://api.yourdomain.com/ai-function"); \n httpPost.addHeader("Authorization", "Bearer your_api_key"); \n httpPost.addHeader("Content-Type", "application/json"); \n StringEntity input = new StringEntity("{\"text\":\"Your text here\"}"); \n httpPost.setEntity(input); \n HttpResponse response = client.execute(httpPost); \n // Process the response here
            `,
    };

    const handleLanguageChange = (selectedLanguage: React.SetStateAction<string>) => {
        setLanguage(selectedLanguage as keyof codeOption);
    };

    const handleCopyClick = () => {
        if (codeBlock.current) {
            const textToCopy = codeOptions[language];
            const textArea = document.createElement("textarea");
            textArea.value = textToCopy;
            document.body.appendChild(textArea);
            textArea.select();
            document.execCommand("copy");
            document.body.removeChild(textArea);

            setCopyButtonText("Copied");
            setTimeout(() => {
                setCopyButtonText("Copy");
            }, 2000);
        }
    };
    return (
        <>
            <Header />
            <div className="flex flex-col items-center justify-center">
                {/* Hero Section */}
                <div className="w-full pt-20 md:pt-60 flex items-center justify-center " style={{
                    backgroundImage: `url(/api/hero-bg.jpeg)`,
                    backgroundSize: 'cover',
                    backgroundPosition: 'center',
                    width: '100%',
                    height: '100vh',
                }}>
                <div className=" w-full container">
                    <div >
                        {/* Shadings */}
                        <>
                            {/* <div className="bg-blue-400 w-40 h-40 -rotate-45 absolute md:top-[10%] rounded-full -translate-y-1/2 right-[20%] blur-[55px]"></div>
                            <div className="bg-blue-300 w-52 h-52 rotate-45 absolute md:top-[10%] rounded-full right-1/4 blur-[150px]"></div>
                            <div className="bg-blue-200 w-36 h-36 rotate-45 absolute top-[10%] rounded-full right-1/4 blur-[120px]"></div> */}
                        </>

                        <div className="w-full h-full flex md:flex-col flex-col justify-center items-center bg-transparent gap-7">
                            <div className="text-center w-full md:pl-20 px-10 text-white flex flex-col items-center justify-center gap-5">
                                <h2 className="sm:leading-[96px] lg:text-[72px] sm:text-5xl text-4xl font-bold text-gradient">
                                    <p className="flex md:flex-row flex-col items-center md:gap-3">
                                        <span>Empower Your</span>
                                        <span className="bg-clip-text text-transparent bg-gradient-to-tr from-[#011DFD] to-[#DE1DF5]">
                                            Projects
                                        </span>
                                    </p>
                                    {"\n"}
                                    with AI APIs!
                                </h2>
                                <p className="max-w-[680px] flex sm:justify-center text-white lg:text-2xl sm:text-xl text-base font-extralight">
                                    Welcome to the future of artificial intelligence. IntelliWriter
                                    offers a range of cutting-edge AI APIs to revolutionize your
                                    projects.
                                </p>
                                <div className="mt-4 flex flex-col sm:flex-row gap-6 justify-center">
                                    <Link href="/auth/login">
                                        <button className="btn-pill-solid rounded-[30px]">
                                            Get Started
                                        </button>
                                    </Link>
                                    <Link href="/#about">
                                        <button className="gradient-outline-btn ">
                                            <span>Learn More</span>
                                        </button>
                                    </Link>
                                </div>
                            </div>
                            <div className="md:w-1/2 w-full flex items-center justify-center">
                                <Image src={HeroBg} alt="" className="w-3/5" />
                            </div>
                        </div>
                    </div>
                </div>
                </div>
                {/* Working section */}
                <>
                    {/* <div className="w-full relative bg-primary text-white sm:py-20 lg:px-20 sm:px-6 p-4">
                        <div className="bg-blue-600 w-40 h-40 absolute top-1/2 rounded-full -translate-y-1/2 -left-10 blur-[100px]"></div>
                        <div className="grid md:grid-cols-4 sm:grid-cols-2 grid-cols-1 sm:gap-10 gap-4 relative">
                            {HowItWorks.map((item) => (
                                <div key={item.id} className="p-4 flex flex-col justify-between">
                                    <div className="relative w-24 h-24">
                                        <div className="h-24 bg-icon shadow-xl dropshadow bg-contain bg-no-repeat opacity-20"></div>
                                        <span className="md:text-6xl text-3xl text-white absolute top-1/2 -translate-y-1/2 left-1/2 -translate-x-1/2">
                                            {item.icon}
                                        </span>
                                    </div>

                                    <div className="px-2">
                                        <h2 className="text-3xl">{item.title}</h2>
                                        <p className="mt-8 mb-4 font-light">{item.paragraph}</p>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div> */}
                </>

                {/* Integration of an API */}
                <div className="container w-full lg:py-10 sm:mt-[180px] md:py-5 px-6 py-3 ">
                    <div className="bg-blue-700 w-[250px] h-[250px] absolute top-1/3 rounded-full -translate-y-1/2 right-0 blur-[150px]"></div>
                    <div className="w-full flex items-center justify-center flex-col">
                        <div className="md:w-1/2 w-full text-white flex-col flex gap-8">
                            <h1 className="text-center lg:text-6xl md:text-5xl sm:text-4xl text-3xl font-medium">
                                Why Choose Our{" "}
                                <span className="bg-clip-text text-transparent bg-gradient-to-tr from-[#011DFD] to-[#DE1DF5]">
                                    AI
                                </span>{" "}
                                APIs?
                            </h1>
                            <p className="md:text-lg text-white-700 text-center">
                                Discover the advantages of partnering with intelliwriter. Our AI
                                APIs offer an array of features that can transform your projects,
                                streamline your processes, and elevate your applications.
                            </p>
                        </div>

                        <div className="flex items-center justify-center">
                            <div className="min-[376px]:w-4/5 w-full h-full grid lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-2 grid-cols-1 gap-4 py-10">
                                {features.map((item) => (
                                    <div
                                        key={item.id}
                                        className="w-full h-full flex flex-col rounded-lg py-8 px-10 bg-[#191a3a] hover:bg-blue-950 text-white gap-4 overflow-hidden relative"
                                    >
                                        <div className="absolute -top-4 -left-4 w-20 h-20 rounded-full bg-pink-400 blur-[50px]"></div>
                                        <div className="absolute -bottom-4 -right-4 w-20 h-20 rounded-full bg-blue-400 blur-[50px]"></div>
                                        <Image src={item.icon} alt="" className="w-1/2" />
                                        <h2 className="text-2xl font-medium">{item.title}</h2>
                                        <p className="text-base text-white">{item.desc}</p>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>

                {/*Features */}
                <div className="container w-full xl:px-20 xl:py-10 md:px-10 md:py-5 px-6 py-3 ">
                    <div className="bg-[#DD19F2] w-52 h-52 absolute top-1/2 rounded-full -translate-y-1/2 -left-20 blur-[180px]"></div>
                    <div className="w-full relative">
                        <div className="xl:w-1/2 w-full text-white flex-col flex gap-8">
                            <h1 className="lg:text-6xl md:text-5xl sm:text-4xl text-3xl font-medium">
                                Explore{" "}
                                <span className="bg-clip-text text-transparent bg-gradient-to-tr from-[#011DFD] to-[#DE1DF5]">
                                    AI
                                </span>{" "}
                                APIs in Your Preferred Language
                            </h1>
                            <p className="md:text-lg ">
                                Our mission is to make cutting-edge artificial intelligence
                                accessible to developers and businesses of all sizes.
                            </p>
                        </div>

                        <div className="lg:flex lg:gap-5 mt-5">
                            <div className="lg:w-1/2 w-full text-white flex-col flex gap-8">
                                {missions.map((item) => (
                                    <div
                                        key={item.id}
                                        className="w-full h-full md:flex items-center justify-center text-white gap-4 "
                                    >
                                        <Image
                                            src={item.icon}
                                            alt="any"
                                            className="h-[50px] md:h-[70px]"
                                        />
                                        <div className="py-2 md:py-0">
                                            <h2 className="text-2xl font-semibold">{item.title}</h2>
                                            <p className="text-base ">{item.desc}</p>
                                        </div>
                                    </div>
                                ))}
                            </div>

                            {/* Code Panel */}
                            <div className="pt-5 lg:w-1/2">
                                <div className="relative bg-gray-900 rounded-lg overflow-hidden">
                                    {/* Language selection buttons */}
                                    <div className="flex">
                                        <button
                                            className={`text-sm px-2 py-2 w-1/3 bg-gray-800 hover:border rounded-tl-lg hover:border-cyan-500 hover:text-cyan-500  ${language === "javascript"
                                                ? " border border-cyan-500 text-cyan-500"
                                                : " text-white"
                                                }`}
                                            onClick={() => handleLanguageChange("javascript")}
                                        >
                                            Node.js
                                        </button>
                                        <button
                                            className={`text-sm px-2 py-2  w-1/3 bg-gray-800 hover:border hover:border-cyan-500 hover:text-cyan-500 ${language === "python"
                                                ? "border border-cyan-500 text-cyan-500"
                                                : " text-white"
                                                }`}
                                            onClick={() => handleLanguageChange("python")}
                                        >
                                            Python
                                        </button>
                                        <button
                                            className={`text-sm px-2 py-2 w-1/3 bg-gray-800 hover:border rounded-tr-lg hover:border-cyan-500 hover:text-cyan-500 ${language === "java"
                                                ? " border border-cyan-500 text-cyan-500"
                                                : " text-white"
                                                }`}
                                            onClick={() => handleLanguageChange("java")}
                                        >
                                            Java
                                        </button>
                                    </div>

                                    {/* Code block with syntax highlighting */}
                                    <div className="flex items-center justify-end">
                                        <button
                                            onClick={handleCopyClick}
                                            className="copyButton self-end bg-gray-700  text-white rounded-full text-sm px-2 pt-0.5 pb-1 -mb-[40px] mr-2"
                                        >
                                            {copyButtonText}
                                        </button>
                                    </div>
                                    <div ref={codeBlock}>
                                        <SyntaxHighlighter
                                            language={language}
                                            style={coldarkDark}
                                            showLineNumbers={true}
                                            className="custom-scrollbar"
                                        >
                                            {codeOptions[language]}
                                        </SyntaxHighlighter>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Pricing plans */}
                <div className="container w-full px-6 flex md:flex-row flex-col justify-center md:items-end items-center gap-10 py-16">
                    {Plans.map((plan, index) => (
                        <PricingCard key={index} {...plan} />
                    ))}
                </div>

                {/* Trust Our API section */}
                <div className="container w-full h-full pt-10 flex lg:flex-row flex-col justify-center items-center bg-transparent gap-4 lg-gap-7 pb-10 px-10">
                    <div className="lg:w-1/2 w-full flex items-center justify-center ">
                        <Image src={TrustApi} alt="" className="w-4/6 " />
                    </div>

                    <div className="lg:w-1/2 w-full md:px-20 lg:px-0  text-white flex flex-col gap-5">
                        <h2 className="lg:text-5xl text-4xl font-semibold text-gradient">
                            Trust in Our Approved{" "}
                            <span className="bg-clip-text text-transparent bg-gradient-to-tr from-[#011DFD] to-[#DE1DF5]">
                                AI
                            </span>{" "}
                            APIs Security Measures.
                        </h2>
                        <p>
                            At IntelliWriter, your security is our utmost priority. We
                            understand the importance of safeguarding your data and ensuring the
                            reliability of our AI APIs.{" "}
                        </p>
                        <ul>
                            {trust_api_section_data.map((item) => (
                                <li key={item.id} className="flex">
                                    <span className="p-2 text-2xl text-cyan-400">{item.icon}</span>
                                    <span className="p-1 pl-4">{item.paragraph}</span>
                                </li>
                            ))}
                        </ul>
                    </div>
                </div>

                <Footer />
            </div>
        </>
    )
}

export default layout;