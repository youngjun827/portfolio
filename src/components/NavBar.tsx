import React from "react";
import { socialLinks } from "../data/NavBarData";

const Navbar = () => {
  return (
    <div className='hidden xl:flex fixed flex-col top-[35%] left-0'>
      <ul>
        {socialLinks.map((link, index: number) => (
          <li
            key={index}
            className={`w-[140px] h-[60px] px-4 flex justify-between items-center ml-[-75px] hover:ml-[-0px] duration-300 ${link.bgColor}`}
          >
            <a
              className='flex justify-between items-center w-full text-sm text-gray-300'
              href={link.url}
              target='_blank'
              rel='noreferrer'
            >
              {link.label} {link.icon}
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Navbar;
