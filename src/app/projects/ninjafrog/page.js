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

        <p className={`${Marine.className} text-textcolor max-w-[600px] w-[80vw] min-w-[320px] text-6xl text-center mt-[20px]`}>Ninja Frog Python Platformer</p>

        {/* Project Content */}
        <div className={`${WalsheimThin.className} text-textcolor text-md max-w-[800px] w-[80vw] min-w-[320px]`}>
            <div>Project Github can be <a href="https://github.com/jrkoonce-invis/Pygame-Platformer" target="_blank" className="underline">found here</a></div>

            <ProjectHeading text="Project Goal" />
            The goal of this project was to build a sidescrolling platformer in python. I really wanted to try and build as much at possible without using outside source material to figure out common game development porblems on my own. In this way, I built the game object system, animation system, collision, and game state system without the pygame library! 

            <ProjectHeading text="Demo" />
            <video width="600" controls>
                <source src="/ninjafrog.mp4" type="video/mp4" />
            </video>

            <ProjectHeading text="Features" />
            <ul className="flex flex-col gap-[2px]">
            <li>- Graphics and custom animation system -{'>'} possible through the <a href="https://pixelfrog-assets.itch.io/pixel-adventure-1" target="_blank" className="underline">pixel adventure asset</a> pack</li>
            <li>- Camera movement to allow for sidescrolling gameplay</li>
            <li>- Tile-based level editor -{'>'} compatible with the <a href="https://www.mapeditor.org/" target="_blank" className="underline">Tiled level editor</a></li>
            <li>- Custom game state management system -{'>'} allows for menu, pause, lose states and more!</li>
            <li>- Game object system with 6+ game object types and 25+ possible object propterties</li>
            </ul>

            <ProjectHeading text="Technologies" />
            <ul className="flex flex-col gap-[2px]">
            <li>- Game Engine -{'>'} built using the <a href="https://www.pygame.org/news" target="_blank" className="underline">Pygame</a> python game engine</li>
            <li>- Map Parser -{'>'} tile map parsing is done with the help of the <a href="https://pytmx.readthedocs.io/en/latest/" target="_blank" className="underline">PyTMX</a> map loader library</li>
            </ul>
        </div>
        
    </div>
  );
}
