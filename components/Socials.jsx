import Link from "next/link";
import { FaGithub, FaLinkedinIn, FaInstagram } from "react-icons/fa";

const socials = [
  { icon: <FaGithub />, path: "https://github.com/harispriambada" },
  {
    icon: <FaLinkedinIn />,
    path: "https://www.linkedin.com/in/haris-priambada123/",
  },
  {
    icon: <FaInstagram />,
    path: "https://www.instagram.com/haris_priambada?NDcxZTV4aXFyb3Y1",
  },
];
function Socials({ containerStyles, iconStyles }) {
  return (
    <div className={containerStyles}>
      {socials.map((item, index) => {
        return (
          <Link key={index} href={item.path} className={iconStyles}>
            {item.icon}
          </Link>
        );
      })}
    </div>
  );
}

export default Socials;
