"use client";

import { FAQs } from "@/components";
import { BlogPageData, BlogPageDataProps } from "@/constants";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import Button from "@/components/Button";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import "swiper/swiper-bundle.css";

interface BlogPageProps {
  blogPageData?: BlogPageDataProps[];
}

const FisrtCard: React.FC<{ cards: BlogPageDataProps[] }> = ({ cards }) => {
  const firstCard = cards.find((card) => card.id === 6);
  return (
    <>
      {firstCard && (
        <div className=" w-full md:flex text-white justify-between items-center">
          <div className="h-[250px] md:h-[350px] md:w-full p-5">
            <Image
              src={firstCard.image}
              alt={firstCard.image}
              width={850}
              height={850}
              className="md:flex object-cover h-full w-full rounded-2xl"
            />
          </div>
          <div className="flex flex-col p-6">
            <p className="text-sm">{firstCard.date}</p>
            <h4 className="font-semibold mt-5 text-2xl">{firstCard.title}</h4>
            <p className="w-3/4 mt-2 mb-4 text-base ">{firstCard.desc}</p>
            <Link href="/blog-post-1">
              <div>
                <Button
                  title="Continue Reading"
                  btnType="button"
                  className="py-10 "
                />
              </div>
            </Link>
          </div>
        </div>
      )}
    </>
  );
};

const Card: React.FC<{ card: BlogPageDataProps }> = ({ card }) => {
  return (
    <>
      <div className="text-white flex flex-col">
        <div className="h-[250px] md:h-[300px] p-5">
          <Image
            src={card.image}
            alt={card.image}
            width={500}
            height={500}
            className="object-cover h-full w-full rounded-2xl"
          />
        </div>
      </div>
      <div className="h-[150px] md:h-[200px] text-white text-sm md:text-base xl:text-lg p-3 md:p-8 ">
        <h4 className="font-semibold mb-5 md:mb-5 -mt-7">{card.title}</h4>
        <div className="border-t-2 border-[#ffffff37] my-5"></div>
        <div className="flex items-center">
          <p className="text-sm">{card.date}</p>
        </div>
      </div>
    </>
  );
};

const BlogPage: React.FC<BlogPageProps> = ({ blogPageData = BlogPageData }) => {
  return (
    <>
      <div className="my-10 md:mx-52">
        <FisrtCard cards={blogPageData} />
      </div>

      <div className="my-10 md:mx-52 items-center justify-center grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-3 ">
        {blogPageData.map((card) => (
          <div key={card.id}>
            <Card card={card} />
          </div>
        ))}
      </div>
    </>
  );
};

export default BlogPage;
