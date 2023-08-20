import React from "react";
import { FaGithub, FaLinkedinIn, FaTwitter } from "react-icons/fa";
import { HiOutlineMail } from "react-icons/hi";
import { DataItem } from "../interfaces/Linkdata";

export const socialLinks: DataItem[] = [
  {
    url: "https://www.linkedin.com/in/youngjun827/",
    image: <FaLinkedinIn size={20} />,
    label: "Linkedin account",
  },
  {
    url: "https://github.com/youngjun827",
    image: <FaGithub size={20} />,
    label: "GitHub account",
  },
  {
    url: "mailto:youngjung827@gmail.com",
    image: <HiOutlineMail size={20} />,
    label: "Mail",
  },
  {
    url: "https://twitter.com/YoungJunJoo1",
    image: <FaTwitter size={20} />,
    label: "Twitter page",
  },
];
