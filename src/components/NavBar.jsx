import React, { useState } from "react";
import {
  FaBars,
  FaTimes,
  FaGithub,
  FaLinkedin,
  FaFacebook,
  FaLinkedinIn,
  FaTwitter,
} from "react-icons/fa";
import { HiOutlineMail } from "react-icons/hi";
import { BsFillPersonLinesFill } from "react-icons/bs";


const Navbar = () => {
  const [nav, setNav] = useState(false);
  const handleClick = () => setNav(!nav);

  return (
    <>

    {/* Social icons */}
    <div className="hidden xl:flex fixed flex-col top-[35%] left-0">
        <ul>
          <li className="w-[140px] h-[60px] px-4 flex justify-between items-center ml-[-75px] hover:ml-[-0px] duration-300 bg-blue-600">
            <a
              className=" flex justify-between items-center w-full text-sm text-gray-300"
              href="https://www.linkedin.com/in/youngjun827/"
              target="_blank"
            >
              Linkedin <FaLinkedin size={30} />
            </a>
          </li>
          <li className="w-[140px] h-[60px] px-4 flex justify-between items-center ml-[-75px] hover:ml-[-0px] duration-300 bg-[#333333]">
            <a
              className="flex justify-between items-center w-full text-sm text-gray-300"
              href="https://github.com/youngjun827"
              target="_blank"
            >
              Github <FaGithub size={30} />
            </a>
          </li>
          <li className="w-[140px] h-[60px] px-4 flex justify-between items-center ml-[-75px] hover:ml-[-0px] duration-300 bg-[#6fc2b0]">
            <a
              className="flex justify-between items-center w-full text-sm text-gray-300"
              href="mailto:youngjung827@gmail.com"
              target="_blank"
            >
              Email <HiOutlineMail size={30} />
            </a>
          </li>
          <li className="w-[140px] h-[60px] px-4 flex justify-between items-center ml-[-75px] hover:ml-[-0px] duration-300 bg-[#2f82cc]">
            <a
              className="flex justify-between items-center w-full text-sm text-gray-300"
              href="https://twitter.com/YoungJunJoo1"
              target="_blank"
            >
              Twitter <FaTwitter size={30} />
            </a>
          </li>
        </ul>
      </div>
    </>
  );
};

export default Navbar;
