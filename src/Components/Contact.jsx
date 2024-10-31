import React from "react";

const Contact = () => {
  return (
    <div id="contact" className="w-full py-16 text-white px-4">
      <div className="max-w-[1240px] mx-auto flex flex-col items-center text-center">
        <h1 className="md:text-4xl sm:text-3xl text-2xl font-bold py-2">
          Want tips & tricks to optimize your flow?
        </h1>
        <p className="mb-8">
          {" "}
          {/* Add margin bottom for spacing */}
          Send us a message and stay up to date with our Software.
        </p>

        {/* Centered button */}
        <div className="my-4">
          <a
            href="mailto:EnmanuelleML@outlook.com"
            className="text-black bg-[#df0056] w-[200px] rounded-md font-medium my-6 px-6 py-3 text-center"
          >
            Contact Us
          </a>
        </div>
      </div>
    </div>
  );
};

export default Contact;
