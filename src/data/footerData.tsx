import React from "react";
import { FaGithub, FaLinkedinIn, FaTwitter } from "react-icons/fa";
import { HiOutlineMail } from "react-icons/hi";
import { DataItem } from "../interfaces/Linkdata";

export const footerData: DataItem[] = [
  {
    url: "https://www.linkedin.com/in/youngjun827/",
    icon: <FaLinkedinIn size={20} />,
    label: "Linkedin account",
  },
  {
    url: "https://github.com/youngjun827",
    icon: <FaGithub size={20} />,
    label: "GitHub account",
  },
  {
    url: "mailto:youngjung827@gmail.com",
    icon: <HiOutlineMail size={20} />,
    label: "Mail",
  },
  {
    url: "https://twitter.com/YoungJunJoo1",
    icon: <FaTwitter size={20} />,
    label: "Twitter page",
  },
];
