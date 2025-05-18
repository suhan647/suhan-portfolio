"use client";

import { projects } from "@/app/constants/projects";
import SectionWrapper from "@/app/components/SectionWrapper";
import ProjectCard from "./ProjectCard";

export default function FeaturedProjects() {
  return (
    <SectionWrapper id="projects" className="mx-4 md:mx-0 min-h-screen">
      <h2 className="section-heading">
        Featured Projects
      </h2>

      <div className="flex justify-center items-center">
        <div className="w-full md:w-[80%] grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-7">
          {projects.map((project, index) => (
            <ProjectCard key={index} {...project} />
          ))}
        </div>
      </div>
    </SectionWrapper>
  );
}
