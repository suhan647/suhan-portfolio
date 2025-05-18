"use client";

import { experiences } from "../constants";
import ExperienceCard from "./ExperienceCard";
import SectionWrapper from "./SectionWrapper";

export default function WorkExperience() {
  return (
    <SectionWrapper id="experience" className="min-h-screen">
      <h2 className="section-heading">Experience</h2>

      <div className="container">
        <div className="relative">
          <div className="left-4  absolute border-opacity-20 border-gray-400 dark:border-grey-800 h-full border"></div>

          {experiences.map((x, index: number) => (
            <ExperienceCard duration={""} key={index} {...x} index={index} />
          ))}
        </div>
      </div>
    </SectionWrapper>
  );
}
