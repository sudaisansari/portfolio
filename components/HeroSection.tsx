"use client" // this is a client component
import React from "react"
import Image from "next/image"
import { Link } from "react-scroll/modules"
import { HiArrowDown } from "react-icons/hi"

const HeroSection = () => {
  return (
    <section id="home">
      <div className="flex flex-col text-center items-center justify-center animate-fadeIn animation-delay-2 my-10 py-16 sm:py-32 md:py-48 md:flex-row md:space-x-4 md:text-left">
        <div className="mt-2 w-1/2">
          <div className="relative rounded-full flex">
          <Image
            src="/headshot.png"
            alt="HeadShot"
            width={300}
            height={300}
            className="rounded-full shadow-2xl cover"
          />
          </div>
        </div>
        <div className="md:mt-2 md:w-3/5">
          <h2 className="text-4xl font-bold mt-6 md:mt-0 md:text-6xl">Hi, I&#39;m Sudais!</h2>
          <p className="text-lg mt-4 mb-6 md:text-2xl">
            I&#39;m a{" "}
            <span className="font-semibold text-[#31DB98]">
              Web developer{" "}
            </span>
            based in Karachi, Pakistan. Working towards creating websites that
            takes shorter load time and a faster development process.
          </p>
          <Link
            to="about"
            className="text-neutral-100 font-semibold px-6 py-3 bg-teal-700 rounded-3xl shadow hover:bg-[#103737] cursor-pointer hover:shadow-lg"
            activeClass="active"
            spy={true}
            smooth={true}
            offset={-100}
            duration={500}
          >
            About me
          </Link>
        </div>
      </div>
      <div className="flex flex-row items-center text-center justify-center ">
        <Link
          to="about"
          activeClass="active"
          spy={true}
          smooth={true}
          offset={-100}
          duration={500}
        >
          <HiArrowDown size={35} className="animate-bounce" />
        </Link>
      </div>
    </section>
  )
}

export default HeroSection
