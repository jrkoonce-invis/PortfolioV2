// Base Imports
import React from "react";
import ProjectCard from "@/components/ProjectCard";
import localFont from 'next/font/local'
import Image from 'next/image'

// Media Imports
import fs from "../../../../public/assets/fs.png";
import snano from "../../../../public/assets/snano.png";

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

        <p className={`${Marine.className} text-textcolor max-w-[600px] w-[80vw] min-w-[320px] text-6xl text-center mt-[20px]`}>x86 Linux Kernel</p>

        {/* Project Content */}
        <div className={`${WalsheimThin.className} text-textcolor text-md max-w-[800px] w-[80vw] min-w-[320px]`}>
            <div>Project Github can be <a href="https://github.com/jrkoonce-invis/Pygame-Platformer" target="_blank" className="underline">found here</a></div>

            <ProjectHeading text="Overview" />
            The final project for ECE: 391 (Operating Systems) at the Univeristy of Illinois was to build a Linux Kernel in a group. My group decided to go above an beyond to place 2nd in the design competition in a class of 60+ teams. This class led to many late nights and my first ever all nighter and this is my attempt to make me think it was worth it!

            <ProjectHeading text="Some Technicals" />
            This was a huge project with a ton of instruction and documentation, but I'm going to focus on the filesystem of our kernel, as this was largely my responsibility. A filesystem is just a way that we interpret a mass of data. Data, on this low of a level is just all right next to eachother (nothing like files and folder just yet). Our kernel implemented a readable and writeable filesystem based on the following format:
            <Image src={fs} alt="Image Unavailable" width={400} height={400}></Image>
            This way of organzing the filesystem makes things dynamic, allowing files to have different lengths, adding the (potential) ability to remove files, and not destroy memory with random gaps. Here, we organize the data in "data blocks," 4kB in size each. We then originate our filesystem with a "Boot Block" telling us how many files there are in the current system, how many data blocks they take up, and where to find each file. After that, each file is associated with an "inode," telling us where to find the data blocks for it's respective file. This is useful because then we don't need the data for each file all in a row, creating more dynamic memory. Finally, we have the data blocks!

            <ProjectHeading text="Kernel in Action" />
            <Image src={snano} alt="Image Unavailable" width={400} height={400}></Image>

            In this project, I also made a bunch of mini commands to help users interact with the filesystem! Above, we can see the "snano" command (simple nano) where to user can write to files at a specific location as shown! I also, implemented the "touch" command allowing users to add files into the filesystem.


            <ProjectHeading text="Overall Kernel Features" />
            <ul className="flex flex-col gap-[2px]">
            <li>- Graphics and custom animation system -{'>'} possible through the <a href="https://pixelfrog-assets.itch.io/pixel-adventure-1" target="_blank" className="underline">pixel adventure asset</a> pack</li>
            <li>- Camera movement to allow for sidescrolling gameplay</li>
            <li>- Tile-based level editor -{'>'} compatible with the <a href="https://www.mapeditor.org/" target="_blank" className="underline">Tiled level editor</a></li>
            <li>- Custom game state management system -{'>'} allows for menu, pause, lose states and more!</li>
            <li>- Game object system with 6+ game object types and 25+ possible object propterties</li>
            </ul>
        </div>
        
    </div>
  );
}
