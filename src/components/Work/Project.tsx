import React from "react";

interface ProjectProps {
  title: string;
  demoLink: string;
  codeLink: string;
}

const Project: React.FC<ProjectProps> = ({ title, demoLink, codeLink }) => (
  <div className='opacity-0 group-hover:opacity-100'>
    <span className='text-2xl font-bold text-black tracking-wider'>
      {title}
    </span>
    <div className='pt-8 text-center'>
      <a href={demoLink} target='_blank' rel='noopener noreferrer'>
        <button className='text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg'>
          Demo
        </button>
      </a>
      <a href={codeLink} target='_blank' rel='noopener noreferrer'>
        <button className='text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg'>
          Code
        </button>
      </a>
    </div>
  </div>
);

export default Project;
