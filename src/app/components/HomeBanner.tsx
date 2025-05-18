"use client";
import React, { useRef } from "react";
import { DotLottieReact } from "@lottiefiles/dotlottie-react";
// import Image from "next/image";
// import "./styles.css";
import TextGradientScroll from "./TextGradientScroll";
import MotionWrapper from "./MotionWrapper";

function HomeBanner() {
  const textRef = useRef(null);

  return (
    <div className="container">
      <div className="h-screen flex items-center justify-center">
        <div className="grid grid-cols-1 md:grid-cols-2">
          {/* Left section with shrinking gray background */}
          <div className="relative order-2 md:order-1 my-10">
            <div
              className="absolute top-0 left-0 h-full"
              // style={{
              //   background: "#333333", // Gray background
              //   width: divWidth, // Dynamically shrinking width
              // }}
            />
            <div
              className="relative z-10 p-5 max-w-[650px] font-medium"
              ref={textRef}
              // style={{
              //   color: "#000000", // Text color
              // }}
            >
              <MotionWrapper
                initial={{ opacity: 0, scale: 0 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{
                  duration: 0.4,
                  scale: { type: "spring", visualDuration: 0.4, bounce: 0.5 },
                }}
              >
                <h1 className="name font-bold">
                  <span className="banner-greeting">Hi, I&apos;m </span>
                  Abhijit&nbsp;Singh.
                </h1>
              </MotionWrapper>
              <h2 className="text-2xl my-8">
                <MotionWrapper
                  initial={{ opacity: 0, scale: 0 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{
                    duration: 0.6,
                    scale: { type: "spring", visualDuration: 0.4, bounce: 0.5 },
                  }}
                >
                  <TextGradientScroll
                    text="I am a  Software Engineer with about 5 years of experience
                  in Frontend Development."
                  />
                </MotionWrapper>
              </h2>
              <h2 className="text-2xl">
                <MotionWrapper
                  initial={{ opacity: 0, scale: 0 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{
                    duration: 0.8,
                    scale: { type: "spring", visualDuration: 0.4, bounce: 0.5 },
                  }}
                >
                  <TextGradientScroll
                    text="I don't compromise on performance, user experience or code
                quality."
                  />
                </MotionWrapper>
              </h2>
            </div>
          </div>

          {/* Right section with animation */}
          <DotLottieReact
            src="https://lottie.host/d8f5abec-0a89-4017-a64e-3abc6912615c/jvxYECnl2c.lottie"
            loop
            autoplay
            className="order-1 md:order-2"
          />
        </div>
      </div>
    </div>
  );
}

export default HomeBanner;
