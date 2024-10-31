import React from "react";
import DeviceF from "../assets/deviceF.png";

const about = () => {
  return (
    <div id="about" className="w-full bg-white py-16 px-4">
      <div className="max-w-[1240px] mx-auto grid md:grid-cols-2">
        <img className="w-[500px] mx-auto my-4" src={DeviceF} alt="/" />
        <div className="flex flex-col justify-center">
          <p className="text-[#df0056]">Under the Hood of Sasha:</p>
          <h1 className="md:text-4xl sm:text-3xl text-2xl font-bold py-2">
            Meet Your AI Assistant:
          </h1>
          <p>
            Sasha AI is a versatile virtual assistant built to adapt to roles
            like interviewer, educator, and sales assistant. Utilizing OpenAI’s
            conversational intelligence, Sasha AI provides insightful and
            natural responses, making interactions feel engaging and
            personalized. The assistant’s voice capabilities are powered by
            Eleven Labs, delivering high-quality, lifelike audio that enhances
            the user experience. Built with Python and FastAPI for robust
            backend performance, and React with Tailwind CSS for a seamless,
            responsive interface, Sasha AI brings reliable, real-time support
            across a range of professional settings
          </p>
          <button
            onClick={() =>
              (window.location.href = "https://sasha-ai-assistant.netlify.app/")
            }
            className="bg-black text-[#df0056] w-[200px] rounded-md font-medium my-6 mx-auto md:mx-0 py-3 "
          >
            Live Demo
          </button>
        </div>
      </div>
    </div>
  );
};

export default about;
