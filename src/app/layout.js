import { JetBrains_Mono } from "next/font/google";
import "./globals.css";

const jetbrainsMono = JetBrains_Mono({
  subsets: ["latin"],
  weight: ["300", "400", "700", "800"],
  variable: "--font-jetbrains-mono",
});

export const metadata = {
  title: "Jameson Koonce",
  description: "Jameson Koonce",
  icons: {
    icon: [
      { url: "/ladybug/favicon-16.png", sizes: "16x16", type: "image/png" },
      { url: "/ladybug/favicon-32.png", sizes: "32x32", type: "image/png" },
      { url: "/ladybug/icon-512.png", sizes: "512x512", type: "image/png" },
    ],
    apple: "/ladybug/apple-touch-icon.png",
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={jetbrainsMono.variable}>{children}</body>
    </html>
  );
}
