"use client";

import ProjectCard from "@/components/ProjectCard";
import { ScrollArea } from "@/components/ui/scroll-area";
import { motion } from "framer-motion";
import { useState } from "react";

import image1 from "@/public/pic/thewilddash.png";
import image8 from "@/public/pic/gulasemut-ecom.png";
import image2 from "@/public/pic/pizzadelivery.png";
import image3 from "@/public/pic/usepopcorn.png";
import image4 from "@/public/pic/thewordwise.png";
import image5 from "@/public/pic/bookself.png";
import image6 from "@/public/pic/gula.png";
import image7 from "@/public/pic/webdasar.png";
import image9 from "@/public/pic/crud-laravel.png";
const projects = [
  {
    img: image9,
    title: "Laravel Customer App",
    description:
      "Project ini merupakan app manajemen customer yang memiliki fitur create, update, delete, read, dan soft delete, teknologi yang digunakan adalah laravel 11",
    links: {
      site: null,
      github: null,
    },
  },
  {
    img: image1,
    title: "Project Hotel Booking",
    description:
      "Project ini merupakan sebuah dashboard booking hotel,dalam project ini menggunakan beberapa teknologi, seperti react router, react query atau tanstack, styled component, react hook form, dan beberapa teknologi lain, untuk lebih jelasnya bisa ditanyakan pada sesi demo.",
    links: {
      site: null,
      github: "https://github.com/harispriambada/ThewildBookingApp",
    },
  },
  {
    img: image8,
    title: "Toko online Gula semut",
    description:
      "Projek ini merupakan sebuah toko online dari bisnis gula semut, bisnis dari keluarga. untuk teknologi yang digunakan pada project ini menggunakan Next js 14, terdapat juga authenticasi menggunakan next auth, untuk styling menggunakan tailwind css dan untuk penyimpanan data menggunakan mongoDb, dan masih menggunakan beberapa library pihak ketiga lain, untuk fitur dan lainya bisa ditanyakan waktu demo",
    links: {
      site: null,
      github: "https://github.com/harispriambada/",
    },
  },
  {
    img: image2,
    title: "Pizza delivery app",
    description:
      "Project ini merupakan project aplikasi untuk pemesanan pizza, dalam project ini menggunakan react Js, dan untuk state manajemen menggunakan redux, untuk styling menggunakan tailwind css,untuk penjelasan detail saat demo. ",
    links: {
      site: null,
      github: "https://github.com/harispriambada/pizza-react-delivery",
    },
  },
  {
    img: image3,
    title: "UsePopcorn",
    description:
      "Merupakan app pencarian film, dalam project ini mengguakan React js dan beberapa teknologi pendukung lain.",
    links: {
      site: null,
      github: "https://github.com/harispriambada/APP-film-USepopcorn",
    },
  },
  {
    img: image4,
    title: "the word wise",
    description:
      "Projek ini merupakan tampilan untuk user ketika booking hotel, dan project ini saling terikat dengan dashboard booking hotel project, untuk teknologi pada project ini menggunakan Next js 14, auth atau next auth, kemudian untuk styilng menggunakan tailwind css, sementara itu masih menggunakan beberapa library pihak ketiga lain untuk lebih jelasnya bisa ditanyakan waktu demo.",
    links: {
      site: "https://thewidewise-website.vercel.app/",
      github: "https://github.com/harispriambada/thewidewise-website",
    },
  },
  {
    img: image5,
    title: "BookSelf App",
    description:
      "Projek ini merupakan sebuah bookself app, simulasi book manajemen, project ini menggunakan html css dan vanila jvascript",
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
