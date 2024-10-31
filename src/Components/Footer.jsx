import React from "react";
import { Link } from "react-scroll";

const Footer = () => {
  return (
    <div className="max-w-[1240px] mx-auto py-16 px-4 grid lg:grid-cols-3 gap-8 text-gray-300">
      <div>
        <h1 className="w-full text-3xl font-bold text-[#df0056] cursor-pointer">
          <Link to="home" smooth={true} duration={500}>
            Sasha AI
          </Link>
        </h1>
        <p className="py-4">
          Sasha AI—your intelligent companion for smarter assistance. From
          interview prep to language learning, Sasha is here to make every
          interaction seamless and productive. Powered by advanced AI for
          insights you can trust.
        </p>
        {/* Uncomment and add social icons as needed */}
        {/* <div className="flex justify-between md:w-[75%] my-6">
          <FaFacebookSquare size={30} />
          <FaInstagram size={30} />
          <FaTwitterSquare size={30} />
          <FaGithubSquare size={30} />
          <FaDribbbleSquare size={30} />
        </div> */}
      </div>
      <div className="lg:col-span-2 flex justify-between mt-6">
        <div>
          <h6 className="font-medium text-gray-400">Explore</h6>
          <ul>
            <li className="py-2 text-sm cursor-pointer">
              <Link
                to="home"
                smooth={true}
                duration={500}
                className="text-gray-300 hover:text-[#df0056]"
              >
                Sasha AI
              </Link>
            </li>
            <li className="py-2 text-sm cursor-pointer">
              <Link
                to="about"
                smooth={true}
                duration={500}
                className="text-gray-300 hover:text-[#df0056]"
              >
                About Us
              </Link>
            </li>
            <li className="py-2 text-sm cursor-pointer">
              <Link
                to="services"
                smooth={true}
                duration={500}
                className="text-gray-300 hover:text-[#df0056]"
              >
                Services
              </Link>
            </li>
            <li className="py-2 text-sm cursor-pointer">
              <Link
                to="contact"
                smooth={true}
                duration={500}
                className="text-gray-300 hover:text-[#df0056]"
              >
                Contact Us
              </Link>
            </li>
          </ul>
        </div>
        <div>
          <h6 className="font-medium text-gray-400">Resources</h6>
          <ul>
            <li className="py-2 text-sm">
              <a
                href="https://elevenlabs.io/docs/introduction"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-300 hover:text-[#df0056]"
              >
                Documentation
              </a>
            </li>
            <li className="py-2 text-sm">
              <a
                href="https://elevenlabs.io/docs/guides/getting-started"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-300 hover:text-[#df0056]"
              >
                Guides
              </a>
            </li>
            <li className="py-2 text-sm">
              <a
                href="https://elevenlabs.io/docs/api-reference/generate-voice-parameters#voice-generation-parameters"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-300 hover:text-[#df0056]"
              >
                API Status
              </a>
            </li>
          </ul>
        </div>
        <div>
          <h6 className="font-medium text-gray-400">Company</h6>
          <ul>
            <li className="py-2 text-sm cursor-pointer">
              <Link
                to="about"
                smooth={true}
                duration={500}
                className="text-gray-300 hover:text-[#df0056]"
              >
                About
              </Link>
            </li>
            <li className="py-2 text-sm cursor-pointer">
              <Link
                to="services"
                smooth={true}
                duration={500}
                className="text-gray-300 hover:text-[#df0056]"
              >
                Services
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Footer;
