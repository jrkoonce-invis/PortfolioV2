'use client'

import { React, useRef, useState } from "react";
import localFont from 'next/font/local'
import Image from 'next/image'

import { motion, useScroll, useMotionValueEvent, useTransform, useSpring } from "framer-motion";

import CLIMB1 from "../../../public/assets/CLIMB1.jpeg"
import CLIMB2 from "../../../public/assets/CLIMB2.jpeg"
import CLIMB3 from "../../../public/assets/CLIMB3.jpeg"
import HIKE1 from "../../../public/assets/HIKE1.jpeg"
import HIKE2 from "../../../public/assets/HIKE2.jpeg"
import HIKE3 from "../../../public/assets/HIKE3.jpeg"
import MOVIE2 from "../../../public/assets/MOVIE2.jpeg"
import MOVIE3 from "../../../public/assets/MOVIE3.jpeg"
import MOVIEHALF from "../../../public/assets/MOVIEHALF.jpeg"
import MOVIEOTHERHALF from "../../../public/assets/MOVIEOTHERHALF.jpeg"


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
        <div className="border-textcolor max-w-[600px] w-[80vw] min-w-[320px] h-[50px] bg-accent border-2 rounded-[50px] flex flex-row items-center justify-center justify-evenly">
            <p className={`${Marine.className} text-textcolor mt-[5px] hover:scale-[1.1] hover:rotate-[1deg] duration-200 cursor-pointer`}><a href="/">Home</a></p>
            <p className={`${Marine.className} text-textcolor mt-[5px] hover:scale-[1.1] hover:rotate-[2deg] duration-200 cursor-pointer`}><a href="https://github.com/jrkoonce-invis?tab=repositories" target="_blank">Github</a></p>
            <p className={`${Marine.className} text-textcolor mt-[5px] hover:scale-[1.1] hover:rotate-[-2deg] duration-200 cursor-pointer`}><a href="https://www.linkedin.com/in/jameson-koonce-543292267/" target="_blank">Linkedin</a></p>
        </div>

        <p className={`${Marine.className} max-w-[600px] w-[80vw] min-w-[320px] text-6xl text-center mt-[20px]`}>Highlights</p>
        <p className={`${WalsheimBold.className} max-w-[400px] w-[80vw] min-w-[320px] text-center`}>See some of my hobbies below!</p>

            {/* Custom Highlights Section */}
            <motion.div className="m-[50px] mt-[0px] mb-[0px] lg:w-[930px] md:w-[615px] w-[300px] grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-[15px]">

                <motion.div className={`col-span-1 duration-200 row-span-2 md:row-span-1 md:col-span-2 p-[40px] md:h-[300px] h-[615px] hover:shadow-lg border-textcolor md:w-[615px] w-[300px] pt-[40px] pb-[40px] bg-${"primary"} border-2 border-text rounded-[50px] flex flex-col gap-[10px] justify-center`}>
                    <p className={`${Marine.className} text-textcolor text-3xl`}>{"Rock Climbing"}</p>
                    <p className={`${WalsheimThin.className} text-textcolor text-lg mb-[5px]`}>{"My favorite outdoor activity is rock climbing! I'm trying to climb V8 before the end of the year. I do most of my training at Urbana Boulders in Champaign but I also do a lot on my own with a Tension Board. I've only been outdoors once, but I'm looking to take a trip out to Colorodo as I improve!"}</p>
                </motion.div>

                <Image placeholder="blur" className="row-span-1 col-span-1 hover:scale-[1.05] duration-200 rounded-[50px]" src={CLIMB1} alt="Image Unavailable" style={{objectFit: "contain"}} width={300} height={300} />
                <Image placeholder="blur" className="row-span-1 col-span-1 hover:scale-[1.05] duration-200 rounded-[50px]" src={CLIMB2} alt="Image Unavailable" style={{objectFit: "contain"}} width={300} height={300} />
                <Image placeholder="blur" className="row-span-1 col-span-1 hover:scale-[1.05] duration-200 rounded-[50px]" src={CLIMB3} alt="Image Unavailable" style={{objectFit: "contain"}} width={300} height={300} />

                <div className={`row-span-2 duration-200 w-[300px] h-[615px] hover:shadow-lg border-textcolor pt-[40px] pb-[40px] bg-${"secondary"} border-2 border-text rounded-[50px] flex flex-col gap-[10px] justify-center`}>
                    <div className="w-[300px] ml-auto mr-auto p-[40px]">
                        <p className={`${Marine.className} text-textcolor text-3xl`}>{"Design"}</p>
                        <p className={`${WalsheimThin.className} text-textcolor text-lg mb-[5px]`}>{"I'm really interested in design and I want to explore it a lot more. Whenever I work on my own projects, I try to design them myself to learn more. I recently have been playing around with Figma in order to design more often and wow it's so simple and fun to use. You can see some of my designs throughout this site and the site itself! A smooth user experience is such a beautiful thing."}</p>
                    </div>
                </div>

                

                <Image placeholder="blur" className="md:block lg:hidden hidden hover:scale-[1.05] duration-200 rounded-[50px]" src={HIKE3} alt="Image Unavailable" style={{objectFit: "contain"}} width={300} height={300} />

                <motion.div className={`duration-200 col-span-1 row-span-2 md:row-span-1 md:col-span-2 p-[40px] md:h-[300px] h-[615px] hover:shadow-lg border-textcolor md:w-[615px] w-[300px] pt-[40px] pb-[40px] bg-${"accent"} border-2 border-text rounded-[50px] flex flex-col gap-[10px] justify-center`}>
                    <p className={`${Marine.className} text-textcolor text-3xl`}>{"National Parks"}</p>
                    <p className={`${WalsheimThin.className} text-textcolor text-lg mb-[5px]`}>{"For the last two summers me and some friends have done a 10 day road trip out west! In our last trip we hit the Badlands, the Grand Tetons, Yellowstone, and Glaicer. I want to see all the National Parks one day. If you have any outdoor adventures, feel free to share your stories!"}</p>
                </motion.div>
                
                <Image placeholder="blur" className="hover:scale-[1.05] duration-200 rounded-[50px]" src={HIKE1} alt="Image Unavailable" style={{objectFit: "contain"}} width={300} height={300} />
                <Image placeholder="blur" className="hover:scale-[1.05] duration-200 rounded-[50px]" src={HIKE2} alt="Image Unavailable" style={{objectFit: "contain"}} width={300} height={300} />
                <Image placeholder="blur" className="md:hidden lg:block block hover:scale-[1.05] duration-200 rounded-[50px]" src={HIKE3} alt="Image Unavailable" style={{objectFit: "contain"}} width={300} height={300} />
                
                <motion.div className={`p-[40px] md:row-span-2 md:col-span-2 row-span-3 col-span-1 duration-200 md:w-[615px] md:h-[615px] w-[300px] h-[930px] hover:shadow-lg border-textcolor pt-[40px] pb-[40px] bg-${"primary"} border-2 border-text rounded-[50px] flex flex-col gap-[10px] justify-center`}
                    >
                    <p className={`${Marine.className} text-textcolor text-3xl`}>{"Movies"}</p>
                    <p className={`${WalsheimThin.className} text-textcolor text-lg mb-[5px]`}>{"Every summer, my family and our family friends, meet to make a movie (15-20 min). This tradition has happened ever since I was a little, so there's even movies with me acting as a baby! Every year, we take the movie more and more seriously so I love watching and analyzing movies so we can improve. A part of me thinks if my major didn't exsist, I may have even gone into film. I also have a personal top 10 list, and you can find some of them below (no particular order of course):"}</p>
                    <div className="flex md:flex-row flex-col gap-[10px] items-center ml-auto mr-auto">
                        <ul className={`${WalsheimThin.className} mt-[10px] text-textcolor text-lg mb-[5px]`}>
                            <p>- Good Will Hunting</p>
                            <p>- The French Dispatch</p>
                            <p>- The Dark Knight</p>
                            <p>- Rango</p>
                            <p>- Spiderman: Into the Spiderverse</p>
                            <p>- It's a Wonderful Life</p>
                        </ul>
                        <Image placeholder="blur" className="rounded-[10px] md:block hidden" src={MOVIEHALF} alt="Image Unavailable" style={{objectFit: "contain"}} width={140} height={140} />
                        <Image placeholder="blur" className="rounded-[10px] md:block hidden" src={MOVIEOTHERHALF} alt="Image Unavailable" style={{objectFit: "contain"}} width={140} height={140} />
                    </div>
                </motion.div>

                <Image placeholder="blur" className="hover:scale-[1.05] duration-200 rounded-[50px]" src={MOVIE2} alt="Image Unavailable" style={{objectFit: "contain"}} width={300} height={300} />
                <Image placeholder="blur" className="hover:scale-[1.05] duration-200 rounded-[50px]" src={MOVIE3} alt="Image Unavailable" style={{objectFit: "contain"}} width={300} height={300} />

            </motion.div>
    </motion.div>
  );
}
