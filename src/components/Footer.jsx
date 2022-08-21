import React from 'react'

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

function Footer() {
  return (  
    <footer>
        <div className="py-6 px-4 bg-[#ede7dd] md:flex md:items-center md:justify-between">
            <span className="text-sm text-[#3e3e1f] font-bold sm:text-center">© 2022 <a href="https://youngjun827.github.io/">Young Jun Joo™</a>. All Rights Reserved.
            </span>
            <div className="flex mt-4 space-x-6 sm:justify-center md:mt-0">
                <a 
                href="https://www.linkedin.com/in/youngjun827/"
                target="_blank" 
                className="text-[#3e3e1f] dark:hover:text-white">
                    <FaLinkedinIn size={20} />
                    <span className="sr-only">Linkedin account</span>
                </a>
                <a 
                href="https://github.com/youngjun827"
                target="_blank"
                className="text-[#3e3e1f] dark:hover:text-white">
                    <FaGithub size={20} />
                    <span className="sr-only">GitHub account</span>
                </a>
                <a 
                href="mailto:youngjung827@gmail.com"
                target="_blank" 
                className="text-[#3e3e1f] dark:hover:text-white">
                    <HiOutlineMail size={20} />
                    <span className="sr-only">Mail</span>
                </a>
                <a 
                href="https://twitter.com/YoungJunJoo1"
                target="_blank" 
                className="text-[#3e3e1f] dark:hover:text-white">
                    <FaTwitter size={20} />
                    <span className="sr-only">Twitter page</span>
                </a>
            </div>
        </div>
    </footer>

  )
}

export default Footer