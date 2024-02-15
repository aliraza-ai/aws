"use client";
import { BlogPageData, BlogPageDataProps } from "@/constants";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import { post } from "@/constants";

const BlogPost = () => {
  return (
    <div className="w-3/4 text-white mx-24 my-10">
      {post.map((item, id) => (
        <div key={id} className="w-3/4 flex flex-col p-5 ">
          <div className="my-10">
            <h2 className=" font-semibold text-4xl mb-5">{item.title}</h2>
            <p className="text-sm text-slate-400">{item.date}</p>
          </div>

          <Image
            src={item.image}
            alt={item.image}
            width={850}
            height={200}
            className="w-full h-full rounded-2xl my-8"
          />

          <div className="text-xl mb-10">
            <p>{item.desc}</p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default BlogPost;
