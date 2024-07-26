import Image from "next/image";
import Link from "next/link";
import { BsArrowUpRight, BsGithub } from "react-icons/bs";

function ProjectCard({ title, description, img, links }) {
  return (
    <div>
      <div
        className="h-80 md:h-60 xl:h-70 rounded-t-xl relative group"
        // style={{ background: `url(${img})`, backgroundSize: "cover" }}
      >
        <Image src={img} alt="" fill className="rounded-t-xl" />
        <div className="overlay rounded-t-xl absolute top-0 gap-10 left-0 w-full h-full bg-[#232329]  items-center justify-center bg-opacity-0 hidden group-hover:flex group-hover:bg-opacity-80 transition-all duration-500   ">
          {links.site === null ? (
            ""
          ) : (
            <Link
              href={links.site}
              className="flex text-xl items-center gap-2  group hover:text-accent "
            >
              <BsArrowUpRight className=" h-5 w-5  relative   " /> Cek website
            </Link>
          )}
          <Link
            href={links.github}
            className="flex text-xl items-center gap-2 hover:text-accent group"
          >
            <BsGithub className="hover:text-accent h-5 w-5  relative" />
            github
          </Link>
        </div>
      </div>
      <div className="text-white rounded-b-xl bg-transparent py-6 px-4 ">
        <h5 className="text-xl font-semibold mb-2">{title}</h5>
        <p className="text-[#adb7be]">{description}</p>
      </div>
    </div>
  );
}

export default ProjectCard;
