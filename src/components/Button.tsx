"use client";

import { CustomButtonProps } from "@/types";

const Button = ({
  title,
  className,
  width,
  onClick,
  btnType,
  disbaled,
}: CustomButtonProps) => {
  return (
    <div
      className={`${
        width ? width : "w-fit"
      } rounded-3xl p-0.5 bg-gradient-to-tr from-purple-500 to-pink-500 transition duration-200 btn-shadow`}
    >
      <button
        type={btnType ? btnType : "button"}
        className={`bg-gradient-to-tr from-pink-600 to-purple-700 py-2 md:text-sm text-[10px] text-white font-semibold md:px-6 px-3 rounded-full ${className} `}
        onClick={onClick}
      >
        <span className={`flex-1`}>{title}</span>
      </button>
    </div>
  );
};

export default Button;
