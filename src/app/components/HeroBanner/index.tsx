import Image from "next/image";
import wavingHand from "public/waving-hand.png";
import MotionWrapper from "../MotionWrapper";
import Globe from "./Globe";

export function slideInFromLeft(delay: number) {
  return {
    hidden: { x: -100, opacity: 0 },
    visible: {
      x: 0,
      opacity: 1,
      transition: {
        delay: delay,
        duration: 0.5,
      },
    },
  };
}

const HeroBanner = () => {
  return (
    <div
      className="container h-screen flex items-center min-h-screen"
      id="home"
    >
      <div className="h-full w-full flex flex-col gap-5 justify-center m-auto text-start">
        <MotionWrapper
          hidden={{ x: -100, opacity: 0 }}
          visible={{
            x: 0,
            opacity: 1,
            transition: {
              delay: 0.5,
              duration: 0.5,
            },
          }}
          variants={slideInFromLeft(0.8)}
          className="flex flex-col gap-6 mt-6 text-6xl font-bold text-white max-w-[600px] w-auto h-auto"
        >
          <div className="flex items-center gap-1">
            <Image
              unoptimized={true}
              alt="waving-hand"
              width={30}
              height={30}
              src={wavingHand}
            />
            <p className="text-lg md:text-xl mt-2 md:mt-1.5">Hey</p>
          </div>
          <h1 className="text-4xl md:text-6xl font-bold relative">
            I&apos;m{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-cyan-500">
              Suhan Ahmed
            </span>
          </h1>
          <h2 className="flex flex-col items-center md:items-center gap-1.5 text-lg md:text-2xl">
            I am a Software Engineer with about 2 years of experience in
            Frontend Development.
          </h2>
        </MotionWrapper>

        <h3 className="text-gray-400 my-5 max-w-[600px] text-lg md:text-2xl">
          Committed to delivering exceptional performance, seamless user
          experience, and high-quality, maintainable code without compromise.
        </h3>
        {/* <motion.a
          variants={slideInFromLeft(1)}
          href={Resume_url}
          target="_blank"
          className="py-2 button-primary text-center text-white cursor-pointer rounded-lg max-w-[200px]"
        >
          Resume
        </motion.a> */}
      </div>
      <div className="w-full h-full lg:flex lg:justify-center lg:items-center hidden">
        <div className="flex flex-row items-center justify-center h-screen md:h-auto relative w-full">
          <div className="max-w-7xl mx-auto w-full relative h-full md:h-[40rem] px-4">
            {/* <div className="absolute w-full bottom-0 inset-x-0 h-40 bg-gradient-to-b pointer-events-none select-none from-transparent dark:to-black to-white z-40" /> */}
            <div className="absolute w-full -bottom-20 h-72 md:h-full z-10 flex">
              <Globe />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroBanner;
