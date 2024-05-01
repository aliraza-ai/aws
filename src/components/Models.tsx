import React from "react";
import { SiOpenaigym, SiAudiomack } from "react-icons/si";
import { PiTidalLogoBold } from "react-icons/pi";

const Models = () => {
  return (
    <div className="w-full flex items-center flex-col  justify-center ">
      <div className="xl:px-16 md:px-6 px-4 py-10 w-full container">
        <h2 className="lg:text-6xl text-5xl font-normal relative lg:p-10 md:p-6 p-4">
          <span className="border-text text-white opacity-20 absolute md:top-3 lg:top-4 top-0 lg:left-10">
            DEALINGS WITH
          </span>
          <span className="text-white relative lg:p-6 p-6">
            ADVANCE AI LLMs
          </span>
        </h2>

        <p className="2xl:text-xl md:text-lg text-[16px] font-normal !text-white/70 lg:px-10 md:p-6 p-4">
          Begin your creative odyssey with Images & NFTs. Immerse yourself in a
          realm where art merges with innovation, enabling exploration,
          creation, and sharing of your distinct vision through digital marvels
          and NFTs. Start now to ignite limitless digital creativity.
        </p>
      </div>

      <div className="w-full relative h-[470px] -mb-10">
        <div className="w-full h-[300px] bg-gradient-to-b from-primary to-transparent absolute -top-10 left-0 -z-0" />
        <div className="w-full h-[300px] bg-gradient-to-t from-primary to-transparent absolute bottom-0 left-0 -z-0" />

        <div className="w-full h-[400px] opacity-30 absolute flex flex-col justify-between -z-10">
          <div className="border-b h-1 border-white-40 w-full " />
          <div className="border-b h-1 border-white-40 w-full " />
          <div className="border-b h-1 border-white-40 w-full " />
          <div className="border-b h-1 border-white-40 w-full " />
          <div className="border-b h-1 border-white-40 w-full " />
          <div className="border-b h-1 border-white-40 w-full sm:hidden block" />
          <div className="border-b h-1 border-white-40 w-full sm:hidden block" />
        </div>

        <div className="w-full opacity-30 h-[500px] flex absolute -top-10 justify-between -z-10">
          <div className="border-l w-1 border-white-40 h-[500px] " />
          <div className="border-l w-1 border-white-40 h-[500px] " />
          <div className="border-l w-1 border-white-40 h-[500px] " />
          <div className="border-l w-1 border-white-40 h-[500px] " />
          <div className="border-l w-1 border-white-40 h-[500px] " />
          <div className="border-l w-1 border-white-40 h-[500px] " />
          <div className="border-l w-1 border-white-40 h-[500px] " />
          <div className="border-l w-1 border-white-40 h-[500px] sm:block hidden" />
          <div className="border-l w-1 border-white-40 h-[500px] md:block hidden" />
          <div className="border-l w-1 border-white-40 h-[500px] md:block hidden" />
          <div className="border-l w-1 border-white-40 h-[500px] md:block hidden" />
          <div className="border-l w-1 border-white-40 h-[500px] md:block hidden" />
        </div>

        <div className="lg:p-20 py-10 px-3 relative w-full h-[425px] flex justify-between gap-6 md:flex-row flex-col items-center z-30">
          <div className="p-3 md:border-2 border flex gap-4 justify-between items-center border-white rounded-full text-white lg:text-2xl md:text-xl text-lg pr-4 font-semibold">
            <div className="lg:w-20 lg:h-20  md:w-16 md:h-16 w-12 h-12 rounded-full border border-white bg-gradient-to-tr from-[#a65dff]/40 to-transparent flex items-center justify-center">
              <SiOpenaigym className="lg:text-5xl md:text-4xl text-3xl text-white" />
            </div>

            <span>Intelli. GPT-4</span>
          </div>

          <div className="p-3 md:border-2 border flex gap-4 justify-between items-center border-white rounded-full text-white lg:text-2xl md:text-xl text-lg pr-4 font-semibold">
            <div className="lg:w-20 lg:h-20  md:w-16 md:h-16 w-12 h-12 rounded-full border border-white bg-gradient-to-tr from-[#a65dff]/40 to-transparent flex items-center justify-center">
              <PiTidalLogoBold className="lg:text-5xl md:text-4xl text-3xl text-white" />
            </div>

            <span>Intelli. Imagine</span>
          </div>

          <div className="p-3 md:border-2 border flex gap-4 justify-between items-center border-white rounded-full text-white lg:text-2xl md:text-xl text-lg pr-4 font-semibold">
            <div className="lg:w-20 lg:h-20  md:w-16 md:h-16 w-12 h-12 rounded-full border border-white bg-gradient-to-tr from-[#a65dff]/40 to-transparent flex items-center justify-center">
              <SiAudiomack className="lg:text-5xl md:text-4xl text-3xl text-white" />
            </div>

            <span>Intelli. Voice</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Models;
