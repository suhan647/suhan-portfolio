export interface Experience {
  company: string;
  position: string;
  startDate: string;
  endDate: string;
  desc: string[];
}
export interface Education {
  institute: string;
  degree: string;
  startDate: string;
  endDate: string;
}

export const experiences: Experience[] = [
  {
    company: "Tech Q Ware Technologies",
    position: "Junior Frontend Developer",
    startDate: "06/2022",
    endDate: "07/2023",
    desc: [
      "Developed and maintained enterprise-level applications including 'Learning Gem' and 'PulseESG', contributing to improved user engagement and application performance",
      "Created reusable component libraries and implemented consistent UI/UX patterns across multiple projects",
      "Worked with cross-functional teams to integrate RESTful APIs and implement data management solutions",
      "Implemented performance optimizations including code splitting and lazy loading, contributing to faster load times",
      "Participated in code reviews and followed established coding standards to maintain high code quality"
    ],
  },
  {
    company: "Hbits Proptech Private Limited",
    position: "Junior Software Engineer",
    startDate: "Feb 2024",
    endDate: "Feb 2025",
    desc: [
      "Contributed to the development of key modules, working with frontend and backend teams to deliver features on time",
      "Developed the Frontend for in-house Lead Management System(LMS), helping eliminate the need for LeadSquared and saving the company ₹20 lakhs in subscription costs annually",
      "Took ownership of feature development and bug fixes, ensuring smooth user experience",
      "Collaborated with team members to maintain high-quality, scalable code"
    ],
  }
];

interface SocialsType {
  name: string;
  profile_link: string;
  icon: string;
}

export const Socials: SocialsType[] = [
  {
    name: "Github",
    profile_link: "https://github.com/suhan647?tab=repositories",
    icon: "/github-icon.svg",
  },
  {
    name: "LinkedIn",
    profile_link: "https://www.linkedin.com/in/suhan-ahmed-5978951ba/",
    icon: "/linkedin-icons.svg",
  },
];

export const nav_items: string[] = [
  "home",
  // "about",
  "skills",
  "projects",
  "experience",
  // "coding",
  "contact",
];
