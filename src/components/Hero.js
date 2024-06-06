import React from 'react'
import line from "../Assets/Vector.png"
const Hero = ({ backgroundImage, firstLine, tit1, tit2, desc }) => {
  return (
    <div className="relative isolate px-5 pt-0 lg:px-8 h-screen flex items-center">
      <div
        className="absolute inset-0 -z-10 bg-cover bg-center"
        style={{ backgroundImage: `url(${backgroundImage})` }}
        aria-hidden="true"
      >
        <div className="absolute inset-0 bg-black opacity-45" />
      </div>
      <div className="mx-auto max-w-2xl py-1 sm:py-48 lg:py-1">
        <div className="sm:mb-8 sm:flex">
          <div className="relative rounded-full px-1 py-1 text-lg leading-1 text-white  hover:ring-gray-900/20">
          {firstLine}
          <img src={line}/>

          </div>
        </div>
        <div>
          <h1 className="text-2xl font-bold tracking-tight text-[#F7C35F] sm:text-5xl md:text-6xl">
            {tit1}
          </h1>
          <h1 className="text-2xl font-bold tracking-tight text-[#FFFFFF] sm:text-5xl md:text-6xl mt-2">
            {tit2}
          </h1>
          <p className="mt-4 text-xs sm:text-base md:text-lg leading-8 text-[#FFFFFF]">
            {desc}
          </p>
          {/* <div className="mt-8 flex gap-x-6">
            <a
              href="#"
              className="rounded-md bg-[#F7C35F] px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
            >
              Discover More
            </a>
          </div> */}
        </div>
      </div>
    </div>
  )
}

export default Hero
