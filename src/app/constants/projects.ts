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
import opsImage from "public/ops-img.jpeg"
  
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
    name: "Ops Portal",
    description: "A comprehensive operations dashboard designed for internal teams to manage customer data, investment records, and document workflows. The portal allows the operations team to upload, verify, and manage critical documents, track which customers have invested in which properties, and streamline communication by sending documents via email directly from the system. It centralizes key operational processes, ensuring smooth collaboration and efficient handling of client-related tasks.",
    tags: [
      "React ts",
      "Chakra ui",
      "TypeScript",
      "React Hook Form",
      "Yup",
    ],
    image_url: opsImage,
   },
  // {
  //   name: "Kanban Board",
  //   description:
  //     "I developed a Kanban board application inspired by Jira, designed to streamline task management. The board includes 'To do,' 'On Progress,' and 'Done' columns for an intuitive workflow, offering a simple yet effective solution for organizing tasks.",
  //   tags: [
  //     "ReactJs",
  //     "Material-UI",
  //     "Tailwind",
  //     "TypeScript",
  //     "Redux-Saga",
  //     "React-Query",
  //     "React Hook Form",
  //     "Formik",
  //     "Yup",
  //     "Stripe",
  //     "Twilio",
  //   ],
  //   image_url: KanbanImage,
  // },
];
