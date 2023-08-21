import React from "react";

import Logo from "../assets/JOO_white.png";
import { Link } from "react-scroll";

const Navigation = () => {
  return (
    <div className='w-full h-[75px] z-50 flex justify-around items-center px-4 bg-[#3e3e1f] text-white font-medium rounded'>
      <div>
        <Link to='home' smooth={true} duration={500} aria-label='Home'>
          <img src={Logo} alt='Logo' style={{ width: "50px" }} />
        </Link>
      </div>
    </div>
  );
};

export default Navigation;
