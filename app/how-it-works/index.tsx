import Image from 'next/image'
import React from 'react'

export default function HowItWorks() {
  return (
    <section className="px-5 lg:px-20 xl:px-40 mt-12 md:mt-20 mb-28 md:mb-44">
      <h1 className="font-lora text-blue-100  text-center text-3xl md:text-[2.5rem] mb-8 md:mb-20">
        How it works
      </h1>
      <div className="space-y-16 md:space-y-14 ">
        <div className="grid grid-cols-1 md:grid-cols-2 justify-center mx-auto  items-center lgMax:gap-x-10   mdMax:gap-y-6 ">
          <div className=" text-blue-100  ">
            <span className=" rounded-full w-12 font-lora font-medium text-2xl h-12 border-[3px] border-blue-100 border-opacity-10 grid place-items-center">
              1
            </span>
            <p className="my-4 font-lora text-xl md:text-2xl font-medium">
              Take a quick assessment
            </p>
            <p className="font-roboto bg-opacity-85  mdMax:text-sm w-full lg:w-[70%]">
              Start with our quick and insightful assessment—a tool designed to
              help you reflect, realign, and refocus. In just a few minutes,
              you’ll uncover valuable insights about where you are and where
              you’re meant to go.
            </p>
          </div>
          <Image
            src="/images/man-working.png"
            width={548}
            height={440}
            alt=""
          />
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 items-center  mdMax:gap-y-6 md:gap-x-10 xl:gap-x-28">
          <Image
            src="/images/men-working.png"
            width={548}
            height={440}
            alt=""
            className="mdMax:order-2"
          />
          <div className=" text-blue-100 mdMax:order-1">
            <span className=" rounded-full w-12 font-lora font-medium text-2xl h-12 border-[3px] border-blue-100 border-opacity-10 grid place-items-center">
              2
            </span>
            <p className="my-4 text-xl md:text-2xl font-lora font-medium">
              Access our custom analysis framework
            </p>
            <p className="font-roboto bg-opacity-85 w-full mdMax:text-sm lg:w-4/5">
              Clarity isn’t a destination; it’s a journey. Once you’ve completed
              your assessment, you get to create a free account and access our
              detailed analysis framework complete with tools you need to make
              the required changes in your life.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
