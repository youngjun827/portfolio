import React from 'react'

import Logo from "../assets/JOO_white.png";
import { Link } from "react-scroll";

function Navigation() {
  return (
    <div className="w-full h-[75px] z-50 flex justify-around items-center px-4 bg-[#3e3e1f] text-white font-medium rounded-md">
      <div>
        <Link to="home" smooth={true} duration={500}>
          <img src={Logo} alt="Logo Image" style={{ width: "50px" }} />
        </Link>
      </div>

      {/* menu */}
      {/* <ul className="hidden md:flex">
        <li className="mx-4">
          <Link to="home" smooth={true} duration={500}>
            Home
          </Link>
        </li>
        <li className="mx-4">
          <Link to="about" smooth={true} duration={500}>
            About
          </Link>
        </li>
        <li className="mx-4">
          <Link to="skills" smooth={true} duration={500}>
            Skills
          </Link>
        </li>
        <li className="mx-4">
          <Link to="work" smooth={true} duration={500}>
            Work
          </Link>
        </li>
        <li className="mx-4">
          <Link to="contact" smooth={true} duration={500}>
            Contact
          </Link>
        </li>
      </ul> */}

      {/* Hamburger */}
      {/* <div onClick={handleClick} className="md:hidden z-10">
        {!nav ? <FaBars /> : <FaTimes />}
      </div> */}

      {/* Mobile menu */}
      {/* <ul
        className={
          !nav
            ? "hidden"
            : "absolute top-0 left-0 w-full h-screen bg-[#ceb69b] flex flex-col justify-center items-center"
        }
      >
        <li className="py-6 text-4xl">
          <Link onClick={handleClick} to="home" smooth={true} duration={500}>
            Home
          </Link>
        </li>
        <li className="py-6 text-4xl">
          <Link onClick={handleClick} to="about" smooth={true} duration={500}>
            About
          </Link>
        </li>
        <li className="py-6 text-4xl">
          <Link onClick={handleClick} to="skills" smooth={true} duration={500}>
            Skills
          </Link>
        </li>
        <li className="py-6 text-4xl">
          <Link onClick={handleClick} to="work" smooth={true} duration={500}>
            Work
          </Link>
        </li>
        <li className="py-6 text-4xl">
          <Link onClick={handleClick} to="contact" smooth={true} duration={500}>
            Contact
          </Link>
        </li>
      </ul> */}

    </div>
  )
}

export default Navigation