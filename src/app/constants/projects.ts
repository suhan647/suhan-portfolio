interface Project {
  name: string;
  description: string;
  tags: string[];
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  image_url: any;
  source_code_url?: string;
  live_link?: string;
  rel?: string;
}

import LMSImage from "public/lms.png";
import AestheticRecordsImage from "public/AR.png";
import HwyHaulImage from "public/HwyHaul.png";
import AssureAIImage from "public/AssureAI.png";
import KanbanImage from "public/kanban.png";
import HbitsImage from "public/HbitsImage.png";
  
export const projects: Project[] = [
  {
    name: "LMS",
    description:
      "Lead Management System (LMS) : Sales Execution CRM & Marketing Automation Tool. It offers tools for lead generation, tracking, scoring, as well as features for sale execution and marketing analytics",
    tags: [
      "NextJs",
      "Material-UI",
      "Tailwind",
      "TypeScript",
      "React-Table",
      "React-Query",
      "React Hook Form",
      "Yup",
      "NodeJS",
      "Express",
      "PostgreSql",
    ],
    image_url: LMSImage,
  },
  {
  name: "HBITS Website",
  description:
    "hBits is a Mumbai‑based proptech platform founded in 2018 that democratizes access to grade A commercial real estate by offering fractional ownership through SEBI‑regulated SM REITs. It lets investors enter with low ticket sizes, earn rental income and potential capital appreciation, and benefit from professional property management, transparent reporting, and secondary‑market liquidity options. ",
  tags: [
    "NextJs",
    "Tailwind",
    "TypeScript",
    "React-Query",
    "React Hook Form",
    "Yup",
  ],
  image_url: HbitsImage,
  live_link: "https://hbits.co/",
  rel: "noindex, nofollow",
},

  {
    name: "Aesthetic Records",
    description:
      "cloud-based electronic medical record (EMR) and practice management software tailored for medical aesthetic practices. It helps clinics, medspas, and aesthetic healthcare providers manage their patient records, streamline operations, and enhance patient care. The platform offers a comprehensive suite of tools designed specifically for the aesthetic and wellness industry.",
    tags: [
      "NextJs",
      "Tailwind",
      "TypeScript",
      "React-Table",
      "React-Query",
      "React Hook Form",
      "Yup",
      "Stripe",
      "Jest",
    ],
    image_url: AestheticRecordsImage,
    live_link: "https://www.aestheticrecord.com/",
    rel: "noindex, nofollow",
  },
  {
    name: "HwyHaul",
    description:
      "HwyHaul is freight logistics platform that connects shippers and carriers, aiming to simplify and optimize the freight shipping process. By leveraging artificial intelligence (AI) and machine learning (ML), it provides real-time freight matching, route optimization, and load tracking for various industries. HwyHaul is often associated with the transportation of perishable goods, offering solutions to reduce waste and improve efficiency in the supply chain.",
    tags: [
      "NextJs",
      "ReactJs",
      "Ant Design",
      "Tailwind",
      "TypeScript",
      "Redux-Thunk",
      "React-Query",
      "React Hook Form",
      "Yup",
      "Google GEO Location",
      "Google Maps API",
      "Stripe",
      "Twilio",
    ],
    image_url: HwyHaulImage,
    live_link: "https://www.hwyhaul.com/",
    rel: "noindex, nofollow",
  },
  {
    name: "Assure AI",
    description:
      "AssureAI is an AI-driven platform designed specifically to assist Chartered Accountants (CAs) and accounting professionals in automating and streamlining their workflows. It helps manage compliance, audits, and risk assessments with greater accuracy and efficiency, allowing CAs to focus on delivering value-added services to their clients.",
    tags: [
      "ReactJs",
      "Material-UI",
      "Tailwind",
      "TypeScript",
      "Redux-Saga",
      "React-Query",
      "React Hook Form",
      "Formik",
      "Yup",
      "Stripe",
      "Twilio",
    ],
    image_url: AssureAIImage,
    live_link: "https://assureai.in/",
    rel: "noindex, nofollow",
  },
  {
    name: "Kanban Board",
    description:
      "I developed a Kanban board application inspired by Jira, designed to streamline task management. The board includes 'To do,' 'On Progress,' and 'Done' columns for an intuitive workflow, offering a simple yet effective solution for organizing tasks.",
    tags: [
      "ReactJs",
      "Material-UI",
      "Tailwind",
      "TypeScript",
      "Redux-Saga",
      "React-Query",
      "React Hook Form",
      "Formik",
      "Yup",
      "Stripe",
      "Twilio",
    ],
    image_url: KanbanImage,
    live_link: "https://abhijit-kanban-board.netlify.app/",
  },
];
