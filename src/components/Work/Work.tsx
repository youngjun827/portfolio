import React from "react";
import UW from "../../assets/uw-screen-shot.png";
import Project from "./Project";

const Work = () => {
  return (
    <div data-testid='work' className='w-full md:h-full bg-[#3e3e1f] py-[3rem]'>
      <div className='max-w-[1000px] mx-auto p-4 flex flex-col justify-center w-full h-full'>
        <div className='pb-8'>
          <p className='text-[#ede7dd] text-4xl font-bold inline border-b-4 border-[#8a3918] border-600'>
            Work
          </p>
          <p className='py-4 text-[#ede7dd]'>
            Check out some of my recent work
          </p>
        </div>

        <div className='grid sm:grid-cols-2 md:grid-cols-3 gap-4'>
          <div
            style={{
              backgroundImage: `url(${UW})`,
              backgroundSize: "contain",
              backgroundPosition: "center",
              backgroundRepeat: "no-repeat",
            }}
            className='shadow-lg shadow-[#040c16] group container rounded-md flex justify-center items-center mx-auto content-div bg-[#FFEE00]'
          >
            <Project
              title='UW GitHub Finder'
              demoLink='https://uwaterloo-github-finder.netlify.app/'
              codeLink='https://github.com/youngjun827/uwaterloo-github-finder'
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Work;
