'use client'

import React from "react";
import Image from 'next/image'
import localFont from 'next/font/local'

import { motion, useScroll } from "framer-motion"

import headshot from "../../public/assets/headshot.png"
import chicago from "../../public/assets/chicago.jpg"
import UIUC from "../../public/assets/UIUC.jpg"
import quad from "../../public/assets/quad.jpg"

const Marine = localFont({ src: '../../public/fonts/Marine.otf' });
const WalsheimBold = localFont({ src: '../../public/fonts/WalsheimB.otf' });
const WalsheimUltraBold = localFont({ src: '../../public/fonts/WalsheimUB.otf' });


export default function Home() {

  return (
    <div className="flex flex-col items-center gap-[15px] mt-[15px] bg-background">

      {/* App Icon */}
      <link rel="icon" href="/favicon.ico" sizes="any" />

      {/* Colorscheme Changer */}
      {/* <div className="w-[55px] h-[180px] fixed right-0 top-0 flex flex-col justify-evenly">
        <div className="cursor-pointer w-[40px] h-[40px] border-2 border-textcolor rounded-[15px] bg-accent hover:scale-[1.15] hover:shadow-lg duration-200"></div>
        <div className="cursor-pointer w-[40px] h-[40px] border-2 border-textcolor rounded-[15px] bg-accent hover:scale-[1.15] hover:shadow-lg duration-200"></div>
        <div className="cursor-pointer w-[40px] h-[40px] border-2 border-textcolor rounded-[15px] bg-accent hover:scale-[1.15] hover:shadow-lg duration-200"></div>
      </div> */}

      {/* Header */}
      <div className="border-textcolor w-[800px] h-[50px] bg-accent border-2 rounded-[50px] flex flex-row items-center justify-center justify-evenly">
        <p className={`${Marine.className} text-textcolor mt-[5px] hover:scale-[1.1] hover:rotate-[2deg] duration-200 cursor-pointer`}><a href="https://github.com/jrkoonce-invis?tab=repositories" target="_blank">Github</a></p>
        <p className={`${Marine.className} text-textcolor mt-[5px] hover:scale-[1.1] hover:rotate-[-2deg] duration-200 cursor-pointer`}><a href="https://www.linkedin.com/in/jameson-koonce-543292267/" target="_blank">Linkedin</a></p>
        <p className={`${Marine.className} text-textcolor mt-[5px] hover:scale-[1.1] hover:rotate-[1deg] duration-200 cursor-pointer`}>Contact</p>
      </div>

      <div className="flex flex-row gap-[15px]">

        {/* Photos */}
        <div className="w-[185px] h-[820px] flex flex-col gap-[15px]">

          <div className="flex flex-col items-center justify-evenly w-[185px] h-[400px] border-textcolor border-2 rounded-[50px] bg-secondary">

            <Image className="hover:scale-[1.05] duration-200 rounded-[50px] border-2 border-textcolor" src={headshot} alt="headshot" width={155} height={155}></Image>
            <Image className="hover:scale-[1.05] duration-200 rounded-[50px] border-2 border-textcolor" src={chicago} alt="headshot" width={155} height={170}></Image>

          </div>
          <div className="flex flex-col items-center justify-evenly w-[185px] h-[215px] border-textcolor border-2 rounded-[50px] bg-primary">

            <Image className="hover:scale-[1.05] duration-200 rounded-[50px] border-2 border-textcolor" src={UIUC} alt="headshot" width={155} height={170}></Image>

          </div>
          <div className="flex flex-col items-center justify-evenly w-[185px] h-[170px] border-textcolor border-2 rounded-[50px] bg-accent">
            
            <Image className="hover:scale-[1.05] duration-200 rounded-[50px] border-2 border-textcolor" src={quad} alt="headshot" width={155} height={155}></Image>
          </div>
        </div>

        {/* Main Content */}
        <div className="flex flex-col items-center gap-[15px]">

          {/* Jameson Koonce Area */}
          <div className={`animate-[popin_.2s_.2s_ease-in-out] border-textcolor w-[600px] h-[400px] bg-primary border-2 border-text rounded-[50px] flex flex-col gap-[10px] justify-center`}>
            <div className="w-[520px] ml-auto mr-auto mb-[20px]">
              <p className={`${Marine.className} text-textcolor text-6xl`}>Hey, I'm</p>
              <p className={`${Marine.className} text-textcolor text-6xl`}>Jameson Koonce</p>
            </div>
            <div className="w-[520px] ml-auto mr-auto">
              <p className={`${WalsheimBold.className} text-textcolor text-xl`}>I'm a computer engineering major at the University</p>
              <p className={`${WalsheimBold.className} text-textcolor text-xl`}>of Illinois. I love Software Engineering, Design, and</p>
              <p className={`${WalsheimBold.className} text-textcolor text-xl`}>Entrepreneurship! See some of my past and present</p>
              <p className={`${WalsheimBold.className} text-textcolor text-xl`}>work below, and on my GitHub above!</p>
            </div>
          </div>

          {/* Buttons */}
          <div className="border-textcolor w-[600px] h-[215px] grid grid-rows-2 grid-cols-1 gap-[15px]">
            <a href="https://www.linkedin.com/in/jameson-koonce-543292267/" target="_blank" className="animate-[popin_.2s_.3s_ease-in-out] grid border-textcolor cursor-pointer duration-200 hover:shadow-lg hover:border-[3] hover:rotate-1 hover:scale-[1.04] col-span-2 w-[600px] h-[100px] bg-secondary border-2 border-text rounded-tl-[50px] rounded-tr-[50px] rounded-bl-[10px] rounded-br-[10px]">
              <p className={`${Marine.className} text-textcolor text-4xl m-auto pt-[5px]`}>Experience</p>
            </a>
            <div className="flex flex-row gap-[15px] w-[600px]">
              <a href="/projects" className="animate-[popin_.2s_.3s_ease-in-out] grid text-3xl border-textcolor cursor-pointer duration-200 hover:shadow-lg hover:border-[3] hover:rotate-[-2deg] hover:scale-[1.05] w-[385px] h-[100px] bg-accent border-2 border-text rounded-tl-[10px] rounded-bl-[50px] rounded-br-[10px]">
                <p className={`${Marine.className} text-textcolor text-4xl m-auto pt-[5px]`}>Projects</p>
              </a>
              <a href="/ideas" className="animate-[popin_.2s_.4s_ease-in-out] grid text-3xl border-textcolor cursor-pointer duration-200 hover:shadow-lg hover:border-[3] hover:rotate-2 hover:scale-[1.05] w-[200px] h-[100px] bg-primary border-2 border-text rounded-tl-[100px] rounded-tr-[10px] rounded-bl-[10px] rounded-br-[50px]">
                <p className={`${Marine.className} text-textcolor text-4xl m-auto pt-[5px]`}>Ideas</p>
              </a>
            </div>
          </div>

          {/* Lower Section */}
          <div className="flex flex-row gap-[15px] mb-[15px]">
            <div className="animate-[popin_.2s_.4s_ease-in-out] grid border-textcolor w-[350px] h-[170px] bg-primary border-2 border-text rounded-[50px]">
              <p className={`${WalsheimBold.className} text-textcolor text-xl w-[250px] m-auto`}>I also like to try new things! Take a look at some of my highlights!</p>
            </div>
            <a href="highlights" className="animate-[popin_.2s_.5s_ease-in-out] cursor-pointer grid border-textcolor w-[235px] h-[170px] bg-secondary border-2 border-text rounded-[50px] hover:shadow-lg hover:border-[3] hover:rotate-[-2deg] hover:scale-[1.05] duration-200">
              <p className={`${Marine.className} text-textcolor text-4xl m-auto`}>Highlights</p>
            </a>
          </div>

        </div>

      </div>

    </div>
  );
}
