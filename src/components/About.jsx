import React from "react";

const About = () => {
  return (
    <div name="about" className="w-full h-screen bg-[#ede7dd] ">
      <div className="flex flex-col justify-center items-center w-full h-full">
        <div className="max-w-[1000px] w-full grid grid-cols-2 gap-8">
          <div className="sm:text-right pb-8 pl-4">
            <p className="text-[#3e3e1f] text-4xl font-bold inline border-b-4 border-[#8a3918] border-800">
              About
            </p>
          </div>
          <div></div>
        </div>
        <div className="max-w-[1000px] w-full grid sm:grid-cols-2 gap-8 px-4">
          <div className="text-[#3e3e1f] sm:text-right text-4xl font-bold">
            <p>
              Math brings me joy, and I live off satisfaction of <br></br>
              git push -u origin main
            </p>
          </div>
          <div>
            <p>
              Hi hello! <br></br>I am Young Jun. I like talking, korean bbq,
              soju, listening to K-R&B, and coffee. I am an incomming student to
              the University of Waterloo. During the time off-work, I dedicate
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
