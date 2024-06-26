import React from "react";
import localFont from 'next/font/local'
import Image from 'next/image'

const Marine = localFont({ src: '../../public/fonts/Marine.otf' });
const WalsheimBold = localFont({ src: '../../public/fonts/WalsheimB.otf' });
const WalsheimUltraBold = localFont({ src: '../../public/fonts/WalsheimUB.otf' });
const WalsheimThin = localFont({ src: '../../public/fonts/WalsheimThin.otf' });


const HighlightCard2 = ({ color, title, desc, image1, image2, image3 }) => {
    return (
        <div className="flex flex-row gap-[20px]">
            <div className={`duration-200 w-[300px] h-[620px] hover:shadow-lg border-textcolor pt-[40px] pb-[40px] bg-${color} border-2 border-text rounded-[50px] flex flex-col gap-[10px] justify-center`}>
                <div className="w-[300px] ml-auto mr-auto p-[40px]">
                    <p className={`${Marine.className} text-textcolor text-3xl`}>{title}</p>
                    <p className={`${WalsheimThin.className} text-textcolor text-lg mb-[5px]`}>{desc}</p>
                </div>
            </div>
            {/* <div className="flex flex-col gap-[20px]">
                {image1 &&
                    <Image className="hover:scale-[1.05] duration-200 rounded-[50px]" src={`/assets/${image1}`} alt="Image Unavailable" style={{objectFit: "contain"}} width={300} height={300} />
                }
                {image2 &&
                    <Image className="hover:scale-[1.05] duration-200 rounded-[50px]" src={`/assets/${image2}`} alt="Image Unavailable" style={{objectFit: "contain"}} width={300} height={300} />
                }
            </div>

            <div>
                {image3 &&
                    <Image className="hover:scale-[1.05] duration-200 rounded-[50px]" src={`/assets/${image3}`} alt="Image Unavailable" style={{objectFit: "contain"}} width={300} height={300} />
                }
            </div> */}
        </div>
    );
}

export default HighlightCard2