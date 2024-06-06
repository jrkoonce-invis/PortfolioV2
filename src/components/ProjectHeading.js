import React from "react";
import localFont from 'next/font/local'

const Marine = localFont({ src: '../../public/fonts/Marine.otf' });
const WalsheimBold = localFont({ src: '../../public/fonts/WalsheimB.otf' });
const WalsheimUltraBold = localFont({ src: '../../public/fonts/WalsheimUB.otf' });

const ProjectHeading = ({ text }) => {
    return (
        <p className={`${WalsheimBold.className} text-3xl mt-[20px] mb-[10px]`}>{text}</p>
    );
}

export default ProjectHeading