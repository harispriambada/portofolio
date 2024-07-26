"use client";

import { FaHtml5, FaCss3, FaJs, FaBootstrap, FaReact } from "react-icons/fa";
import { IoLogoReact } from "react-icons/io5";
import { SiTailwindcss, SiNextdotjs } from "react-icons/si";
import { motion } from "framer-motion";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { ScrollArea } from "@/components/ui/scroll-area";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";

const about = {
  title: "About me",
  description:
    "Berikut ini merupakan biodata dan informasi singkat mengenai saya",
  info: [
    {
      fieldName: "Nama",
      fieldValue: "Haris Priambada S.Kom",
    },
    {
      fieldName: "TTL",
      fieldValue: "Sleman, 27/05 2000",
    },
    {
      fieldName: "Alamat",
      fieldValue: "Magelang Jawa Tengah",
    },
    {
      fieldName: "WA",
      fieldValue: "+62 856 000 684 50",
    },
    {
      fieldName: "Jurusan",
      fieldValue: "S1 informatika",
    },
    {
      fieldName: "Email",
      fieldValue: "primbodoharis@gmail.com",
    },
  ],
};

const skills = {
  title: "My Skills",
  description: "Berikut ini adalah beberapa skills yang saya miliki:",
  skillList: [
    {
      icon: <FaHtml5 />,
      name: "html 5",
    },
    {
      icon: <FaCss3 />,
      name: "css 3",
    },
    {
      icon: <FaJs />,
      name: "javascript",
    },
    {
      icon: <FaReact />,
      name: "react js",
    },
    {
      icon: <SiNextdotjs />,
      name: "next js",
    },
    {
      icon: <SiTailwindcss />,
      name: "tailwind css",
    },
    {
      icon: <FaBootstrap />,
      name: "bootstrap",
    },
    {
      icon: <IoLogoReact />,
      name: "react router",
    },
    {
      icon: <IoLogoReact />,
      name: "react query",
    },
  ],
};

const education = {
  title: "Pendidikan dan Sertifikat",
  description:
    "Berikut ini merupakan riwayat pendidikan dan sertifikat yang saya peroleh, silahkan scroll",
  items: [
    {
      degree: "S1 INFORMATIKA",
      institution: "UNIVERSITAS AMIKOM YOGYAKARTA",
      duration: "2019-2023",
    },
    {
      degree: "TKJ",
      institution: "SMK N 2 YOGYAKARTA",
      duration: "2016-2019",
    },
    {
      degree: "Belajar Dasar Pemrograman Web",
      institution: "dicoding",
      duration: "2023",
    },
    {
      degree: "Belajar Membuat Front-End Web untuk Pemula",
      institution: "dicoding",
      duration: "2023",
    },
    {
      degree: "Belajar Fundamental Front-End Web Development",
      institution: "dicoding",
      duration: "2023",
    },
    {
      degree: "HTML,CSS dan JavaScript: pemula sampai mahir",
      institution: "Udemy",
      duration: "2023",
    },
    {
      degree: "The Ultimate React Course 2024: React, Next.js, Redux & More",
      institution: "Udemy",
      duration: "2023-2024",
    },
    {
      degree: "Fundamental Front-End Web Development 2021",
      institution: "Coding studio",
      duration: "2023",
    },
    {
      degree: "Fundamental Front-End Web Development II",
      institution: "Coding studio",
      duration: "2023",
    },
  ],
};
const Resume = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{
        opacity: 1,
        transition: { delay: 2.4, duration: 0.4, ease: "easeIn" },
      }}
      className="min-h-[80vh] flex items-center justify-center py-12 xl:py-0"
    >
      <div className="container mx-auto">
        <Tabs defaultValue="education" className="flex flex-col  gap-[60px]">
          <TabsList className="flex w-full max-w-[300px]  items-center mx-auto xl:mx-0 gap-6">
            <TabsTrigger value="education">Education</TabsTrigger>
            <TabsTrigger value="skills">Skills</TabsTrigger>
            <TabsTrigger value="about">About me</TabsTrigger>
          </TabsList>
          <div className="border-b-2 border-accent"></div>
          <div className="min-h-[70vh] w-full">
            <TabsContent value="education" className="w-full h-full">
              <div className="flex flex-col gap-[30px] text-center xl:text-left ">
                <h3 className="text-xl font-bold sm:hidden">
                  {education.title}
                </h3>
                <p className="max-w-[1200px] text-white/60 mx-auto xl:mx-0 mb-2">
                  {education.description}
                </p>
              </div>
              <div className="flex flex-col gap-[30px] text-center xl:text-left">
                <ScrollArea className="h-[400px]">
                  <ul className="grid grid-cols-1 lg:grid-cols-2  gap-[30px]">
                    {education.items.map((item, index) => {
                      return (
                        <li
                          key={index}
                          className="bg-[#232329] h-[200px] py-6 px-10 rounded-xl flex flex-col justify-center items-center lg:items-start gap-1"
                        >
                          <span className="text-accent">{item.duration}</span>
                          <h3 className="text-xl max-w-[260px] min-h-[60px] text-center lg:text-left">
                            {item.degree}
                          </h3>
                          <div className="flex items-center gap-3">
                            <span className="w-[6px] h-[6px] rounded-full bg-accent"></span>
                            <p className="text-white/60">{item.institution}</p>
                          </div>
                        </li>
                      );
                    })}
                  </ul>
                </ScrollArea>
              </div>
            </TabsContent>
            <TabsContent value="skills" className="w-full h-full">
              <div className="flex flex-col gap-[30px]">
                <div className="flex flex-col gap-[30px] text-center xl:text-left">
                  <h3 className="text-xl font-bold sm:hidden">
                    {skills.title}
                  </h3>
                  <p className="max-w-[600px] text-white/60 mx-auto xl:mx-0">
                    {skills.description}
                  </p>
                </div>
                <ul className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4 xl:gap-[30px]">
                  {skills.skillList.map((item, index) => {
                    return (
                      <li key={index}>
                        <TooltipProvider delayDuration={100}>
                          <Tooltip>
                            <TooltipTrigger className="w-full h-[150px] bg-[#232329] rounded-xl flex justify-center items-center group">
                              <div className="text-6xl group-hover:text-accent  transition-all duration-300 flex flex-col gap-2 items-center">
                                {item.icon}
                                <span className="text-white/60 group-hover:text-accent text-sm">
                                  {item.name}
                                </span>
                              </div>
                            </TooltipTrigger>
                            <TooltipContent>{item.name}</TooltipContent>
                          </Tooltip>
                        </TooltipProvider>
                      </li>
                    );
                  })}
                </ul>
              </div>
            </TabsContent>
            <TabsContent
              value="about"
              className="w-full h-full text-center xl:text-left"
            >
              <div className="flex flex-col gap-[30px]">
                <div className="flex items-center gap-4">
                  <h3 className="text-xl font-bold sm:hidden">
                    {about.title} :
                  </h3>
                  <p className="max-w-[1200px] text-white/60 mx-auto text-sm xl:mx-0">
                    {about.description}
                  </p>
                </div>
                <ul className="grid grid-cols-2 sm:gap-1 xl:grid-cols-2 gap-6 max-w-[1200px] mx-auto xl:mx-0 ">
                  {about.info.map((item, index) => {
                    return (
                      <li
                        key={index}
                        className="flex items-center justify-center  gap-4 bg-white/5 rounded-md py-6"
                      >
                        <span className="text-white/60 sm:text-sm">
                          {item.fieldName}
                        </span>
                        <span className="text-xl sm:text-sm">
                          {item.fieldValue}
                        </span>
                      </li>
                    );
                  })}
                </ul>
              </div>
            </TabsContent>
          </div>
        </Tabs>
      </div>
    </motion.div>
  );
};

export default Resume;
