import Photo from "@/components/Photo";
import Socials from "@/components/Socials";
import Stats from "@/components/Stats";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { FiDownload } from "react-icons/fi";

export default function Home() {
  return (
    <section className="h-full">
      <div className="container mx-auto h-full">
        <div className="flex flex-col  items-center justify-between gap-11">
          <div className="text-center">
            <div className=" mb-5">
              <span className="text-xl">
                <span className="text-accent">Front</span> end{" "}
                <span className="text-accent">Developer</span>
              </span>
            </div>
            <div className="flex flex-col gap-10 ">
              <h1 className="h1  text-4xl flex flex-col gap-4 ">
                <span>Hello Saya </span>
                <span className="text-accent text-6xl">Haris Priambada</span>
              </h1>
              <p className="max-w-[700px] mb-9 text-white/80">
                Saya merupakan lulusan s1 Informatika, yang memiliki antusias
                terhadap teknologi IT dan bidang front end developer
              </p>
            </div>
            <div className="flex flex-col items-center gap-8">
              <Link
                href={
                  "https://drive.google.com/file/d/1_I5mfmG5kEyAaTmp7fzVgA4NAaJJp2-7/view"
                }
                className="uppercase flex items-center gap-2 py-3 px-2 bg-accent hover:bg-accent-hover rounded-3xl"
              >
                <span>Download CV</span>
                <FiDownload className="text-xl" />
              </Link>
              <div className="mb-8 xl:mb-0">
                <Socials
                  containerStyles="flex gap-6"
                  iconStyles="w-9 h-9 border border-accent rounded-full flex justify-center items-center text-accent text-base hover:bg-accent hover:text-primary hover:transition-all duration-500"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
