import React from "react";
import { FaGithub, FaLinkedin, FaTwitter } from "react-icons/fa";
import { HiOutlineMail } from "react-icons/hi";

const Navbar = () => {
  return (
    <>
      <div className='hidden xl:flex fixed flex-col top-[35%] left-0'>
        <ul>
          <li className='w-[140px] h-[60px] px-4 flex justify-between items-center ml-[-75px] hover:ml-[-0px] duration-300 bg-blue-600'>
            <a
              className=' flex justify-between items-center w-full text-sm text-gray-300'
              href='https://www.linkedin.com/in/youngjun827/'
              target='_blank'
              rel='noreferrer'
            >
              Linkedin <FaLinkedin size={30} />
            </a>
          </li>
          <li className='w-[140px] h-[60px] px-4 flex justify-between items-center ml-[-75px] hover:ml-[-0px] duration-300 bg-[#333333]'>
            <a
              className='flex justify-between items-center w-full text-sm text-gray-300'
              href='https://github.com/youngjun827'
              target='_blank'
              rel='noreferrer'
            >
              Github <FaGithub size={30} />
            </a>
          </li>
          <li className='w-[140px] h-[60px] px-4 flex justify-between items-center ml-[-75px] hover:ml-[-0px] duration-300 bg-[#6fc2b0]'>
            <a
              className='flex justify-between items-center w-full text-sm text-gray-300'
              href='mailto:youngjung827@gmail.com'
              target='_blank'
              rel='noreferrer'
            >
              Email <HiOutlineMail size={30} />
            </a>
          </li>
          <li className='w-[140px] h-[60px] px-4 flex justify-between items-center ml-[-75px] hover:ml-[-0px] duration-300 bg-[#2f82cc]'>
            <a
              className='flex justify-between items-center w-full text-sm text-gray-300'
              href='https://twitter.com/YoungJunJoo1'
              target='_blank'
              rel='noreferrer'
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
