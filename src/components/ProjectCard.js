import React from "react";
import localFont from 'next/font/local'
import Image from 'next/image'

const Marine = localFont({ src: '../../public/fonts/Marine.otf' });
const WalsheimBold = localFont({ src: '../../public/fonts/WalsheimB.otf' });
const WalsheimUltraBold = localFont({ src: '../../public/fonts/WalsheimUB.otf' });
const WalsheimThin = localFont({ src: '../../public/fonts/WalsheimThin.otf' });


const ProjectCard = ({ color, title, desc, date, image, link }) => {
    return (
        <div className="flex flex-row gap-[20px] pointer-cursor">
            <a href={link}>
                <div className={`duration-200 hover:shadow-lg hover:border-[3] hover:scale-[1.05] cursor-pointer border-textcolor max-w-[600px] w-[80vw] min-w-[320px] h-fit pt-[40px] pb-[40px] bg-${color} border-2 border-text rounded-[50px] flex flex-col gap-[10px] justify-center`}>
                    <div className="sm:ml-[40px] sm:mr-[40px] ml-[30px] mr-[30px] sm:flex-row flex flex-col gap-[10px] items-center">
                        <div className="ml-auto mr-auto">
                            <p className={`${Marine.className} text-textcolor text-3xl`}>{title}</p>
                            <p className={`${WalsheimThin.className} text-textcolor text-lg mb-[5px]`}>{desc}</p>
                            <p className={`${WalsheimBold.className} text-textcolor text-lg`}>{date}</p>
                        </div>

                        {image &&
                            <Image className="" src={`/assets/${image}`} alt="Image Unavailable" style={{objectFit: "contain"}} width={140} height={140} />
                            
                        }

                    </div>
                </div>
            </a>
        </div>
    );
}

export default ProjectCard