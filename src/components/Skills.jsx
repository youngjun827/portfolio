import React from "react";
import ReactImg from "../assets/react.png";
import NodeImg from "../assets/nodejs.png";
import SQLImg from "../assets/SQL.png";
import MongoImg from "../assets/mongo.png";
import GitImg from "../assets/git.png";
import DockerImg from "../assets/docker.png";
import LinuxImg from "../assets/Linux.png";
import AWSImg from "../assets/aws.png";

const skillsData = [
  { image: ReactImg, title: "React" },
  { image: NodeImg, title: "Node.js" },
  { image: SQLImg, title: "PostgreSQL" },
  { image: MongoImg, title: "MongoDB" },
  { image: GitImg, title: "Git" },
  { image: DockerImg, title: "Docker" },
  { image: LinuxImg, title: "Linux" },
  { image: AWSImg, title: "AWS" },
];

const Skills = () => {
  return (
    <div className='w-full md:h-full bg-[#ede7dd] text-[#636060] py-[3rem]'>
      <div className='max-w-[1000px] mx-auto p-4 flex flex-col justify-center w-full h-full'>
        <div>
          <p className='text-[#3e3e1f] text-4xl font-bold inline border-b-4 border-[#8a3918] border-600'>
            Skills
          </p>
          <p className='text-[#636060] py-4'>
            These are the technologies I've worked with
          </p>
        </div>

        <div className='w-full grid grid-cols-2 sm:grid-cols-4 gap-6 text-center py-8 text-[#636060]'>
          {skillsData.map((skill, index) => (
            <div
              key={index}
              className='pt-4 shadow-md shadow-[#636060] hover:scale-110 duration-500'
            >
              <img
                className='w-20 mx-auto'
                src={skill.image}
                alt={`${skill.title} icon`}
              />
              <p className='my-4'>{skill.title}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Skills;
