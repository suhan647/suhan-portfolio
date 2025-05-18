/* eslint-disable @typescript-eslint/no-unused-vars */
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import MdWork from "public/Work.svg";
import Image from "next/image";

interface ExperienceProps {
  index: number;
  company?: string;
  position?: string;
  desc: string[];
  institute?: string;
  degree?: string;
  duration: string;
  startDate: string;
  endDate: string;
}

export default function ExperienceCard({
  index,
  company,
  position,
  desc,
  institute,
  degree,
  startDate,
  endDate,
}: ExperienceProps) {
  const [ref, inView] = useInView({
    threshold: 0.5,
    triggerOnce: true,
  });

  const cardVariants = {
    hidden: { x: index % 2 === 0 ? 20 : -20, opacity: 0 },
    visible: {
      x: 0,
      opacity: 1,
      transition: { duration: 0.6, ease: "easeInOut" },
    },
  };

  const card = {
    company,
    position,
    desc,
    institute,
    degree,
    startDate,
    endDate,
  };
  return (
    <div
      className={`mb-6 md:mb-8 flex items-center w-full right-timeline`}
    >
      <span className="z-20 flex items-center order-1 justify-center w-6 h-6 md:w-9 md:h-9 rounded-full ring-4 md:ring-8 ring-white dark:ring-grey-800 bg-white">
        {company && (
          <Image
            alt="work"
            src={MdWork}
            width={40}
            height={40}
            className="text-base md:text-xl text-cyan-600"
          />
        )}
      </span>

      <motion.div
        ref={ref}
        variants={cardVariants}
        initial="hidden"
        animate={inView ? "visible" : "hidden"}
        className="order-1 w-full ml-3 md:ml-0 p-3 md:px-4 md:py-4"
      >
        <BashCard {...card} />
      </motion.div>
    </div>
  );
}

interface CartProps {
  company?: string;
  institute?: string;
  position?: string;
  desc: string[];
  degree?: string;
  startDate: string;
  endDate: string;
}

export function BashCard({
  company,
  institute,
  desc,
  degree,
  position,
  startDate,
  endDate,
}: CartProps) {
  return (
    <aside className="bg-[#e07bde1d] backdrop-blur-none shadow-lg text-white p-6 rounded-lg w-full font-mono">
      <div className="flex justify-between items-center">
        <div className="flex space-x-2 text-red-500">
          <div className="w-3 h-3 rounded-full bg-red-500"></div>
          <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
          <div className="w-3 h-3 rounded-full bg-green-500"></div>
        </div>
        <p className="text-sm">{`${startDate}-${endDate}`}</p>
      </div>
      <div className="mt-4">
        <h3 className="text-green-400 text-2xl font-bold mb-4">
          $ {institute || company}
        </h3>
        <p className="text-cyan-400 text-1xl font-bold">
          {" "}
          {degree && `~ ${degree}`}
        </p>
        <ul className="ml-2">
          {desc &&
            desc.map((x, index) => (
              <li className="text-white list-disc" key={index}>
                {x}
              </li>
            ))}
        </ul>
      </div>
    </aside>
  );
}
