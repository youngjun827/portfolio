import React from "react";
import { footerData } from "../data/FooterData";

const Footer = () => {
  return (
    <footer className='p-4 bg-[#ede7dd] rounded-lg shadow md:px-6'>
      <nav className='pb-4 flex mt-4 justify-center space-x-6'>
        {footerData.map(({ url, image, label }) => (
          <a
            key={label}
            href={url}
            target='_blank'
            rel='noreferrer'
            className='text-[#3e3e1f] dark:hover:text-white'
          >
            {image}
            <span className='sr-only'>{label}</span>
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
