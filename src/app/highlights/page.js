'use client'

import { React, useRef, useState } from "react";
import localFont from 'next/font/local'
import Image from 'next/image'

import { motion, useScroll, useMotionValueEvent, useTransform, useSpring } from "framer-motion";

import ProjectCard from "@/components/ProjectCard";
import HighlightCard from "@/components/HighlightCard";
import HighlightCard2 from "@/components/HighlightCard2";
import HighlightCard3 from "@/components/HighlightCard3";


const Marine = localFont({ src: '../../../public/fonts/Marine.otf' });
const WalsheimBold = localFont({ src: '../../../public/fonts/WalsheimB.otf' });
const WalsheimUltraBold = localFont({ src: '../../../public/fonts/WalsheimUB.otf' });
const WalsheimThin = localFont({ src: '../../../public/fonts/WalsheimThin.otf' });


export default function Home() {

    const ref = useRef(null);

    const { scrollYProgress } = useScroll({ container: ref });
    const scaleY = useSpring(scrollYProgress, {
        stiffness: 1000,
        damping: 100,
        restDelta: 0.01
    });

  return (
    <motion.div className="flex flex-col items-center gap-[15px] mt-[15px] mb-[15px] bg-background">

        {/* Header */}
        <div className="border-textcolor w-[930px] h-[50px] bg-accent border-2 rounded-[50px] flex flex-row items-center justify-center justify-evenly">
            <p className={`${Marine.className} text-textcolor mt-[5px] hover:scale-[1.1] hover:rotate-[1deg] duration-200 cursor-pointer`}><a href="/">Home</a></p>
            <p className={`${Marine.className} text-textcolor mt-[5px] hover:scale-[1.1] hover:rotate-[2deg] duration-200 cursor-pointer`}><a href="https://github.com/jrkoonce-invis?tab=repositories" target="_blank">Github</a></p>
            <p className={`${Marine.className} text-textcolor mt-[5px] hover:scale-[1.1] hover:rotate-[-2deg] duration-200 cursor-pointer`}><a href="https://www.linkedin.com/in/jameson-koonce-543292267/" target="_blank">Linkedin</a></p>
        </div>

        <p className={`${Marine.className} w-[600px] text-6xl text-center mt-[20px]`}>Highlights</p>
        <p className={`${WalsheimBold.className} w-[400px] text-center`}>See some of my hobbies below!</p>

        {/* Progress Bar */}
        {/* <motion.div className="fixed origin-center w-[10px] bg-primary top-0 left-0 bottom-0" style={{ scaleY }} /> */}

        {/* <div ref={ref} className="w-fit h-[500px] rounded-[50px] overflow-scroll scroll-auto no-scrollbar flex flex-col border-[2px] border-textcolor"> */}
            {/* Custom Highlights Section */}
            <motion.div className="m-[50px] mt-[0px] mb-[0px] w-[930px] grid grid-cols-3 gap-[15px]">

                <motion.div className={`col-span-2 duration-200 h-[300px] hover:shadow-lg border-textcolor w-[615px] pt-[40px] pb-[40px] bg-${"primary"} border-2 border-text rounded-[50px] flex flex-col gap-[10px] justify-center`}>
                    <motion.div className="w-[515px] ml-auto mr-auto flex flex-row gap-[10px]">
                        <motion.div className="w-[515px] ml-auto mr-auto">
                            <p className={`${Marine.className} text-textcolor text-3xl`}>{"Rock Climbing"}</p>
                            <p className={`${WalsheimThin.className} text-textcolor text-lg mb-[5px]`}>{"My favorite outdoor activity is rock climbing! I'm trying to climb V8 before the end of the year. I do most of my training at Urbana Boulders in Champaign but I also do a lot on my own with a Tension Board. I've only been outdoors once, but I'm looking to take a trip out to Colorodo as I improve!"}</p>
                        </motion.div>
                    </motion.div>
                </motion.div>

                <Image className="hover:scale-[1.05] duration-200 rounded-[50px]" src={`/assets/${"CLIMB1.JPG"}`} alt="Image Unavailable" style={{objectFit: "contain"}} width={300} height={300} />
                <Image className="hover:scale-[1.05] duration-200 rounded-[50px]" src={`/assets/${"CLIMB2.JPG"}`} alt="Image Unavailable" style={{objectFit: "contain"}} width={300} height={300} />
                <Image className="hover:scale-[1.05] duration-200 rounded-[50px]" src={`/assets/${"CLIMB3.jpg"}`} alt="Image Unavailable" style={{objectFit: "contain"}} width={300} height={300} />

                <div className={`row-span-2 duration-200 w-[300px] h-[615px] hover:shadow-lg border-textcolor pt-[40px] pb-[40px] bg-${"secondary"} border-2 border-text rounded-[50px] flex flex-col gap-[10px] justify-center`}>
                    <div className="w-[300px] ml-auto mr-auto p-[40px]">
                        <p className={`${Marine.className} text-textcolor text-3xl`}>{"Design"}</p>
                        <p className={`${WalsheimThin.className} text-textcolor text-lg mb-[5px]`}>{"I'm really interested in design and I want to explore it a lot more. Whenever I work on my own projects, I try to design them myself to learn more. I recently have been playing around with Figma in order to design more often and wow it's so simple and fun to use. You can see some of my designs throughout this site and the site itself! A smooth user experience is such a beautiful thing."}</p>
                    </div>
                </div>
                
                <motion.div className={`col-span-2 duration-200 h-[300px] hover:shadow-lg border-textcolor w-[615px] pt-[40px] pb-[40px] bg-${"accent"} border-2 border-text rounded-[50px] flex flex-col gap-[10px] justify-center`}>
                    <div className="w-[515px] ml-auto mr-auto flex flex-row gap-[10px]">
                        <div className="w-[515px] ml-auto mr-auto">
                            <p className={`${Marine.className} text-textcolor text-3xl`}>{"National Parks"}</p>
                            <p className={`${WalsheimThin.className} text-textcolor text-lg mb-[5px]`}>{"For the last two summers me and some friends have done a 10 day road trip out west! In our last trip we hit the Badlands, the Grand Tetons, Yellowstone, and Glaicer. I want to see all the National Parks one day. If you have any outdoor adventures, feel free to share your stories!"}</p>
                        </div>
                    </div>
                </motion.div>
                
                <Image className="hover:scale-[1.05] duration-200 rounded-[50px]" src={`/assets/${"HIKE1.JPG"}`} alt="Image Unavailable" style={{objectFit: "contain"}} width={300} height={300} />
                <Image className="hover:scale-[1.05] duration-200 rounded-[50px]" src={`/assets/${"HIKE2.JPG"}`} alt="Image Unavailable" style={{objectFit: "contain"}} width={300} height={300} />
                <Image className="hover:scale-[1.05] duration-200 rounded-[50px]" src={`/assets/${"HIKE3.JPG"}`} alt="Image Unavailable" style={{objectFit: "contain"}} width={300} height={300} />
                
                <motion.div className={`row-span-2 col-span-2 duration-200 w-[615px] h-[615px] hover:shadow-lg border-textcolor pt-[40px] pb-[40px] bg-${"primary"} border-2 border-text rounded-[50px] flex flex-col gap-[10px] justify-center`}
                    >
                    <div className="ml-auto mr-auto p-[40px]">
                        <p className={`${Marine.className} text-textcolor text-3xl`}>{"Movies"}</p>
                        <p className={`${WalsheimThin.className} text-textcolor text-lg mb-[5px]`}>{"Every summer, my family and our family friends, meet to make a movie (15-20 min). This tradition has happened ever since I was a little, so there's even movies with me acting as a baby! Every year, we take the movie more and more seriously so I love watching and analyzing movies so we can improve. A part of me thinks if my major didn't exsist, I may have even gone into film. I also have a personal top 10 list, and you can find some of them below (no particular order of course):"}</p>
                        <div className="flex flex-row gap-[10px] items-center ml-auto mr-auto w-[500px]">
                            <ul className={`${WalsheimThin.className} mt-[10px] text-textcolor text-lg mb-[5px] w-[300px]`}>
                                <p>- Good Will Hunting</p>
                                <p>- The French Dispatch</p>
                                <p>- The Dark Knight</p>
                                <p>- Rango</p>
                                <p>- Spiderman: Into the Spiderverse</p>
                                <p>- It's a Wonderful Life</p>
                            </ul>
                            <Image className="rounded-[10px]" src={`/assets/${"MOVIEHALF.jpg"}`} alt="Image Unavailable" style={{objectFit: "contain"}} width={140} height={140} />
                            <Image className="rounded-[10px]" src={`/assets/${"MOVIEOTHERHALF.jpg"}`} alt="Image Unavailable" style={{objectFit: "contain"}} width={140} height={140} />
                        </div>
                    </div>
                </motion.div>

                <Image className="hover:scale-[1.05] duration-200 rounded-[50px]" src={`/assets/${"MOVIE2.JPG"}`} alt="Image Unavailable" style={{objectFit: "contain"}} width={300} height={300} />
                <Image className="hover:scale-[1.05] duration-200 rounded-[50px]" src={`/assets/${"MOVIE3.JPG"}`} alt="Image Unavailable" style={{objectFit: "contain"}} width={300} height={300} />

            </motion.div>
        {/* </div> */}
    </motion.div>
  );
}
