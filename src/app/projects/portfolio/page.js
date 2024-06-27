// Base Imports
import React from "react";
import ProjectCard from "@/components/ProjectCard";
import localFont from 'next/font/local'
import Image from 'next/image'

// Media Imports
import ffuse1 from "../../../../public/assets/54use1.JPG";
import ffuse2 from "../../../../public/assets/54use2.JPG";

// Font Imports
const Marine = localFont({ src: '../../../../public/fonts/Marine.otf' });
const WalsheimBold = localFont({ src: '../../../../public/fonts/WalsheimB.otf' });
const WalsheimThin = localFont({ src: '../../../../public/fonts/WalsheimThin.otf' });
const WalsheimUltraBold = localFont({ src: '../../../../public/fonts/WalsheimUB.otf' });

// Component Imports
import ProjectHeading from "../../../components/ProjectHeading.js";

export default function Home() {

  return (
    <div className="flex flex-col items-center gap-[15px] mt-[15px] mb-[15px] bg-background">

        {/* Header */}
        <div className="border-textcolor max-w-[600px] w-[80vw] min-w-[320px] h-[50px] bg-accent border-2 rounded-[50px] flex flex-row items-center justify-center justify-evenly">
            <p className={`${Marine.className} text-textcolor mt-[5px] hover:scale-[1.1] hover:rotate-[1deg] duration-200 cursor-pointer`}><a href="/projects">Back</a></p>
            <p className={`${Marine.className} text-textcolor mt-[5px] hover:scale-[1.1] hover:rotate-[2deg] duration-200 cursor-pointer`}><a href="https://github.com/jrkoonce-invis?tab=repositories" target="_blank">Github</a></p>
            <p className={`${Marine.className} text-textcolor mt-[5px] hover:scale-[1.1] hover:rotate-[-2deg] duration-200 cursor-pointer`}><a href="/projects/graffiti">Next</a></p>
        </div>

        <p className={`${Marine.className} text-textcolor max-w-[600px] w-[80vw] min-w-[320px] text-6xl text-center mt-[20px]`}>Personal Portfolio Site (This very website!)</p>

        {/* Project Content */}
        <div className={`${WalsheimThin.className} text-textcolor text-md max-w-[800px] w-[80vw] min-w-[320px]`}>
            <ProjectHeading text="Project Goal" />
            I had a personal portfolio website already built with <a href="https://www.11ty.dev/" target="_blank" className="underline">eleventy</a> and all my projects were already on the site. However, I thought the site felt too basic and didn't do enough to show off who I really was. I wanted the site to show me, not just my resume! Hopefully you can agree it's done just that! I wanted a site completely designed by me using all the new technologies that I wanted to learn.

            <ProjectHeading text="Features" />
            <ul className="flex flex-col gap-[2px]">
            <li>- Responsivity -{'>'} Every page of the site can be viewed on any device size.</li>
            <li>- Modularity -{'>'} Built with the future in mind, the combination of react and tailwind allows me to easily adjust components and themes of the page.</li>
            </ul>

            <ProjectHeading text="Technologies" />
            <ul className="flex flex-col gap-[2px]">
            <li>- <a href="https://nextjs.org/" target="_blank" className="underline">NextJS</a> -{'>'} This site breathes with NextJS and is even hosted on <a href="https://vercel.com/" target="_blank" className="underline">Vercel</a>! I learned to love my project structure when using Next and will definetly do more projects with this stack!</li>
            <li>- <a href="https://tailwindcss.com/" target="_blank" className="underline">Tailwind</a> -{'>'} I've built project with tailwind before, but using it is always a good time. It's so fast and I really got the hang of it when building this site.</li>
            </ul>
        </div>
        
    </div>
  );
}
