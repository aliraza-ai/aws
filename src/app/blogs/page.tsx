"use client"

import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { BlogPageData, BlogPageDataProps } from '@/constants';
import 'swiper/swiper-bundle.css';
import { MdOutlineReadMore } from 'react-icons/md';
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel';

interface BlogPageProps {
  blogPageData?: BlogPageDataProps[];
}

const CardSlider: React.FC<{ cards: BlogPageDataProps[] }> = ({ cards }) => {
  return (
    <Carousel infiniteLoop autoPlay showThumbs={false}>
      {cards.map((card) => (
        <Link href="/" className='md:flex text-white rounded-xl' key="index">
          <div className='h-[250px] md:h-[300px] md:w-1/2 p-0.5'>
            <Image src={card.image} alt={''} className='object-cover h-full w-full' />
          </div>
          <div className='h-[250px] md:h-[300px] md:w-1/2 text-sm md:text-base xl:text-lg p-5 flex flex-col items-center justify-center'>
            <h4 className='font-semibold mb-10'>{card.title}</h4>
            <div className='flex items-center justify-between '>
              <p>{card.date}</p>
              <button className='rounded-full px-7 py-2 hover:bg-primary-two transition duration-700 ease-in-out'>
                <MdOutlineReadMore size={30} />
              </button>
            </div>
          </div>
        </Link>))}
    </Carousel>
  );
};

const Card: React.FC<{ card: BlogPageDataProps }> = ({ card }) => {
  return (
    <div className='border border-y-stone-400 text-white rounded-lg flex flex-col hover:opacity-80 hover:bg-[#640F6C] transition duration-700 ease-in-out h-[400px] md:h-[500px]'>
      <Link href="/">
        <div className='h-[250px] md:h-[300px] p-0.5'>
          <Image src={card.image} alt={''} className='object-cover h-full w-full' />
        </div>
        <div className='h-[150px] md:h-[200px] text-sm md:text-base xl:text-lg p-3 md:p-5'>
          <h4 className='font-semibold mb-5 md:mb-10'>{card.title}</h4>
          <div className='flex items-center justify-between '>
            <p>{card.date}</p>
            <button className='rounded-full px-7 py-2 hover:bg-primary-two transition duration-700 ease-in-out'>
              <MdOutlineReadMore size={30} />
            </button>
          </div>
        </div>
      </Link>
    </div>
  );
};

const BlogPage: React.FC<BlogPageProps> = ({ blogPageData = BlogPageData }) => {

  return (
    <>
      <div className="my-10 mx-10 md:mx-36 xl:mx-80">
        <CardSlider cards={blogPageData} />
      </div>
      
      <div className='my-10 mx-10 md:mx-36 xl:mx-80 items-center justify-center grid md:grid-cols-2 xl:grid-cols-3 gap-5'>
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