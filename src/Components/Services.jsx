import React from "react";
import education from "../assets/education.png";
import language from "../assets/foreign-language.png";
import interview from "../assets/interview.png";

const Services = () => {
  return (
    <div id="services" className="w-full py-[10rem] px-4 bg-white">
      <div className="max-w-[1240px] mx-auto grid md:grid-cols-3 gap-8">
        <div className="w-full shadow-xl flex flex-col p-4 my-4 rounded-lg hover:scale-105 duration-300">
          <img
            className="w-20 mx-auto mt-[-3rem] bg-white"
            src={education}
            alt="/"
          />
          <h2 className="text-2xl font-bold text-center py-8">
            Educational Tutoring
          </h2>
          <div className="text-center font-medium">
            <p className="py-2 border-b mx-8 mt-8">Subject-Specific Help</p>
            <p className="py-2 border-b mx-8">Homework Assistance</p>
            <p className="py-2 border-b mx-8">Quizzes and Flashcards</p>
          </div>
          <button
            onClick={() =>
              (window.location.href = "https://sasha-ai-assistant.netlify.app/")
            }
            className="bg-[#df0056] w-[200px] rounded-md font-medium my-6 mx-auto px-6 py-3"
          >
            Let’s Start Talking
          </button>
        </div>
        <div className="w-full shadow-xl bg-gray-100 flex flex-col p-4 md:my-0 my-8 rounded-lg hover:scale-105 duration-300">
          <img
            className="w-20 mx-auto mt-[-3rem] bg-transparent"
            src={language}
            alt="/"
          />
          <h2 className="text-2xl font-bold text-center py-8">
            Language Learning
          </h2>
          <div className="text-center font-medium">
            <p className="py-2 border-b mx-8 mt-8">Pronunciation Practice</p>
            <p className="py-2 border-b mx-8">Conversation Simulations</p>
            <p className="py-2 border-b mx-8">Vocabulary Building</p>
          </div>
          <button
            onClick={() =>
              (window.location.href = "https://sasha-ai-assistant.netlify.app/")
            }
            className="bg-black text-[#df0056] w-[200px] rounded-md font-medium my-6 mx-auto px-6 py-3"
          >
            Let’s Start Talking
          </button>
        </div>
        <div className="w-full shadow-xl flex flex-col p-4 my-4 rounded-lg hover:scale-105 duration-300">
          <img
            className="w-20 mx-auto mt-[-3rem] bg-white"
            src={interview}
            alt="/"
          />
          <h2 className="text-2xl font-bold text-center py-8">
            Interview Preparation
          </h2>
          <div className="text-center font-medium">
            <p className="py-2 border-b mx-8 mt-8">Mock Interview Practice</p>
            <p className="py-2 border-b mx-8">Behavioral Question Guidance</p>
            <p className="py-2 border-b mx-8">Instant Feedback</p>
          </div>
          <button
            onClick={() =>
              (window.location.href = "https://sasha-ai-assistant.netlify.app/")
            }
            className="bg-[#df0056] w-[200px] rounded-md font-medium my-6 mx-auto px-6 py-3"
          >
            Let’s Start Talking
          </button>
        </div>
      </div>
    </div>
  );
};

export default Services;
