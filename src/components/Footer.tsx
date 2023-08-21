import React from "react";
import { socialLinks } from "../data/CommonData";
import { FaGithub, FaLinkedin, FaTwitter } from "react-icons/fa";
import { HiOutlineMail } from "react-icons/hi";

const getIconByLabel = (label: string) => {
  switch (label) {
    case "Linkedin":
      return <FaLinkedin size={20} />;
    case "Github":
      return <FaGithub size={20} />;
    case "Email":
      return <HiOutlineMail size={20} />;
    case "Twitter":
      return <FaTwitter size={20} />;
    default:
      return null;
  }
};

const Footer = () => {
  return (
    <footer
      data-testid='footer'
      className='p-4 bg-[#ede7dd] rounded-lg shadow md:px-6'
    >
      <nav className='flex mt-4 justify-center space-x-6'>
        {socialLinks.map(({ url, label }) => (
          <a
            key={label}
            href={url}
            target='_blank'
            rel='noreferrer'
            className='text-[#3e3e1f] dark:hover:text-white'
          >
            <span className='mr-1'>{getIconByLabel(label)}</span>
            <span className='sr-only' data-testid={`${label}-label`}>
              {label}
            </span>
          </a>
        ))}
      </nav>
      <span className='block text-sm text-[#3e3e1f] font-bold text-center'>
        © 2022{" "}
        <a href='https://youngjun827.github.io/' className='hover:underline'>
          Young Jun Joo™
        </a>
        . All Rights Reserved.
      </span>
    </footer>
  );
};

export default Footer;
