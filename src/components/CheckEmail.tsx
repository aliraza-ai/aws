"use client";

import Link from "next/link";

const CheckEmail = () => {
  return (
    <div className="flex flex-col text-white items-center justify-center py-16">
      <h1 className="text-3xl font-bold mb-4">Check Your E-mail</h1>
      <p className="text-[16px]">
        We have sent you an email. Kindly check your gmail inbox.
      </p>
      <p className="text-[16px] text-center mb-8">
        If you haven't received any email, please retry after 5 minutes or check
        <br /> your spam folder.
      </p>
      <Link
        href="/"
        className="bg-gradient-to-r from-[rgba(247,15,255,1)] to-[#2C63FF] text-white font-bold py-2 px-4 rounded"
      >
        Go to Homepage
      </Link>
    </div>
  );
};

export default CheckEmail;
