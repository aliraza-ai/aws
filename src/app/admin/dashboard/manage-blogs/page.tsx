"use client";

import React, { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { blogpost } from "@/constants/index";
import { FaRegEdit } from "react-icons/fa";
import { IoTrashBinOutline } from "react-icons/io5";
import { useRouter } from "next/navigation";
import Button from "@/components/Button";
import { useWebContext } from '@/context/ContextProvider';

const dashboard = () => {
  const router = useRouter();
  const { blogs } = useWebContext();
  const [isAdmin, setIsAdmin] = useState(true);
  const adminEmail = typeof window !== "undefined" ? sessionStorage.getItem("adminEmail") : null;
  useEffect(() => {
    const adminTokens = sessionStorage.getItem("admintokens");
    if (!adminTokens) {
      setIsAdmin(true)
      router.push('/admin/intelli-admin');
    } else {
      setIsAdmin(false)
    }
  }, [router]);

  return (
    <>
      {isAdmin ?
        <div className="w-full flex justify-center items-center h-screen">
          <div className={`h-20 w-20 animate-spin rounded-full text-white border-4 border-solid border-current border-r-transparent align-[-0.125em] motion-reduce:animate-[spin_1.5s_linear_infinite]`} />
        </div> :
        <>
          <div className="py-4 px-10 w-full bg-white/10 text-lg text-white">
            {adminEmail}
          </div>
          <p className="w-full md:text-5xl text-3xl text-white p-10">Welcome to Admin Panel</p>
          <div className="w-full flex flex-col justify-center items-center p-5 my-10">
            <div className="md:w-4/5 w-full flex flex-col md:flex-row items-center justify-between md:gap-36">
              <p className="text-gradient py-5 text-xl md:text-3xl font-semibold md:text-center">Blog List</p>
              <Link href="/admin/dashboard/blog-editor">
                <Button
                  title="Add New Blog"
                  btnType="submit"
                />
              </Link>
            </div>


            <div className="md:w-4/5 w-full h-full gap-5 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-1 xl:grid-cols-1">
              {blogs.map((item) => (
                <div
                  key={item.id}
                  className=" md:w-full w-full flex bg-[#121636] justify-between p-3 md:p-6 rounded-2xl"
                >
                  <div className="flex justify-center gap-6">
                    <Image
                      src={item.image}
                      alt={item.image}
                      width={80}
                      height={80}
                      className="object-cover rounded-lg md:w-32 md:h-32 hover:opacity-80"
                    />
                    <div className="flex flex-col justify-center md:gap-3">
                      <p className=" text-sm md:text-lg ">{item.title}</p>
                      <p className=" text-xs md:text-xs">{item.publishDate}</p>
                    </div>
                  </div>

                  <div className="flex flex-col md:flex-row justify-center items-center text-white md:text-sm text-xs cursor-pointer ">
                    <Link href={`/admin/dashboard/blog-editor?id=${item.id}`}>
                      <button className=" flex justify-center items-center mx-3 hover:opacity-80">
                        <FaRegEdit className="mx-1" /> Update
                      </button>
                    </Link>

                    <button className="flex justify-center items-center hover:opacity-80">
                      <IoTrashBinOutline className="mx-1" /> Delete
                    </button>
                  </div>
                </div>
              ))}

              {blogs.length < 0 && (
                <div className="text-center p-6 font-medium text-3xl w-full">
                  Nothing to show
                </div>
              )}
            </div>
          </div>
        </>
      }
    </>
  );
};

export default dashboard;
