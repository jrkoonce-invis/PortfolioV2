// Base Imports
import React from "react";
import ProjectCard from "@/components/ProjectCard";
import localFont from 'next/font/local'
import Image from 'next/image'

// Media Imports
import GraffitiImage from "../../../../public/assets/graffiti.png";

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

        <p className={`${Marine.className} text-textcolor max-w-[600px] w-[80vw] min-w-[320px] text-6xl text-center mt-[20px]`}>Graffiti Map Web App</p>

        {/* Project Content */}
        <div className={`${WalsheimThin.className} text-textcolor text-md max-w-[800px] w-[80vw] min-w-[320px]`}>
            <div>Project Github can be <a href="https://github.com/jrkoonce-invis/Grafiti-Map" className="underline" target="_blank">found here</a></div>

            <ProjectHeading text="Project Goal" /> This platform will act as a little game where users can see and try to spot all of the graffiti around campus at the University of Illinois. Users will see a map of all the general locations of graffiti and be able to check them off inidividually. After a grifiti location is selected, a 3d model of the object the grafiti is on will be displayed (as a sort of hint). Users will also be able to sort by "type" and location of graffiti on the map.

            <ProjectHeading text="Demo (Current Version)" />
            <Image src={GraffitiImage} alt="Image Unavailable" width={800}></Image>

            <ProjectHeading text="Technologies" />
            <ul className="flex flex-col gap-[2px]">
                <li>- Frontend -{'>'} <a href="https://react.dev/" target="_blank" className="underline">ReactJS</a> is the main driver for the frontend. Many components are borrowed from <a href="https://mui.com/joy-ui/getting-started/" target="_blank" className="underline">MUI React Components</a> (JOY UI Core). The map element is an extension of <a href="https://leafletjs.com/" target="_blank" className="underline">LeafletJS</a> for React named <a href="https://react-leaflet.js.org/" target="_blank" className="underline">React Leaflet</a>.</li>
                <li>- Backend -{'>'} <a href="https://flask.palletsprojects.com/en/3.0.x/" target="_blank" className="underline">Flask</a> is the main driver for the backend. It is a data meditaor between the database and the frontened.</li>
                <li>- Database -{'>'} <a href="https://www.mongodb.com/" target="_blank" className="underline">MongoDB</a> is the database of choice. It houses the grafiti location, type, and model data.</li>
            </ul>

            <ProjectHeading text="Next Steps" />
            <ul className="flex flex-col gap-[2px]">
                <li>- Collect Graffiti data around campus</li>
                <li>- Add 3d model display functionality (look at <a href="https://threejs.org/" target="_blank" className="underline">ThreeJS</a>)</li>
                <li>- MongoDB database integration</li>
                <li>- Deployment + Advertisement</li>
            </ul>
        </div>
        
    </div>
  );
}
