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

        <p className={`${Marine.className} text-textcolor max-w-[600px] w-[80vw] min-w-[320px] text-6xl text-center mt-[20px]`}>Project Management Platform</p>

        {/* Project Content */}
        <div className={`${WalsheimThin.className} text-textcolor text-md max-w-[800px] w-[80vw] min-w-[320px]`}>
            <div>Project Github can be <a href="https://github.com/jrkoonce-invis/State-Management-Web-App/tree/master/" target="_blank" className="underline">found here</a></div>

            <ProjectHeading text="Project Goal" />
            The goal of this project was to learn about web development and how to build a complete full-stack application. I wanted to build a project with a dynamic UI frontend that displays project tasks which don't disappear when the user refreshes the page.

            <ProjectHeading text="Demo" />
            <video width="800" controls>
                <source src="/statemanagement.mp4" type="video/mp4" />
            </video>

            <ProjectHeading text="Golang Backend" />
            <ul className="flex flex-col gap-[2px]">
                <li>- serves index.html in the p5-ui/ folder</li>
                <li>- api at *domain*/api serves data in the form of a post (simply text and a number)</li>
                <li>- api allows for POST, DELETE, and GET requests</li>
                <li>- existing posts stored in Mongodb database</li>
            </ul>

            <ProjectHeading text="P5 Frontend (p5-ui/)" />
            <ul className="flex flex-col gap-[2px]">
                <li>- With gui, interacts with the bacend in the following ways:</li>
                <li>&emsp;- POST request -{'>'} adds post</li>
                <li>&emsp;- DELETE request -{'>'} deletes post</li>
                <li>&emsp;- GET request -{'>'} gets posts</li>
            </ul>

            <ProjectHeading text="Session Management" />
            <ul className="flex flex-col gap-[2px] mb-[5px]">
                <li>- Keeps tracks of users exsisting posts with cookies for session management</li>
                <li>- Cookies store userid which are associated with tasks in the MongoDB database</li>
            </ul>

            Note: Cookies are temporary and are just used for proof of concept. If I were to add to
            this project, I would create a more permenant login system to store user project data

            <ProjectHeading text="Technologies" />
            <ul className="flex flex-col gap-[2px]">
                <li>- Frontend -{'>'} <a href="https://p5js.org/" target="_blank" className="underline">p5.js</a> is the main driver for the frontend, an open-source javascript library for interactive development</li>
                <li>- Backend -{'>'} <a href="https://go.dev/" target="_blank" className="underline">Go</a> is the main driver for the backend</li>
                <li>- Database -{'>'} <a href="https://www.mongodb.com/" target="_blank" className="underline">MongoDB</a> is the database of choice. It houses users and their associated tasks</li>
            </ul>
        </div>
        
    </div>
  );
}
