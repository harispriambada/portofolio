"use client";

import ProjectCard from "@/components/ProjectCard";
import { ScrollArea } from "@/components/ui/scroll-area";
import { motion } from "framer-motion";
import { useState } from "react";

import image1 from "@/public/pic/thewilddash.png";
import image2 from "@/public/pic/pizzadelivery.png";
import image3 from "@/public/pic/usepopcorn.png";
import image4 from "@/public/pic/thewordwise.png";
import image5 from "@/public/pic/bookself.png";
import image6 from "@/public/pic/gula.png";
import image7 from "@/public/pic/webdasar.png";
const projects = [
  {
    img: image1,
    title: "Project 01",
    description:
      "Projek ini merupakan projek untuk booking hotel, dan projek ini merupakan bagian dari dashboard saja jadi user terbatas",
    links: {
      site: "#",
      github: "https://github.com/harispriambada/ThewildBookingApp",
    },
  },
  {
    img: image2,
    title: "Pizza delivery app",
    description: "Merupakan sebuah aplikasi untuk pemesanan pizza ",
    links: {
      site: null,
      github: "https://github.com/harispriambada/pizza-react-delivery",
    },
  },
  {
    img: image3,
    title: "UsePopcorn",
    description:
      "Merupakan app pencarian film, projek ini saya kerjakan di course udemy bersama Jonas",
    links: {
      site: null,
      github: "https://github.com/harispriambada/APP-film-USepopcorn",
    },
  },
  {
    img: image4,
    title: "Project 01",
    description:
      "Projek ini merupakan projek untuk front end, dimana tampilan front end dari website gula semut",
    links: {
      site: "#",
      github: "https://github.com/harispriambada/thewidewise-website",
    },
  },
  {
    img: image5,
    title: "BookSelf App",
    description:
      "Projek ini merupakan sebuah bookself app yang mana berguna untuk menyimpan buku ,dan masih berbentuk simulasi",
    links: {
      site: null,
      github: "https://github.com/harispriambada/bookself-app",
    },
  },
  {
    img: image6,
    title: "Gula Semut Web",
    description:
      "Merupakan tampilan sebuah website untuk sebuah usaha bernama gula semut, website ini hanya tampilan front end saja",
    links: {
      site: null,
      github: "https://github.com/harispriambada/gula-semut",
    },
  },
  {
    img: image7,
    title: "Website ikan front end",
    description:
      "Projek ini merupakan projek untuk front end, dimana ketika saya mengambil course di dicoding",
    links: {
      site: null,
      github: "https://github.com/harispriambada/submitan",
    },
  },
];
const Project = () => {
  const [curProject, setCurProject] = useState(0);

  return (
    <motion.section
      initial={{ opacity: 0 }}
      animate={{
        opacity: 1,
        transition: { delay: 2.4, duration: 0.4, ease: "easeIn" },
      }}
      className="min-h-[80vh] flex items-center justify-center py-12 xl:py-0"
    >
      <div className="container w-full">
        <h3 className="text-4xl font-bold mb-4 flex items-center justify-center">
          Projek saya
        </h3>

        <ScrollArea className="h-[500px]">
          <div className="grid md:grid-cols-2 xl:grid-cols-3 gap-6 md:gap-6">
            {projects.map((project, index) => {
              return (
                <ProjectCard
                  key={index}
                  title={project.title}
                  img={project.img}
                  description={project.description}
                  links={project.links}
                />
              );
            })}
          </div>
        </ScrollArea>
      </div>
    </motion.section>
  );
};

export default Project;
