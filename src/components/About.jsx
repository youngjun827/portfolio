import React from "react";

const About = () => {
  return (
    <div name="about" className="w-full h-full bg-[#3e3e1f] py-[4rem]">
      <div className="flex flex-col justify-center items-center w-full h-full">
        <div className="max-w-[1000px] w-full grid grid-cols-2 gap-8">
          <div className="sm:text-right pb-8 pl-4">
            <p className="text-[#ede7dd] text-4xl font-bold inline border-b-4 border-[#8a3918] border-800">
              About
            </p>
          </div>
          <div></div>
        </div>
        <div className="max-w-[1000px] w-full grid sm:grid-cols-2 gap-8 px-4">
          <div className="text-[#ede7dd] sm:text-right text-4xl font-bold">
            <p>
              Math brings me joy, and I live off satisfaction of <br></br>
              git push -u origin main
            </p>
          </div>
          <div>
            <p className="text-[#ede7dd]">
              Hi hello! <br></br>I am Young Jun. I like talking, Korean bbq,
              soju, listening to K-R&B, and coffee. I am an incoming student at
              the University of Waterloo. During the time off work, I dedicate
              my time collaborating with a group of enthusiasts to create
              software and web that I find interesting.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
