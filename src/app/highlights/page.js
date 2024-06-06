import React from "react";
import ProjectCard from "@/components/ProjectCard";
import localFont from 'next/font/local'

const Marine = localFont({ src: '../../../public/fonts/Marine.otf' });
const WalsheimBold = localFont({ src: '../../../public/fonts/WalsheimB.otf' });
const WalsheimUltraBold = localFont({ src: '../../../public/fonts/WalsheimUB.otf' });

import ProjectHeading from "@/components/ProjectHeading";

export default function Home() {

  return (
    <div className="flex flex-col items-center gap-[15px] mt-[15px] mb-[15px] bg-background">

        {/* Header */}
        <div className="border-textcolor w-[600px] h-[50px] bg-accent border-2 rounded-[50px] flex flex-row items-center justify-center justify-evenly">
            <p className={`${Marine.className} text-textcolor mt-[5px] hover:scale-[1.1] hover:rotate-[1deg] duration-200 cursor-pointer`}><a href="/">Home</a></p>
            <p className={`${Marine.className} text-textcolor mt-[5px] hover:scale-[1.1] hover:rotate-[2deg] duration-200 cursor-pointer`}><a href="https://github.com/jrkoonce-invis?tab=repositories" target="_blank">Github</a></p>
            <p className={`${Marine.className} text-textcolor mt-[5px] hover:scale-[1.1] hover:rotate-[-2deg] duration-200 cursor-pointer`}><a href="https://www.linkedin.com/in/jameson-koonce-543292267/" target="_blank">Linkedin</a></p>
        </div>

        <p className={`${Marine.className} w-[600px] text-6xl text-center mt-[20px]`}>Projects</p>
        <p className={`${WalsheimBold.className} w-[400px]`}>Find all these projects and more at my <a href="https://github.com/jrkoonce-invis/" className="underline" target="_blank">Github here.</a> Select a project to learn more!</p>
        
    </div>
  );
}
