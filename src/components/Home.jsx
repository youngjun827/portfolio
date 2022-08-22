import React, { Suspense } from "react";
import { HiArrowNarrowRight } from "react-icons/hi";
import { Link } from "react-scroll";
import { Canvas } from "@react-three/fiber";
import { OrbitControls } from "@react-three/drei";
import Computer from "./Computer";

import Navigation from "./Navigation";

const Home = () => {
  return (
    <>
      <Navigation/>
      <div name="home" className="w-full h-full sm:h-screen bg-[#ede7dd]">
        {/* Container */}
        <div className="max-w-[1024px] mx-auto py-[32px] sm:py-[0] md:px-[10px] lg:px-[0] h-full flex flex-col md:flex-wrap md:flex-row items-center justify-center">
          {/* <div className="mb-[10px] mx-[2rem] sm:mx-[0] mt-[4rem] sm:mx-[0] mx-auto min-w-[375px] sm:mt-[60px] sm:mb-[20px] sm:mb-[5px] sm:max-h-[300px] sm:max-w-[486px] md:max-h-[400px] md:max-w-[374px] lg:max-h-[500px] lg:max-w-[496px] "> */}
          <div className="mb-[10px] mx-[2rem] sm:mx-[0] mx-auto min-w-[375px] sm:mb-[20px] sm:mb-[5px] sm:max-h-[300px] sm:max-w-[486px] md:max-h-[400px] md:max-w-[374px] lg:max-h-[500px] lg:max-w-[496px] ">
            <p className=" text-[#3e3e1f] font-semibold">Hi, my name is</p>
            <h1 className="text-6xl sm:text-[4rem] md:text-7xl font-bold text-[#8a3918]">
              Young Jun
            </h1>
            <h2 className="pt-2 mb-2 text-4xl sm:text-4xl font-bold text-[#ceb69b]">
              I bake cookies in my Watson for a living.
            </h2>

            <div className="mb-4 mt-2">
              <span className="text-[0.9rem] sm:text-base font-medium text-[#898382]">
                Would you like to try some?
                <p className="text-[0.9rem] sm:text-base font-medium pl-[12.2rem] sm:pl-60 md:pl-52 lg:pl-60">
                  ...no?
                </p>
                <h2 className="text-[0.9rem] sm:text-base font-medium text-[#898382] pl-[15rem] sm:pl-80 md:pl-[250px] lg:pl-80">
                  well... I hope you
                </h2>
              </span>
            </div>

            {/* Hide button:         <div className="max-w-[563px] invisible lg:visible"> */}
            <div className="w-48">
              {/*<Link to="work" smooth={true} duration={500}>*/}
              <a href="https://www.youtube.com/watch?v=1fueZCTYkpA">
                <button className=" text-[#3e3e1f] text-sm md:text-base group border-2 px-5 py-2 md:px-6 md:py-3 flex items-center border-[#3e3e1f] hover:border-black hover:text-black hover:shadow-2xl">
                  stay comfy! ✿
                  {/* Hide button:                 <HiArrowNarrowRight className="invisible lg:visible ml-3 " />*/}
                  <HiArrowNarrowRight className="ml-3 " />
                </button>
              </a>
              {/*</Link>*/}
            </div>
          </div>

          <Canvas className="hidden sm:block mx-auto lg:px-[0] max-h-[300px] max-w-[240px] sm:max-h-[300px] sm:max-w-[496px] md:max-h-[505px] md:max-w-[350px] lg:max-h-[605px] lg:max-w-[496px] shadow-lg shadow-[#ceb69b]">
            <OrbitControls enableZoom={false}></OrbitControls>
            <ambientLight intensity={0.5}></ambientLight>
            <directionalLight
              position={[-2, 5, 2]}
              intensity={1}
            ></directionalLight>
            <Suspense fallback={null}>
              <Computer></Computer>
            </Suspense>
          </Canvas>
        </div>
      </div>
    </>
  );
};

export default Home;
