import Image from "next/image";
import { motion } from "framer-motion";
import React from "react";
import { Tilt } from "react-tilt";
import Link from "next/link";
import { slideInFromLeft } from "./HeroBanner";
import LinkImage from "public/Link.svg";

interface Props {
  name: string;
  description: string;
  tags: string[];
  image_url: string;
  source_code_url?: string;
  live_link?: string;
  rel?: string;
}

const ProjectCard = ({
  name,
  description,
  image_url,
  tags,
  live_link,
  rel = "",
}: Props) => {
  return (
    <motion.div variants={slideInFromLeft(0.5)} className="flex">
      <Tilt
        options={{
          max: 45,
          scale: 1,
          speed: 450,
        }}
        className="bg-[#3fcfff17] border-transparent p-5 rounded-2xl w-full flex flex-col"
      >
        <div className="relative w-full h-[230px]">
          <Image
            src={image_url}
            alt={name}
            width={1000}
            height={1000}
            className="w-full h-full object-cover rounded-md z-10"
          />
          {live_link && (
            <div className="flex justify-end">
              <Link
                href={live_link}
                target="_blank"
                className="black-gradient w-20 h-20 rounded-full flex justify-center items-center cursor-pointer"
                rel={rel}
              >
                <Image
                  src={LinkImage}
                  width={20}
                  height={20}
                  alt="demo"
                  className="text-white fill-white"
                />
              </Link>
            </div>
          )}
        </div>

        <div className="mt-5 grow">
          <h3 className="text-white font-bold text-[24px]">{name}</h3>
          <p className="mt-2 text-secondary text-[14px]">{description}</p>
        </div>

        <div className="mt-4 flex flex-wrap gap-2">
          {tags.map((tag, index) => (
            <span
              key={index}
              className="cursor-pointer inline-flex items-center rounded-md bg-[#ff29f41f] px-2 py-1 text-xs font-medium text-slate-300 ring-1 ring-inset ring-blue-700/10"
            >
              {tag}
            </span>
          ))}
        </div>
      </Tilt>
    </motion.div>
  );
};

export default ProjectCard;
