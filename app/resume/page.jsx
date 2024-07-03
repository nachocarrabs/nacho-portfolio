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
} from "react-icons/fa";
import {
  SiTailwindcss,
  SiNextdotjs,
  SiSpringboot,
  SiAdobephotoshop,
  SiAdobeillustrator,
  SiSass,
} from "react-icons/si";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import {
  Tooltip,
  TooltipProvider,
  TooltipContent,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import { BsArrowDownRight } from "react-icons/bs";

import { ScrollArea } from "@/components/ui/scroll-area";
import { motion } from "framer-motion";
import Link from "next/link";

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
  title: "Educación Profesional",
  desc: "Cumplí con 1568 horas de cursado teórico-práctico para que me otorguen la certificación profesional como desarrollador, en mi paso por la Facultad de Arquitectura y Urbanismo adquirí habilidades blandas y conocimientos sólidos en el área del diseño.  ",
  items: [
    {
      institución: "Digital House | MercadoLibre & Globant.",
      position: "Certified Tech Developer.",
      duration: "2021 - 2023",
      certi: "Ver certificación",
    },
    {
      institución: "Universidad Nacional del Litoral.",
      position: "Arquitectura, diseño y urbanismo.",
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
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1, transition: { delay: 2.4, ease: "easeIn" } }}
      className="min-h-[80vh] flex items-center justify-center py-12 xl:py-0"
    >
      <div className="container mx-auto">
        <Tabs
          defaultValue="experience"
          className="flex flex-col xl:flex-row gap-[60px]"
        >
          <TabsList className="flex flex-col w-full max-w-[380px] mx-auto xl:mx-0 gap-6">
            <TabsTrigger value="educación">Educación</TabsTrigger>
            <TabsTrigger value="habilidades">Mis habilidades</TabsTrigger>
            <TabsTrigger value="sobremi">Sobre mí</TabsTrigger>
          </TabsList>

          <div className="min-h-[70vh] w-full">
            <TabsContent value="educación" className="w-full">
              <div className="flex flex-col gap-[30px] text-center xl:text-left">
                <h3 className="text-4xl font-bold">{education.title}</h3>
                <p className="text-base max-w-[600px] text-white/60 mx-auto xl:mx-0">
                  {education.desc}
                </p>
                <ScrollArea className="h-[400px]">
                  <ul className="grid grid-cols-1 lg:grid-cols-1 gap-[30px]">
                    {education.items.map((item, index) => {
                      return (
                        <li
                          key={index}
                          className="bg-[#232329] h-[184px] w-[600px] py-6 px-10 rounded-xl flex flex-col justify-center items-center lg:items-start gap-1"
                        >
                          <div>
                            <span className="text-xl max-w-[360px] pb-2 text-center lg:text-left">
                              {item.position}
                            </span>
                            <div className="flex items-center gap-3">
                              <span className="w-[6px] h-[6px] rounded-full bg-accent"></span>
                              <h3 className="text-white/60">
                                {item.institución}
                              </h3>
                            </div>
                            <p className="text-accent">{item.duration}</p>
                          </div>
                          <div>
                            <Link
                              href="https://drive.google.com/file/d/14GnVGFB-UY2tOT0ih-5Qfyns_DPeL8lx/view?usp=sharing"
                              legacyBehavior
                              passHref
                            >
                              <a target="_blank" rel="noopener noreferrer">
                                <h1 className="font-thin text-white/70 hover:text-accent transition-all duration-500">
                                  {item.certi}
                                </h1>
                              </a>
                            </Link>
                          </div>
                        </li>
                      );
                    })}
                  </ul>
                </ScrollArea>
              </div>
            </TabsContent>
            <TabsContent value="habilidades" className="w-full">
              mis habilidades
            </TabsContent>
            <TabsContent value="sobremi" className="w-full">
              sobre mi
            </TabsContent>
          </div>
        </Tabs>
      </div>
    </motion.div>
  );
};

export default Resume;
