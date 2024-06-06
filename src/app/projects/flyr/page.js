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
        <div className="border-textcolor w-[600px] h-[50px] bg-accent border-2 rounded-[50px] flex flex-row items-center justify-center justify-evenly">
            <p className={`${Marine.className} text-textcolor mt-[5px] hover:scale-[1.1] hover:rotate-[1deg] duration-200 cursor-pointer`}><a href="/projects">Back</a></p>
            <p className={`${Marine.className} text-textcolor mt-[5px] hover:scale-[1.1] hover:rotate-[2deg] duration-200 cursor-pointer`}><a href="https://github.com/jrkoonce-invis?tab=repositories" target="_blank">Github</a></p>
            <p className={`${Marine.className} text-textcolor mt-[5px] hover:scale-[1.1] hover:rotate-[-2deg] duration-200 cursor-pointer`}><a href="/projects/graffiti">Next</a></p>
        </div>

        <p className={`${Marine.className} text-textcolor w-[600px] text-6xl text-center mt-[20px]`}>Flyr Platform</p>

        {/* Project Content */}
        <div className={`${WalsheimThin.className} text-textcolor text-md w-[800px]`}>
            <div>Project Github can be <a href="https://github.com/jrkoonce-invis/FLYR" className="underline" target="_blank">found here</a></div>

            <ProjectHeading text="What is Flyr?" />
            Flyr is a student run startup at the University of Illinois that is more effectivly connecting students with opportunities on campus! We are a team of 4 that started at <a href="https://www.foundersillinois.org/54" target="_blank">Founders' 54</a> event in the Seibel Center for Design. Since then, we have been deadset on launching our Flyr Platform project during the Spring '24 semester.
            <div class="flex justify-center gap-4">
            <Image src={flyr_logo} alt="Image Unavailable" width={200} height={200}></Image>
            <Image src={flyr_logo2} alt="Image Unavailable" width={200} height={200}></Image>
            </div>

            <ProjectHeading text="What is the Flyr Platform?" />
            The Flyr Platform will be a web application where students can see all of the flyers on campus in one place. At the University of Illinois, students largely find out about new events and opportunities through word of mouth and social media. That being said, U of I also has an impressive flyer culture which we want to help maintain! Therefore, our platform will allow organizations, startups, the University itslef, and local businesses to advertise events, deals, and opportunities to students in the form of flyers! Students will also be able to put in their preferences (entreprenurship, consulting, sports, etc.) in order to receive a weekly email roundup of new opportunies relevant to them on campus.

            <ProjectHeading text="Market Research" />
            Before we started developing, we really wanted to make sure that students (other than our team) had a need/want for this platform on campus. We completed numerous individual interviews, but found that it was challenging to get a definitive answer representative for the entire student-body. Therefore, we created the ORGS project: We created an alter-ego brand named ORGS with similar goals to Flyr and placed flyers around campus advertising our platform to "see all the events on campus in one place" (see samples below). From this experiment, we received 100+ flyer scans and 60+ multichoice responses in one week. Knowing that when the Flyr platform releases, we will advertise in many more ways than simply flyers, we are confident and excited about developing the platform!

            <div class="flex flex-row gap-4 flex-wrap w-full m-[20px] justify-center">
            <Image src={ORGS1} alt="Image Unavailable" width={300} height={300} />
            <Image src={ORGS2} alt="Image Unavailable" width={300} height={300} />
            </div>

            <ProjectHeading text="Flyr Platform Details" />
            <ul className="flex flex-col gap-[2px]">
                <li>- Users will be able to sort flyers by catagory, location, and time</li>
                <li>- When an organization posts a flyer, it doesn't go directly on the platform. Instead, it goes to an admin dahsboard where the community admin can accept or delete the flyer</li>
                <li>- From the admin dashboard, community admins can also manage posted flyers and contact organizations</li>
                <li>- Each posted flyers is associated with a date (in which it will get archived)</li>
            </ul>

            <ProjectHeading text="Demo (Current Version)" />
            {/* <video width="800" controls>
                <source src="/assets/FLYR_DEMO.mp4" type="video/mp4" />
                Your browser does not support the video tag.
            </video> */}
            <Video src="/FLYR_DEMO.mp4" />


            <ProjectHeading text="Technologies" />
            <ul className="flex flex-col gap-[2px]">
                <li>- Frontend -{">"} <a href="https://react.dev/" target="_blank" className="underline">ReactJS</a> is the main driver for the frontend along with Tailwind CSS. Many components are borrowed from <a href="hhttps://daisyui.com/" target="_blank" className="underline">Daisy UI</a> and their Tailwind components</li>
                <li>- Backend -{">"} <a href="https://flask.palletsprojects.com/en/3.0.x/" target="_blank" className="underline">Flask</a> is the main driver for the backend. It is a data meditaor between the database and the frontened.</li>
                <li>- Database -{">"} <a href="https://www.mongodb.com/" target="_blank" className="underline">MongoDB</a> is the database of choice. It houses flyer image data, points of contact data (name, email), along with potential event data (location, time), etc.</li>
                <li>- Authentication -{">"} Authentication for the admin-side site is done through <a href="https://auth0.com/" target="_blank" className="underline">Auth0</a>. This allows us to securly manage (delete, accept, etc) the posts on the platform.</li>
            </ul>
        </div>
        
    </div>
  );
}
