import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import StarsCanvas from "./components/StarsCanvas";
import Navbar from "./components/Navbar";
import { Analytics } from "@vercel/analytics/react"

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  authors: [
    { name: "Suhan Ahmed", url: "my-deployed url" },
  ],
  title: "Suhan Ahmed | Software Engineer",
  description:
    "Software Engineer with expertise in web development crafting simple, efficient, and user-friendly applications.",
  openGraph: {
    title: "Suhan Ahmed | Software Engineer",
    description:
      "Software Engineer with expertise in web development crafting simple, efficient, and user-friendly applications.",
    url: "my-deployed url",
    siteName: "Suhan Ahmed",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Suhan Ahmed | Software Engineer",
    description:
      "Software Engineer with expertise in web development crafting simple, efficient, and user-friendly applications.",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased bg-[#030014]`}
      >
        <StarsCanvas />
        <Navbar />
        {children}
        <Analytics />
      </body>
    </html>
  );
}
