import React from "react";

import Linux from "../assets/Linux.png";
import ReactImg from "../assets/react.png";
import Express from "../assets/express.png";
import Node from "../assets/node.png";
import AWS from "../assets/aws.png";
import GitHub from "../assets/github-black.png";
import Tailwind from "../assets/tailwind.png";
import Mongo from "../assets/mongo.png";

const Skills = () => {
  return (
    <div
      name="skills"
      className="w-full md:h-screen bg-[#ede7dd]  text-[#636060]"
    >
      {/* Container */}
      <div className="max-w-[1000px] mx-auto p-4 flex flex-col justify-center w-full h-full">
        <div>
          <p className="text-[#3e3e1f] text-4xl font-bold inline border-b-4 border-[#8a3918] border-600 ">
            Skills
          </p>
          <p className="text-[#636060] py-4">
            // These are the technologies I've worked with
          </p>
        </div>

        <div className="w-full grid grid-cols-2 sm:grid-cols-4 gap-6 text-center py-8 text-[#636060]">
          <div className="pt-4 shadow-md shadow-[#636060] hover:scale-110 duration-500">
            <img className="w-20 mx-auto" src={ReactImg} alt="React icon" />
            <p className="my-4">React</p>
          </div>
          <div className="pt-4 shadow-md shadow-[#636060] hover:scale-110 duration-500">
            <img className="w-20 mx-auto" src={Node} alt="Node.js icon" />
            <p className="my-4">Node.js</p>
          </div>
          <div className="pt-4 shadow-md shadow-[#636060] hover:scale-110 duration-500">
            <img className="w-20 mx-auto" src={Express} alt="Express.js icon" />
            <p className="my-4">Express.js</p>
          </div>
          <div className="pt-4 shadow-md shadow-[#636060] hover:scale-110 duration-500">
            <img className="w-20 mx-auto" src={Mongo} alt="Mongo icon" />
            <p className="my-4">MongoDB</p>
          </div>
          <div className="pt-4 shadow-md shadow-[#636060] hover:scale-110 duration-500">
            <img className="w-20 mx-auto" src={Tailwind} alt="Tailwind icon" />
            <p className="my-4">Tailwind</p>
          </div>

          <div className="pt-4 shadow-md shadow-[#636060] hover:scale-110 duration-500">
            <img className="w-20 mx-auto" src={GitHub} alt="GitHub icon" />
            <p className="my-4">GitHub</p>
          </div>
          <div className="pt-4 shadow-md shadow-[#636060] hover:scale-110 duration-500">
            <img className="w-20 mx-auto" src={AWS} alt="AWS icon" />
            <p className="my-4">AWS</p>
          </div>
          <div className="pt-4 shadow-md shadow-[#636060] hover:scale-110 duration-500">
            <img className="w-20 mx-auto" src={Linux} alt="Linux icon" />
            <p className="my-4">Linux</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Skills;
