"use client";

import { FaEnvelope, FaMapMarkerAlt, FaPhoneAlt } from "react-icons/fa";
import { motion } from "framer-motion";
import { Input } from "@/components/ui/input";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
const info = [
  {
    icon: <FaPhoneAlt />,
    title: "Phone",
    description: "+62 856 000 68 450",
  },
  {
    icon: <FaEnvelope />,
    title: "Email",
    description: "+62 856 000 68 450",
  },
  {
    icon: <FaMapMarkerAlt />,
    title: "Address",
    description: "Code Corner,Tech T",
  },
];
const Contact = () => {
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
        <div>
          <h3>
            Anda bisa contact saya di beberapa media sosial di bawah ini :
          </h3>
          <div></div>
        </div>
      </div>
    </motion.section>
  );
};

export default Contact;
