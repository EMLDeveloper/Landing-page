import React, { useState, useEffect } from "react";
import { AiOutlineClose, AiOutlineMenu } from "react-icons/ai";
import { Link } from "react-scroll";

const Navbar = () => {
  const [nav, setNav] = useState(false);

  const handleNav = () => {
    setNav(!nav);
  };

  // Close the navbar on scroll
  const handleScroll = () => {
    if (nav) {
      setNav(false);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);

    // Cleanup the event listener on component unmount
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [nav]);

  return (
    <div className="flex justify-between items-center h-24 max-w-[1240px] mx-auto px-4 text-white">
      <Link
        to="home"
        smooth={true}
        duration={500}
        className="w-full text-3xl font-bold text-[#df0056] cursor-pointer"
      >
        Sasha AI
      </Link>
      <ul className="hidden md:flex">
        <li className="p-4">
          <Link
            to="home"
            smooth={true}
            duration={500}
            className="text-gray-300 hover:text-[#df0056] cursor-pointer"
          >
            Home
          </Link>
        </li>
        <li className="p-4">
          <Link
            to="about"
            smooth={true}
            duration={500}
            className="text-gray-300 hover:text-[#df0056] cursor-pointer"
          >
            About
          </Link>
        </li>
        <li className="p-4">
          <Link
            to="services"
            smooth={true}
            duration={500}
            className="text-gray-300 hover:text-[#df0056] cursor-pointer"
          >
            Services
          </Link>
        </li>
        <li className="p-4">
          <Link
            to="contact"
            smooth={true}
            duration={500}
            className="text-gray-300 hover:text-[#df0056] cursor-pointer"
          >
            Contact
          </Link>
        </li>
      </ul>
      <div onClick={handleNav} className="block md:hidden cursor-pointer">
        {!nav ? <AiOutlineMenu size={20} /> : <AiOutlineClose size={20} />}
      </div>
      <div
        className={`fixed left-0 top-0 w-[60%] h-full border-r border-r-gray-900 bg-[#000300] ease-in-out duration-500 ${
          nav ? "block" : "left-[-100%]"
        } md:hidden`}
      >
        <Link
          to="home"
          smooth={true}
          duration={500}
          className="w-full text-3xl font-bold text-[#df0056] m-4 cursor-pointer"
        >
          Sasha AI
        </Link>
        <ul className="uppercase p-4">
          <li className="p-4 border-b border-gray-600">
            <Link
              to="home"
              smooth={true}
              duration={500}
              className="text-gray-300 hover:text-[#df0056] cursor-pointer"
            >
              Home
            </Link>
          </li>
          <li className="p-4 border-b border-gray-600">
            <Link
              to="about"
              smooth={true}
              duration={500}
              className="text-gray-300 hover:text-[#df0056] cursor-pointer"
            >
              About
            </Link>
          </li>
          <li className="p-4 border-b border-gray-600">
            <Link
              to="services"
              smooth={true}
              duration={500}
              className="text-gray-300 hover:text-[#df0056] cursor-pointer"
            >
              Services
            </Link>
          </li>
          <li className="p-4 border-b border-gray-600">
            <Link
              to="contact"
              smooth={true}
              duration={500}
              className="text-gray-300 hover:text-[#df0056] cursor-pointer"
            >
              Contact
            </Link>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
