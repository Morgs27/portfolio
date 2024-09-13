import {
  FaCss3Alt,
  FaHtml5,
  FaJs,
  FaNodeJs,
  FaPhp,
  FaReact,
  FaSass,
} from "react-icons/fa";
import {
  SiFirebase,
  SiMysql,
  SiThreedotjs,
  SiTypescript,
  SiVite,
} from "react-icons/si";

type Skill = {
  icon: React.ReactNode;
  fullName: string;
};

export const skills: { [key: string]: Skill } = {
  React: { icon: <FaReact />, fullName: "React.js" },
  HTML: { icon: <FaHtml5 title="HTML" />, fullName: "HTML" },
  CSS: { icon: <FaCss3Alt />, fullName: "CSS" },
  JavaScript: { icon: <FaJs />, fullName: "JavaScript" },
  Firebase: { icon: <SiFirebase />, fullName: "Firebase" },
  Sanity: {
    icon: <img src="./sanity-logo.png" alt="Sanity" />,
    fullName: "Sanity",
  },
  PHP: { icon: <FaPhp />, fullName: "PHP" },
  MySQL: { icon: <SiMysql />, fullName: "SQL" },
  TypeScript: { icon: <SiTypescript />, fullName: "TypeScript" },
  Vite: { icon: <SiVite />, fullName: "Vite" },
  Sass: { icon: <FaSass />, fullName: "SCSS" },
  NodeJS: { icon: <FaNodeJs />, fullName: "Node.js" },
  ThreeJS: { icon: <SiThreedotjs />, fullName: "Three.js" },
};

export const displayedSkills = [
  "HTML",
  "React",
  "JavaScript",
  "TypeScript",
  "CSS",
  "Sass",
  "PHP",
  "NodeJS",
  "MySQL",
  "Firebase",
  "ThreeJS",
  "Vite",
];
