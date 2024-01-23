import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import { socialmediaBg, socialStep4, socialStep3, socialStep2, socialStep1 } from '../../../public'
import { FAQs } from '@/components'


const steps = [
  {
    id: 1,
    step: "Step#1",
    detail: "Access Intelliwriter AI Content Generator: Open your preferred web browser and navigate to the Intelliwriter.io website. Login and from the user dashboard Click on Social Media",
    image: socialStep1,
  },
  {
    id: 2,
    step: "Step#2",
    detail: "Look for your desired tab and hit a click ",
    image: socialStep2,
  },
  {
    id: 3,
    step: "Step#3",
    detail: "Enter Prompt to Search: Within the tab, You'll find a blank canvas eagerly awaiting your inspiration. Guide the AI with your words and watch your ideas transform into hashtags",
    image: socialStep3,
  },
  {
    id: 4,
    step: "Step#4",
    detail: "Get ready to be amazed – your content is ready.",
    image: socialStep4,
  },
]

const page = () => {
  return (
    <div className='my-16'>
      <div className='text-center text-white  flex flex-col items-center justify-between gap-3 mb-20'>
        <h1 className="text-3xl md:text-5xl font-semibold capitalize w-[90%] xl:w-[70%]">Unleash your <span className="bg-clip-text text-transparent bg-gradient-to-tr from-[#ec44ff] to-[#2d46ff]">
          creativity
        </span> with intelliwriter's<br /> <span className="bg-clip-text text-transparent bg-gradient-to-tr from-[#ec44ff] to-[#2d46ff]">
            AI Social Media
          </span> generator</h1>
        <p className='text-sm md:text-lg my-4 w-[90%] xl:w-[50%]'>
        Viral magic! AI crafts captions, titles & hashtags that skyrocket your reach. Ditch writer's block. Unleash AI to generate buzzworthy social content in seconds.

        </p>
        <div className="w-fit">
          <button
            className="w-fit rounded-lg bg-gradient-to-r from-[rgba(247,15,255,1)] to-[#2C63FF] px-3 py-1 md:px-4 md:py-2 hover:opacity-90"
          >
            <Link href="/auth/login">
              Try Intelliwriter Social Media Generator!
            </Link>
          </button>
        </div>
      </div>

      <div className='w-full h-[25rem] md:h-[40rem] flex items-center justify-center relative p-5 sm:px-28 md:py-20 md:px-40 opacity-80'>
        <div className='absolute inset-0 filter blur-[5px] opacity-95'>
          <img src={socialmediaBg} alt='' className='w-full h-[25rem] md:h-[40rem] object-cover' />
        </div>
        <img src={socialmediaBg} alt='' className='h-[20rem] md:w-[30rem] md:h-[30rem] z-10  rounded-2xl' />
      </div>


      <div className='my-10 md:my-20 text-center text-white flex flex-col items-center justify-center'>
        <h2 className="text-2xl md:text-4xl font-bold capitalize w-[90%] xl:w-[70%]">Why use Intelliwriter's social media generator</h2>
        <p className='text-sm md:text-lg my-4 w-[90%] xl:w-[50%]'>Intelliwriter's AI Social Media Generator isn't just a tool, it's an experience. We've crafted a seamless platform that empowers you to effortlessly bring your words an attractive look. Join the revolution and discover the magic of AI-powered Content Creation to boost your productivity.</p>
      </div>


      <div className='imageContentGeneratorSteps text-center py-10 px-[10%] text-white  flex flex-col items-center justify-center '>
        <h2 className="mb-5 text-2xl md:text-5xl font-semibold capitalize  ">OUR TOOL USES THE LATEST IN AI TECHNOLOGY TO GENERATE CAPTIVATING WORDS THAT ARE UNIQUE AND ENGAGING.</h2>

        {steps.map((item) => (
          <div key={item.id} className={` my-4 flex flex-col gap-5 md:flex md:flex-row md:items-center md:justify-between w-full ${item.id == 2 || item.id == 4 ? "md:flex-row-reverse" : ""}`}>
            <div className="items-start flex flex-col md:w-4/12 ">
              <h2 className='text-lg md:text-xl font-semibold'>
                {item.step}
              </h2>
              <p className='text-start text-base md:text-lg'>
                {item.detail}
              </p>
            </div>

            <div className='rounded-md shadow-[#101027] shadow-2xl'>
              <Image src={item.image} alt='' height={650} width={650} className='rounded-xl border border-[#1f1f7a]' />
              {/* <Image src={gradientcircle} alt='' height={600} width={600} className='opacity-40 absolute -translate-x-2/3 -translate-y-full'/> */}
              {/* <div className="bg-[#214abd] w-[330px] h-[330px] absolute rounded-full -translate-y-4/5 translate-x-1/2 md:translate-x-2/3 lg:translate-x-full blur-[120px]"></div> */}
            </div>


          </div>
        ))}

      </div>
      <div className='mt-10'>
        <FAQs />
      </div>
    </div>
  )
}

export default page