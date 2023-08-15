import React from "react";

import Linux from "../assets/Linux.png";
import ReactImg from "../assets/react.png";
import SQL from "../assets/SQL.png";
import Node from "../assets/nodejs.png";
import Git from "../assets/git.png";
import AWS from "../assets/aws.png";
import Docker from "../assets/docker.png";
import Mongo from "../assets/mongo.png";

const Skills = () => {
  return (
    <div
      name='skills'
      className='w-full md:h-full bg-[#ede7dd] text-[#636060] py-[3rem]'
    >
      <div className='max-w-[1000px] mx-auto p-4 flex flex-col justify-center w-full h-full'>
        <div>
          <p className='text-[#3e3e1f] text-4xl font-bold inline border-b-4 border-[#8a3918] border-600 '>
            Skills
          </p>
          <p className='text-[#636060] py-4'>
            // These are the technologies I've worked with
          </p>
        </div>

        <div className='w-full grid grid-cols-2 sm:grid-cols-4 gap-6 text-center py-8 text-[#636060]'>
          <div className='pt-4 shadow-md shadow-[#636060] hover:scale-110 duration-500'>
            <img className='w-20 mx-auto' src={ReactImg} alt='React icon' />
            <p className='my-4'>React</p>
          </div>
          <div className='pt-4 shadow-md shadow-[#636060] hover:scale-110 duration-500'>
            <img className='w-20 mx-auto' src={Node} alt='Node.js icon' />
            <p className='my-4'>Node.js</p>
          </div>
          <div className='pt-4 shadow-md shadow-[#636060] hover:scale-110 duration-500'>
            <img className='w-20 mx-auto' src={SQL} alt='Express.js icon' />
            <p className='my-4'>PostgreSQL</p>
          </div>
          <div className='pt-4 shadow-md shadow-[#636060] hover:scale-110 duration-500'>
            <img className='w-20 mx-auto' src={Mongo} alt='Mongo icon' />
            <p className='my-4'>MongoDB</p>
          </div>
          <div className='pt-4 shadow-md shadow-[#636060] hover:scale-110 duration-500'>
            <img className='w-20 mx-auto' src={Git} alt='AWS icon' />
            <p className='my-4'>Git</p>
          </div>
          <div className='pt-4 shadow-md shadow-[#636060] hover:scale-110 duration-500'>
            <img className='w-20 mx-auto' src={Docker} alt='Tailwind icon' />
            <p className='my-4'>Docker</p>
          </div>
          <div className='pt-4 shadow-md shadow-[#636060] hover:scale-110 duration-500'>
            <img className='w-20 mx-auto' src={Linux} alt='Linux icon' />
            <p className='my-4'>Linux</p>
          </div>
          <div className='pt-4 shadow-md shadow-[#636060] hover:scale-110 duration-500'>
            <img className='w-20 mx-auto' src={AWS} alt='GitHub icon' />
            <p className='my-4'>AWS</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Skills;
