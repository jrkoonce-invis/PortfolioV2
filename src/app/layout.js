import localFont from 'next/font/local'
import "./globals.css";

import { Analytics } from "@vercel/analytics/react"
import { SpeedInsights } from "@vercel/speed-insights/next"

const Marine = localFont({ src: '../../public/fonts/Marine.otf' });
const WalsheimBold = localFont({ src: '../../public/fonts/WalsheimB.otf' });
const WalsheimUltraBold = localFont({ src: '../../public/fonts/WalsheimUB.otf' });

export const metadata = {
  title: "Jameson Koonce",
  description: "Portfolio Site of the Ages",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      {/* <body className={Marine.className}>{children}</body> */}
      <body>{children}</body>
    </html>
  );
}
