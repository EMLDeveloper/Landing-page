import React from "react";
import { ReactTyped } from "react-typed";

const Hero = () => {
  return (
    <div id="home" className="text-white">
      <div className="max-w-[800px] mt-[-96px] w-full h-screen mx-auto text-center flex flex-col justify-center">
        <p className="text-[#df0056] font-bold p-2">
          Empowering Conversations with AI
        </p>
        <h1 className="md:text-7xl sm:text-6xl text-4xl font-bold md:py-6">
          Your Partner in Smarter Operations
        </h1>
        <div className="flex justify-center items-center">
          <p className="md:text-5xl sm:text-4xl text-xl font-bold py-4">
            Scalable Solutions for
          </p>
          <ReactTyped
            className="text-[#df0056] md:text-5xl sm:text-4xl text-xl font-bold md:pl-4 pl-2"
            strings={["Growth", " Innovation", " Results"]}
            typeSpeed={120}
            backSpeed={140}
            loop
          />
        </div>
        <p className="md:text-2xl text-xl font-bold text-gray-500">
          Designed to optimize workflows and enhance decision-making.
        </p>
        <button
          onClick={() =>
            (window.location.href = "https://sasha-ai-assistant.netlify.app/")
          }
          className="bg-[#df0056] w-[200px] rounded-md font-medium my-6 mx-auto py-3 text-black"
        >
          Connect with AI
        </button>
      </div>
    </div>
  );
};

export default Hero;
