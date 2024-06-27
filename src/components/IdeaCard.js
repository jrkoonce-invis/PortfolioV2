'use client'

import React from "react";
import Image from 'next/image'
import localFont from 'next/font/local'

const Marine = localFont({ src: '../../public/fonts/Marine.otf' });
const WalsheimBold = localFont({ src: '../../public/fonts/WalsheimB.otf' });
const WalsheimUltraBold = localFont({ src: '../../public/fonts/WalsheimUB.otf' });
const WalsheimThin = localFont({ src: '../../public/fonts/WalsheimThin.otf' });

const IdeaCard = ({ width, img, color, title, desc, date }) => {

    const [imagePath, setImagePath] = React.useState("");

    React.useEffect(() => {
        if (img !== "none") {
            import(`../../public/assets/${img}`).then(image => setImagePath(image.default));
        }
    }, [img]);

    return (
        <div className="flex flex-row gap-[15px]">   

            {/* Main Text */}
            <div className={`sm:pl-[40px] sm:pr-[40px] pl-[30px] pr-[30px] duration-200 cursor-default hover:border-dashed border-textcolor max-w-[800px] w-[80vw] min-w-[320px] h-fit pt-[40px] pb-[40px] bg-${color} border-2 border-text rounded-[50px] flex flex-col gap-[10px] justify-center`}>
                
                <p className={`${Marine.className} text-textcolor text-3xl`}>{title}</p>

                {img && imagePath != "" &&
                    <Image src={imagePath} alt="demo" width={width} height={400} className="ml-auto mr-auto mt-[15px] mb-[15px]"></Image>
                }

                <p className={`${WalsheimThin.className} text-textcolor text-lg text-wrap`}>{desc}</p>
                <p className={`${WalsheimBold.className} text-textcolor text-lg`}>{date}</p>
            </div>
        </div>
    );
}

export default IdeaCard