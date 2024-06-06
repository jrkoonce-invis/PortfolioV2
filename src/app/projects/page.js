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


        {/* Projects Below */}
        <ProjectCard color="secondary" link="/projects/flyr" image="flyr_logo.png" title="Flyr Platform" desc="Founded a startup called Flyr which is creating a platform to allow students to see all of the flyers on campus at the University of Illinois in one place." date="2023-12-10" />
        <ProjectCard color="primary" link="/projects/graffiti" title="Graffiti Map Web App" desc="Created a site that documents the work of a graffiti artist 'ZHERO' at the University of Illinois through an ineractive game for students on campus." date="2023-10-21" />
        <ProjectCard color="accent" link="/projects/54platform" image="54logo.png" title="Founders' 54 Platform" desc="A mobile app built with react native to help streamline the team creation process at a live startup pitch event at the University of Illinois with 40+ participants." date="2023-03-20" />
        <ProjectCard color="secondary" link="/projects/ninjafrog" title="Ninja Frog Python Platformer" desc="A sidescrolling platformer built with python and the pygame game engine. Fully functional with animations, game states, and a tile-based map system." date="2020-06-28" />
        <ProjectCard color="primary" link="/projects/management" title="Project Management Platform" desc="A project state management web app built using Go and p5.js" date="2020-06-06" />

    </div>
  );
}
