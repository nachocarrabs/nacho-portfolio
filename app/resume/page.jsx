"use client";

import { Description } from "@radix-ui/react-dialog";
import {
  FaHtml5,
  FaCss3,
  FaJs,
  FaReact,
  FaFigma,
  FaNodeJs,
  FaJava,
  FaS,
  SiSpringboot,
  SiAdobephotoshop,
  SiAdobeillustrator,
  SiNextdotjs,
  SiTailwindcss,
  SiSass,
} from "react-icons/fa";
import { SiTailwindcss, SiNextdotjs } from "react-icons/si";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import {
  Tooltip,
  TooltipProvider,
  TooltipContent,
  TooltipTrigger,
} from "@/components/ui/tooltip";

import { ScrollArea } from "@/components/ui/scroll-area";
import { motion } from "framer-motion";

const about = {
  title: "About me",
  desc: "Hola soy nacho como andan todoa sdjasjj j sajd jas jasdj jdsjdjsj",
  info: [
    {
      fieldName: "Name",
      fieldValue: "Ignacio Carrabs",
    },
    {
      fieldName: "Celular",
      fieldValue: "(+54) 342 5115 188",
    },
    {
      fieldName: "Discord",
      fieldValue: "nacho.car",
    },
    {
      fieldName: "Nacionalidad",
      fieldValue: "Argentina",
    },

    {
      fieldName: "E-mail",
      fieldValue: "ignaciocarrabs@gmail.com",
    },
    {
      fieldName: "Idiomas",
      fieldValue: "Español (nativo), Inglés (Intermedio)",
    },
  ],
};

const education = {
  icon: "/assets/resume/cap.svg",
  title: "",
  desc: "Lorem ipsum dolor sit amet conectetur adipisicng elit. Voluptuates uqiakjdasm sunt epxlica vinetro.",
  items: [
    {
      institución: "Digital House | MercadoLibre & Globant",
      position: "Certified Tech Developer",
      duration: "2021 - 2023",
    },
    {
      institución: "Universidad Nacional del Litoral",
      position: "Arquitectura, diseño y urbanismo",
      duration: "2018 - Sin finalizar.",
    },
  ],
};

const skills = {
  title: "Mis habilidades",
  description:
    "Lorem ipsum dolor sit amet conectetur adipisicng elit. Voluptuates uqiakjdasm sunt epxlica vinetro.",
  skillList: [
    {
      icon: <FaHtml5 />,
      name: "HTML",
    },
    {
      icon: <FaCss3 />,
      name: "CSS",
    },
    {
      icon: <FaJs />,
      name: "JavaScript",
    },
    {
      icon: <FaJava />,
      name: "Java",
    },
    {
      icon: <FaReact />,
      name: "React.js",
    },
    {
      icon: <FaNodeJs />,
      name: "Node.js",
    },
    {
      icon: <SiSpringboot />,
      name: "SpringBoot",
    },
    {
      icon: <SiTailwindcss />,
      name: "Tailwind CSS",
    },
    {
      icon: <SiSass />,
      name: "Sass CSS",
    },
    {
      icon: <FaFigma />,
      name: "figma",
    },
    {
      icon: <SiAdobephotoshop />,
      name: "Photoshop",
    },
    {
      icon: <SiAdobeillustrator />,
      name: "Illustrator",
    },
    {
      icon: <SiNextdotjs />,
      name: "Next.js",
    },
  ],
};

const Resume = () => {
  return <div className="container mx-auto">Resume</div>;
};

export default Resume;
