const Frontend = {
  name: "Frontend",
  skillSet: [
    {
      name: "NextJs",
      link: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/nextjs/nextjs-original.svg",
    },
    {
      name: "ReactJs",
      link: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/react/react-original.svg",
    },
    {
      name: "ViteJs",
      link: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/vitejs/vitejs-original.svg",
    },
    {
      name: "TypeScript",
      link: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/typescript/typescript-original.svg",
    },
    {
      name: "JavaScript",
      link: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/javascript/javascript-original.svg",
    },
    {
      name: "Redux",
      link: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/redux/redux-original.svg",
    },
    {
      name: "Material UI",
      link: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/materialui/materialui-original.svg",
    },
    {
      name: "Ant Design",
      link: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/antdesign/antdesign-original.svg",
    },
    {
      name: "Tailwind",
      link: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/tailwindcss/tailwindcss-original.svg",
    },
    {
      name: "Bootstrap",
      link: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/bootstrap/bootstrap-original.svg",
    },
    {
      name: "Motion",
      link: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/framermotion/framermotion-original.svg",
      needWhiteBackground: true,
    },
    {
      name: "ThreeJs",
      link: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/threejs/threejs-original.svg",
      needWhiteBackground: true,
    },
    // {
    //   name: "Vitest",
    //   link: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/vitest/vitest-original.svg",
    // },
    {
      name: "Jest",
      link: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/jest/jest-plain.svg",
    },
  ],
};

// const Backend = {
//   name: "Backend",
//   skillSet: [
//     {
//       name: "NodeJs",
//       link: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/nodejs/nodejs-original.svg",
//     },
//     {
//       name: "ExpressJs",
//       link: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/express/express-original.svg",
//       needWhiteBackground: true,
//     },
//     {
//       name: "NestJs",
//       link: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/nestjs/nestjs-original.svg",
//     },
//     {
//       name: "Firebase",
//       link: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/firebase/firebase-original.svg",
//     },
//     {
//       name: "Supabase",
//       link: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/supabase/supabase-original.svg",
//     },
//     {
//       name: "DynamoDB",
//       link: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/dynamodb/dynamodb-original.svg",
//     },
//     {
//       name: "MongoDB",
//       link: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/mongodb/mongodb-original.svg",
//     },
//     {
//       name: "MySql",
//       link: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/mysql/mysql-original.svg",
//     },
//     {
//       name: "Postgresql",
//       link: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/postgresql/postgresql-original.svg",
//     },
//   ],
// };

// const DevOps = {
//   name: "DevOps",
//   skillSet: [
//     {
//       name: "Linux",
//       link: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/linux/linux-original.svg",
//     },
//     {
//       name: "AWS",
//       link: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/amazonwebservices/amazonwebservices-original-wordmark.svg",
//     },
//     {
//       name: "SonarQube",
//       link: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/sonarqube/sonarqube-original.svg",
//     },
//   ],
// };

// const Others = {
//   name: "Others",
//   skillSet: [],
// };

interface SkillSetDetails {
  name: string;
  link: string;
  needWhiteBackground?: boolean;
}

interface SkillDetails {
  name: string;
  skillSet: SkillSetDetails[];
}

// const MySkillsList = [Frontend, Backend, DevOps] as SkillDetails[];
const MySkillsList = [Frontend] as SkillDetails[];


export default MySkillsList;
