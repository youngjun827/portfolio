import React from "react";
import { FaGithub, FaLinkedin, FaTwitter } from "react-icons/fa";
import { HiOutlineMail } from "react-icons/hi";
import { DataItem } from "../interfaces/Linkdata";

interface SocialLinks extends DataItem {
  bgColor: string; // Use actual background color classes here
}

export const socialLinks: SocialLinks[] = [
  {
    label: "Linkedin",
    image: <FaLinkedin size={30} />,
    url: "https://www.linkedin.com/in/youngjun827/",
    bgColor: "bg-blue-600",
  },
  {
    label: "Github",
    image: <FaGithub size={30} />,
    url: "https://github.com/youngjun827",
    bgColor: "bg-[#333333]",
  },
  {
    label: "Email",
    image: <HiOutlineMail size={30} />,
    url: "mailto:youngjung827@gmail.com",
    bgColor: "bg-[#6fc2b0]",
  },
  {
    label: "Twitter",
    image: <FaTwitter size={30} />,
    url: "https://twitter.com/YoungJunJoo1",
    bgColor: "bg-[#2f82cc]",
  },
];
