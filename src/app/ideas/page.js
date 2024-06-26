'use client'

import React from "react";
import IdeaCard from "@/components/IdeaCard";
import localFont from 'next/font/local'

import { motion, useScroll, useMotionValueEvent, useTransform, Variants } from "framer-motion"

const Marine = localFont({ src: '../../../public/fonts/Marine.otf' });
const WalsheimBold = localFont({ src: '../../../public/fonts/WalsheimB.otf' });
const WalsheimUltraBold = localFont({ src: '../../../public/fonts/WalsheimUB.otf' });

const ideas = [
  <IdeaCard color="" width="0" img="eatsy.png" title="Eatsy - Food Platform" desc="I did not come up with this idea directly, but I helped a lot with the ideation process and built the designs. This app would allow users to rate and find local foods based on menu item, not restaruant. This can help you find cheap eats based on exactly the food you are interested in. Also, you would be able to see the reviews of individual food items to know if they are worth trying!" date="2024-5-12" />,
  <IdeaCard color="" width="0" img="none" title="Subscription Based Coworking Space" desc="This is a company that would design and create coworking spaces with great amenities for both the public and businesses. With a subscription, members would have access to ridiculously cheap eats/drinks, events, and personal spaces (for taking calls/meetings). This company would outreach to remote companies to see if their members would be interested in a subscription as a benefit of their company." date="2024-3-22" />,
  <IdeaCard color="" width="0" img="none" title="AI Sound Generator" desc="This is a software aimed at new/growing producers or artists who are still developing their own sound. A user can type a prompt such as 'soft bass with duration 5 seconds and echo in B pitch' and would recieve the desired sound. In this way, artists can play around and create new sounds rapidly without knowing exaclty how to create sounds" date="2024-2-10" />,

  <IdeaCard color="" width="0" img="none" title="Movie Score Web Scraper" desc="With this application, I want to make a webscraper that grabs every movie score from every big movie critic brand (Rotton Tomatoes, IMDB, Letterboxd, Metacritic, etc.) and compiles a total score. Users will also be able to see all of the scores all in one place in order to find the movie they want to watch! Maybe there could be a way to include the opinions of smaller but highly praised critics as well." date="2023-12-21" />,
  <IdeaCard color="" width="0" img="none" title="BAGS - Experimental Leather Bean Bag Company" desc="BAGS is a brand built around crafting high quality leather bean bags with fun designs. This would include typical round objects like globes, soccer balls, bowling balls, etc. along with other bright abstract patterns. The designs would be laser cut, hand sewn, and shipped to the customer after purchase. We could even make a metal stamp to brand our logo into the finished bags." date="2023-11-21" />,
  <IdeaCard color="" width="400" img="sticky.png" title="STICKY - Sticky Note Based Notes/TODO App" desc="This platform would be a new notes app organized into sticky notes where related notes would go onto the same sticky note. That being said, related sticky notes could be sorted into groups. For example, a student could have a sticky note for each class and all the classes would be a group. Then, they could have a school group, personal group, etc. At the same time, every note associated with a date becomes a TODO! It's that simple! I imgine a really intuitive 'flowy' UI where users can drag around sitcky notes throughout different groups and the other sticky notes would adjust accordingly. It's important to note that when I write 'notes' I mean little reminders not classnotes per say." date="2023-11-15" />,
  <IdeaCard color="" width="400" img="uglyboy.png" title="UGLYBOY - Men's Fashion Brand" desc="I envision a men's fashion brand with a focus on high quality tank tops. Specifically, the option to have regular, half-cropped, and full-cropped ribbed tank tops. Today, when it comes to tanks, only Hanes comes to mind. I think a focus on quality and the inclusion of cropped options could have its own market." date="2023-11-10" />,
  <IdeaCard color="" width="600" img="graffiti.png" title="Local Graffiti Game/Documentation" desc="Growing up in Chicago, I've always loved looking at graffiti, but outside of major cities, local graffiti isn't documented or even explored. What if there was a web application that documented all local graffiti pieces. It could show a map of the area, and point to the art in the area. Users would be able to sort by artist, location, size, and even report pieces that aren't on the platform. There could also be a cool extension where the platform doesn't show the exact location of the graffiti, but instead shows the general area (block) and users would have to go and seek out the art as a game! They could then check off the art in the app." date="2023-11-01" />,
]

export default function Home() {

  const cardElements = [];
  const latestIdeas = [];

  ideas.forEach((idea, i) => {
    if (i == 0) {
      latestIdeas.push(
        idea
      )
    } else {
      cardElements.push(
        <motion.div 
            key={i}
            className="w-fit"
            initial={{x: i % 2 == 0 ? 400 : -400}}
            whileInView={{x: 0,
                          transition: {
                            type: "spring",
                            bounce: 0.2,
                            duration: 0.8
                          }}}
            viewport={{ once: true, amount: 0 }}>
            <motion.div>
              {idea}
            </motion.div>
        </motion.div>
      )
    }
  })

  return (
    <div className="flex flex-col items-center gap-[15px] mt-[15px] mb-[15px] bg-background">

        {/* Header */}
        <div className="border-textcolor w-[800px] h-[50px] border-2 rounded-[50px] flex flex-row items-center justify-center justify-evenly">
            <p className={`${Marine.className} text-textcolor mt-[5px] hover:scale-[1.1] hover:rotate-[1deg] duration-200 cursor-pointer`}><a href="/">Home</a></p>
            <p className={`${Marine.className} text-textcolor mt-[5px] hover:scale-[1.1] hover:rotate-[2deg] duration-200 cursor-pointer`}><a href="https://github.com/jrkoonce-invis?tab=repositories" target="_blank">Github</a></p>
            <p className={`${Marine.className} text-textcolor mt-[5px] hover:scale-[1.1] hover:rotate-[-2deg] duration-200 cursor-pointer`}><a href="https://www.linkedin.com/in/jameson-koonce-543292267/" target="_blank">Linkedin</a></p>
        </div>

        <p className={`${Marine.className} w-[800px] text-6xl text-center mt-[20px]`}>Ideas</p>

        {/* Projects Below */}
        {latestIdeas}
        {cardElements}
        

    </div>
  );
}
