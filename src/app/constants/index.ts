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
    company: "Hbits Proptech Private Limited",
    desc: [
      "Spearheaded the development of key modules, breaking down tasks in Jira, coordinating with frontend and backend teams, and ensuring on-time feature delivery.",
      "Independently developed the Frontend for in-house Lead Management System(LMS), eliminating the need for LeadSquared and saving the company ₹20 lakhs in subscription costs annually.",
      "Developed a WhatsApp Business Chat feature, enabling Relationship Managers to engage with customers more efficiently.",
      "Consistently took ownership of high-impact features and bug fixes, ensuring faster releases and smooth user experience.",
      "Led frontend development, mentoring team members and ensuring high-quality, scalable code.",
    ],
    startDate: "Feb 2024",
    endDate: "Feb 2025",
    position: "Software Engineer",
  },
  {
    company: "Radiansys Technologies Pvt. Ltd",
    desc: [
      "Led development of high-impact projects. Established robust processes and best practices to maintain code quality across all company projects, fostering scalability & minimizing development time.",
      "Collaborate with stakeholders to understand their requirements & manage product development stories.",
      "Engaged with potential clients during interviews, effectively addressing their technical questions to secure projects and drive business growth for the company.",
    ],
    startDate: "Apr 2022",
    endDate: "Feb 2024",
    position: "Frontend Team Lead",
  },
  {
    company: "Radiansys Technologies Pvt. Ltd",
    desc: [
      "Worked on & delivered multiple projects(7). Each with unique requirements that advanced my knowledge of React, TypeScript & many other JS libraries.",
      "Set up reusable templates for company's React apps & implemented best React dev practices & imparted the same knowledge to the team.",
    ],
    startDate: "Sept 2021",
    endDate: "Mar 2022",
    position: "Software Engineer",
  },
  {
    company: "Transform Automations India Private Ltd",
    desc: [
      "Designed & developed Front-end (ReactJs, Redux, Material-UI, JavaScript, TypeScript) of multiple modules in the project.",
      "Improved product performance resulting in speed increased exponentially (encapsulating modules, Memoization, & implemented better React practices).",
      "Modified existing modules to look better and to improve UX and minimized redundant rendering operations",
    ],
    startDate: "Oct 2020",
    endDate: "Sept 2021",
    position: "Software Engineer",
  },
];

interface SocialsType {
  name: string;
  profile_link: string;
  icon: string;
}

export const Socials: SocialsType[] = [
  {
    name: "Github",
    profile_link: "https://github.com/singh-abhijit",
    icon: "/github-icon.svg",
  },
  {
    name: "LinkedIn",
    profile_link: "https://www.linkedin.com/in/singh-abhijit/",
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
