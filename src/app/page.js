'use client'

import React from "react";
import Image from 'next/image'
import localFont from 'next/font/local'

import { motion, useScroll } from "framer-motion"

import headshot from "../../public/assets/headshot.png"
import chicago from "../../public/assets/chicago.jpg"
import chicago_mobile from "../../public/assets/chicago_mobile.jpg"
import UIUC from "../../public/assets/UIUC.jpg"
import UIUC_mobile from "../../public/assets/UIUC_mobile.jpg"
import quad from "../../public/assets/quad.jpg"
import quad_mobile from "../../public/assets/quad_mobile.jpg"


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
      <div className="border-textcolor lg:max-w-[800px] max-w-[600px] w-[80vw] min-w-[320px] h-[50px] bg-accent border-2 rounded-[50px] flex flex-row items-center justify-center justify-evenly">
        <p className={`${Marine.className} text-textcolor mt-[5px] hover:scale-[1.1] hover:rotate-[2deg] duration-200 cursor-pointer`}><a href="https://github.com/jrkoonce-invis?tab=repositories" target="_blank">Github</a></p>
        <p className={`${Marine.className} text-textcolor mt-[5px] hover:scale-[1.1] hover:rotate-[-2deg] duration-200 cursor-pointer`}><a href="https://www.linkedin.com/in/jameson-koonce-543292267/" target="_blank">Linkedin</a></p>
        <p className={`${Marine.className} text-textcolor mt-[5px] hover:scale-[1.1] hover:rotate-[1deg] duration-200 cursor-pointer`}><a href="mailto:jamesonkoonce@gmail.com">Contact</a></p>
      </div>

      <div className="flex flex-row gap-[15px] h-fit">

        {/* Photos */}
        <div className="lg:block hidden">
          <div className="w-[185px] h-[804px] flex flex-col gap-[15px]">
            <div className="flex flex-col items-center justify-evenly w-[185px] h-[376px] border-textcolor border-2 rounded-[50px] bg-secondary">
              <Image placeholder="blur" className="hover:scale-[1.05] duration-200 rounded-[50px] border-2 border-textcolor" src={headshot} alt="headshot" width={145} height={145}></Image>
              <Image placeholder="blur" className="hover:scale-[1.05] duration-200 rounded-[50px] border-2 border-textcolor" src={chicago} alt="headshot" width={145} height={170}></Image>
            </div>
            <div className="flex flex-col items-center justify-evenly w-[185px] h-[215px] border-textcolor border-2 rounded-[50px] bg-primary">
              <Image placeholder="blur" className="hover:scale-[1.05] duration-200 rounded-[50px] border-2 border-textcolor" src={UIUC} alt="headshot" width={145} height={170}></Image>
            </div>
            <div className="flex flex-col items-center justify-evenly w-[185px] h-[168px] border-textcolor border-2 rounded-[50px] bg-accent">
              <Image placeholder="blur" className="hover:scale-[1.05] duration-200 rounded-[50px] border-2 border-textcolor" src={quad} alt="headshot" width={145} height={145}></Image>
            </div>
          </div>
        </div>

        {/* Main Content */}
        <div className="flex flex-col items-center gap-[15px]">

          {/* Jameson Koonce Area */}
          <div className={`p-[40px] pt-[60px] pb-[60px] duration-200 animate-[popin_.2s_.2s_ease-in-out] border-textcolor max-w-[600px] w-[80vw] min-w-[320px] bg-primary border-2 border-text rounded-[50px] flex flex-col gap-[10px] justify-center`}>
              <p className={`${Marine.className} text-textcolor text-6xl`}>Hey, I'm</p>
              <p className={`${Marine.className} text-textcolor text-6xl`}>Jameson Koonce</p>
              <p className={`${WalsheimBold.className} text-textcolor text-xl`}>I'm a computer engineering major at the University of Illinois. I love Software Engineering, Design, and Entrepreneurship! See some of my past and present work below, and on my GitHub above!</p>
          </div>

          {/* Mobile Photos */}
          <div className="sm:hidden block gap-[15px] grid grid-cols-2 max-w-[600px] w-[80vw] min-w-[320px] items-center justify-between">
            <Image placeholder="blur" className="hover:scale-[1.05] duration-200 rounded-[50px] border-2 border-textcolor" style={{objectFit: "contain"}} src={headshot} alt="headshot" width={290} height={290}></Image>
            <Image placeholder="blur" className="hover:scale-[1.05] duration-200 rounded-[50px] border-2 border-textcolor" style={{objectFit: "contain"}} src={chicago_mobile} alt="headshot" width={290} height={290}></Image>
          </div>

          {/* Buttons */}
          <div className="border-textcolor max-w-[600px] w-[80vw] min-w-[320px] h-[215px] grid grid-rows-2 grid-cols-1 gap-[15px]">
            <a href="https://www.linkedin.com/in/jameson-koonce-543292267/" target="_blank" className="animate-[popin_.2s_.3s_ease-in-out] duration-200 grid border-textcolor cursor-pointer hover:shadow-lg hover:border-[3] hover:rotate-1 hover:scale-[1.04] col-span-2 max-w-[600px] w-[80vw] min-w-[320px] h-[100px] bg-secondary border-2 border-text rounded-tl-[50px] rounded-tr-[50px] rounded-bl-[10px] rounded-br-[10px]">
              <p className={`${Marine.className} text-textcolor sm:text-4xl text-3xl m-auto pt-[5px]`}>Experience</p>
            </a>
            <div className="flex flex-row gap-[15px] max-w-[600px] w-[80vw] min-w-[320px]">
              <a href="/projects" className="animate-[popin_.2s_.3s_ease-in-out] grid text-3xl border-textcolor cursor-pointer duration-200 hover:shadow-lg hover:border-[3] hover:rotate-[-2deg] hover:scale-[1.05] w-[60%] h-[100px] bg-accent border-2 border-text rounded-tl-[10px] rounded-bl-[50px] rounded-br-[10px]">
                <p className={`${Marine.className} text-textcolor sm:text-4xl text-3xl m-auto pt-[5px]`}>Projects</p>
              </a>
              <a href="/ideas" className="animate-[popin_.2s_.4s_ease-in-out] grid text-3xl border-textcolor cursor-pointer duration-200 hover:shadow-lg hover:border-[3] hover:rotate-2 hover:scale-[1.05] md:w-[40%] w-[50%] h-[100px] bg-primary border-2 border-text rounded-tl-[100px] rounded-tr-[10px] rounded-bl-[10px] rounded-br-[50px]">
                <p className={`${Marine.className} text-textcolor sm:text-4xl text-3xl m-auto pt-[5px]`}>Ideas</p>
              </a>
            </div>
          </div>

          {/* More Mobile Photos */}
          <div className="sm:hidden block gap-[15px] grid grid-cols-2 max-w-[600px] w-[80vw] min-w-[320px] items-center justify-between">
            <Image className="hover:scale-[1.05] duration-200 rounded-[50px] border-2 border-textcolor" src={UIUC_mobile} alt="headshot" width={290} height={290}></Image>
            <Image className="hover:scale-[1.05] duration-200 rounded-[50px] border-2 border-textcolor" src={quad_mobile} alt="headshot" width={290} height={290}></Image>
          </div>

          {/* Lower Section */}
          <div className="flex flex-row gap-[15px] mb-[15px] max-w-[600px] w-[80vw] min-w-[320px] h-[215px] h-fit">
            <div className="animate-[popin_.2s_.4s_ease-in-out] grid border-textcolor p-[40px] h-fit w-[60%] bg-primary border-2 border-text rounded-[50px]">
              <p className={`${WalsheimBold.className} text-textcolor text-xl`}>I also like to try new things! Take a look at some of my highlights!</p>
            </div>
            <a href="highlights" className="animate-[popin_.2s_.5s_ease-in-out] cursor-pointer grid border-textcolor md:w-[40%] text-center w-[50%] h-[100%] bg-secondary border-2 border-text rounded-[50px] hover:shadow-lg hover:border-[3] hover:rotate-[-2deg] hover:scale-[1.05] duration-200">
              <p className={`${Marine.className} text-textcolor sm:text-4xl text-3xl m-auto rotate-90 sm:rotate-0`}>Gallery</p>
            </a>
          </div>

        </div>

      </div>

    </div>
  );
}
