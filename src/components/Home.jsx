import React, { Suspense } from "react";
import { HiArrowNarrowRight } from "react-icons/hi";
import { Link } from "react-scroll";
import { Canvas } from "@react-three/fiber";
import { OrbitControls } from "@react-three/drei";
import Sphere from "./AnimatedSphere";
import Box from "./Box";
import Computer from "./Computer";

const Home = () => {
  return (
    <div name="home" className="w-full h-screen bg-[#ede7dd]">
      {/* Container */}
      <div className="max-w-[1024px] mx-auto h-full pt-32 sm:pt-0 md:pt-0 flex flex-col sm:flex-row items-center justify-evenly">
        <div className="ml-4 lg:ml-0 sm:max-h-[500px] sm:max-w-[350px] md:max-h-[400px] md:max-w-[380px] lg:max-h-[500px] lg:max-w-[500px] ">
          <p className=" text-[#3e3e1f] font-semibold">Hi, my name is</p>
          <h1 className="text-6xl md:max-w-[563px] text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-[#8a3918]">
            Young Jun
          </h1>
          <h2 className=" pt-2 mb-2 text-xl text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold text-[#ceb69b]">
            I bake cookies in my Watson for a living.
          </h2>

          <div className="flex flex-row mb-4 mt-2">
            <p className="text-sm sm:text-base font-medium text-[#898382] ">
              Would you like to try some?
              <p className="text-sm sm:text-base font-medium pl-48 sm:pl-48 md:pl-52 lg:pl-60">
                ...no?
              </p>
              <h2 className="text-sm sm:text-base font-medium text-[#898382] pl-64 sm:pl-56 md:pl-64 lg:pl-80">
                well... I hope you
              </h2>
            </p>
          </div>

          {/* Hide button:         <div className="max-w-[563px] invisible lg:visible"> */}
            <div className="w-48">
              {/*<Link to="work" smooth={true} duration={500}>*/}
              <a href="https://www.youtube.com/watch?v=5qap5aO4i9A">
                  <button className="mb-4 text-[#3e3e1f] text-sm md:text-base group border-2 px-5 py-2 md:px-6 md:py-3 flex items-center border-[#3e3e1f] hover:border-black hover:text-black hover:shadow-2xl">
                    stay comfy! ✿
                      {/* Hide button:                 <HiArrowNarrowRight className="invisible lg:visible ml-3 " />*/}
                      <HiArrowNarrowRight className="ml-3 " />
                  </button>
                </a>
              {/*</Link>*/}
            </div>
        </div>

        <Canvas className="max-h-[340px] max-w-[260px] sm:max-h-[500px] sm:max-w-[276px] md:max-h-[575px] md:max-w-[370px] lg:max-h-max lg:max-w-[500px] flex flex-col justify-center">
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
  );
};

export default Home;
