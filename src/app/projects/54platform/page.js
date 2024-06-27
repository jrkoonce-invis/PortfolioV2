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

        <p className={`${Marine.className} text-textcolor max-w-[600px] w-[80vw] min-w-[320px] text-6xl text-center mt-[20px]`}>54 Event Platform</p>

        {/* Project Content */}
        <div className={`${WalsheimThin.className} text-textcolor text-md max-w-[800px] w-[80vw] min-w-[320px]`}>
            <div>Project Github can is private under the Founders organization</div>

            <ProjectHeading text="Project Goal" />
            <a href="https://www.foundersillinois.org/" target="_blank">Founders</a> is the largest entrepreneurship organization at the University of Illinois. Founders' 54 is a weekend long event where students have 54 hours to form teams, develop projects, and pitch to a panel of judges to win prizes. This app acts as a digital witeboard of ideas during the team formation stage of the event. In this way, participants can see all of the potential ideas in one place as they network and form teams!

            <ProjectHeading text="Demo" />
            <video width="300" controls>
                <source src="/54demo.mp4" type="video/mp4" />
            </video>

            <ProjectHeading text="Technologies" />
            <ul className="flex flex-col gap-[2px]">
                <li>- <a href="https://reactnative.dev/" target="_blank" className="underline">React Native</a> -{'>'} the framework used for making our app native and crossplatform</li>
                <li>- <a href="https://nodejs.org/en/" target="_blank" className="underline">Node.js</a> -{'>'} the driver for the backend with endpoints allowing for idea posts, deletes, and edits</li>
                <li>- <a href="https://www.mongodb.com/" target="_blank" className="underline">MongoDB</a> -{'>'} datbase of choice. Houses the idea names, descriptions and associated user data</li>
            </ul>

            <ProjectHeading text="Usage Highlights!!" />
            <div class="flex flex-row gap-4 flex-wrap w-full m-[20px] justify-center">
                <Image src={ffuse1} alt="Image Unavailable" width={390} height={390} />
                <Image src={ffuse2} alt="Image Unavailable" width={390} height={390} />
            </div>
        </div>
        
    </div>
  );
}
