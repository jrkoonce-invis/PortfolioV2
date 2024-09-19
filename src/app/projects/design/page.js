// Base Imports
import React from "react";
import ProjectCard from "@/components/ProjectCard";
import localFont from 'next/font/local'
import Image from 'next/image'
import Video from 'next-video';

// Media Imports
import flyr_logo from "../../../../public/assets/flyr_logo.png";
import flyr_logo2 from "../../../../public/assets/flyr_logo2.png";
import ORGS1 from "../../../../public/assets/ORGS1.png";
import ORGS2 from "../../../../public/assets/ORGS2.png";

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

        <p className={`${Marine.className} text-textcolor max-w-[600px] w-[80vw] min-w-[320px] text-6xl text-center mt-[20px]`}>Design Portfolio</p>

        <p className={`${WalsheimBold.className} text-textcolor max-w-[600px] w-[80vw] min-w-[320px]`}>See my design portfolio below. These projects range from previous business ideas, campus organization work, to just flyers that I made for fun!</p>


        {/* Project Content */}
        <div className={`${WalsheimThin.className} text-textcolor text-md max-w-[800px] w-[80vw] min-w-[320px]`}>
            {/* <Image className="" src={`/assets/design/breakaleg/homepage.png`} alt="Image Unavailable" style={{objectFit: "contain"}} width={500} height={500} />
            <Image className="" src={`/assets/design/breakaleg/kevin.png`} alt="Image Unavailable" style={{objectFit: "contain"}} width={500} height={500} /> */}
            <div className="flex flex-col gap-[40px] w-full items-center mt-[20px]">
                
                {/* breakaleg */}
                <div className="justify-center items-center flex flex-col gap-[15px]">
                    <Image className="hover:scale-[1.05] duration-200" src={`/assets/design/breakaleg/logo.png`} alt="Image Unavailable" style={{objectFit: "contain"}} width={350} height={500} />
                    <Image className="hover:scale-[1.05] duration-200" src={`/assets/design/breakaleg/mock1.png`} alt="Image Unavailable" style={{objectFit: "contain"}} width={1000} height={500} />
                    <Image className="hover:scale-[1.05] duration-200" src={`/assets/design/breakaleg/mock2.png`} alt="Image Unavailable" style={{objectFit: "contain"}} width={1000} height={500} />                
                    <div className="flex flex-row gap-[20px] justify-center">
                        <Image className="hover:scale-[1.05] duration-200" src={`/assets/design/breakaleg/desktop.png`} alt="Image Unavailable" style={{objectFit: "contain"}} width={500} height={600} />
                        <Image className="hover:scale-[1.05] duration-200" src={`/assets/design/breakaleg/mobile.png`} alt="Image Unavailable" style={{objectFit: "contain"}} width={400} height={600} />
                    </div>
                </div>

                {/* Founders */}
                <div className="justify-center items-center flex flex-col gap-[20px]">
                    <Image className="hover:scale-[1.05] duration-200" src={`/assets/design/54.png`} alt="Image Unavailable" style={{objectFit: "contain"}} width={300} height={500} />
                    <div className="flex flex-row gap-[20px] justify-center">
                        <Image className="hover:scale-[1.05] duration-200" src={`/assets/design/teamlogos/Exploration1.png`} alt="Image Unavailable" style={{objectFit: "contain"}} width={700} height={600} />
                        <Image className="hover:scale-[1.05] duration-200" src={`/assets/design/teamlogos/Exploration2.png`} alt="Image Unavailable" style={{objectFit: "contain"}} width={300} height={600} />
                    </div>
                    <div className="flex flex-row gap-[20px] justify-center">
                        <Image className="hover:scale-[1.05] duration-200" src={`/assets/design/teamlogos/Group15.png`} alt="Image Unavailable" style={{objectFit: "contain"}} width={100} height={500} />
                        <Image className="hover:scale-[1.05] duration-200" src={`/assets/design/teamlogos/Group16.png`} alt="Image Unavailable" style={{objectFit: "contain"}} width={110} height={500} />
                        <Image className="hover:scale-[1.05] duration-200" src={`/assets/design/teamlogos/Group18.png`} alt="Image Unavailable" style={{objectFit: "contain"}} width={110} height={500} />
                    </div>
                    <div className="flex flex-row gap-[20px] justify-center">
                        <Image className="hover:scale-[1.05] duration-200" src={`/assets/design/info1.png`} alt="Image Unavailable" style={{objectFit: "contain"}} width={300} height={600} />
                        <Image className="hover:scale-[1.05] duration-200" src={`/assets/design/info2.png`} alt="Image Unavailable" style={{objectFit: "contain"}} width={300} height={600} />
                        <Image className="hover:scale-[1.05] duration-200" src={`/assets/design/info3.png`} alt="Image Unavailable" style={{objectFit: "contain"}} width={300} height={600} />
                    </div>
                </div>

                {/* Eatsy */}
                <div className="flex flex-row gap-[20px] justify-center">
                        <Image className="hover:scale-[1.05] duration-200" src={`/assets/design/Eatsy1.png`} alt="Image Unavailable" style={{objectFit: "contain"}} width={270} height={400} />
                        <Image className="hover:scale-[1.05] duration-200" src={`/assets/design/Eatsy2.png`} alt="Image Unavailable" style={{objectFit: "contain"}} width={260} height={400} />
                    </div>

                {/* haps. */}
                <Image className="hover:scale-[1.05] duration-200" src={`/assets/design/haps.png`} alt="Image Unavailable" style={{objectFit: "contain"}} width={300} height={500} />

                {/* Flyr + ORGS */}
                <div className="justify-center items-center flex flex-col">
                    <div className="flex flex-row gap-[20px] justify-center">
                        <Image className="hover:scale-[1.05] duration-200" src={`/assets/design/orgs1.png`} alt="Image Unavailable" style={{objectFit: "contain"}} width={400} height={500} />
                        <Image className="hover:scale-[1.05] duration-200" src={`/assets/design/orgs2.png`} alt="Image Unavailable" style={{objectFit: "contain"}} width={400} height={500} />
                    </div>
                    <Image className="hover:scale-[1.05] duration-200 mt-[20px]" src={`/assets/design/flyr.png`} alt="Image Unavailable" style={{objectFit: "contain"}} width={500} height={500} />
                </div>

                {/* Sends Flyer + UGLYBOY */}
                <div className="flex flex-row gap-[20px] justify-center">
                    <Image className="hover:scale-[1.05] duration-200" src={`/assets/design/sends.jpg`} alt="Image Unavailable" style={{objectFit: "contain"}} width={400} height={500} />
                </div>

                <Image className="hover:scale-[1.05] duration-200" src={`/assets/uglyboy.png`} alt="Image Unavailable" style={{objectFit: "contain"}} width={600} height={600} />

                {/* SOSOS */}
                <div className="flex flex-row gap-[20px] justify-center">
                    <Image className="hover:scale-[1.05] duration-200" src={`/assets/design/sosos1.png`} alt="Image Unavailable" style={{objectFit: "contain"}} width={400} height={500} />
                    <Image className="hover:scale-[1.05] duration-200" src={`/assets/design/sosos2.png`} alt="Image Unavailable" style={{objectFit: "contain"}} width={400} height={500} />
                </div>

                {/* Youtube */}
                <div className="flex flex-row gap-[20px] justify-center">
                    <Image className="hover:scale-[1.05] duration-200" src={`/assets/design/youtube1.jpg`} alt="Image Unavailable" style={{objectFit: "contain"}} width={300} height={500} />
                    <Image className="hover:scale-[1.05] duration-200" src={`/assets/design/youtube2.jpg`} alt="Image Unavailable" style={{objectFit: "contain"}} width={700} height={500} />
                </div>

            </div>


        </div>
        
    </div>
  );
}
