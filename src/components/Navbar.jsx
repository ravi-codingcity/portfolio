import React, { useState } from "react";
import { FaInstagram, FaLinkedin, FaGithubSquare } from "react-icons/fa";
import { Link } from "react-scroll";
import { AiOutlineMenu, AiOutlineClose } from "react-icons/ai";

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const handleToggle = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="bg-transparent flex justify-between items-center text-white py-6 max-w-screen-xl m-auto px-4">
      {/* Logo */}
      <div className="text-4xl font-bold">Coding City</div>

      {/* Hamburger Icon (shown on mobile) */}
      <div className="lg:hidden text-2xl cursor-pointer" onClick={handleToggle}>
        {isOpen ? <AiOutlineClose /> : <AiOutlineMenu />}
      </div>

      {/* Sliding Nav Links and Social Icons */}
      <div
        className={`fixed top-0 right-0 h-full bg-black text-white w-2/3 m-auto lg:hidden transform ${
          isOpen ? "translate-x-0" : "translate-x-full"
        } transition-transform duration-300 ease-in-out z-50`}
      >
        {/* Close Icon inside sliding menu */}
        <div className="flex justify-end p-4">
          <AiOutlineClose
            className="text-2xl cursor-pointer"
            onClick={handleToggle}
          />
        </div>

        {/* Navigation Links */}
        <ul className="flex flex-col gap-5 p-6 m-auto">
          <Link to="/" smooth={true} onClick={handleToggle}>
            <li className="cursor-pointer">Home</li>
          </Link>
          <Link to="Tech" smooth={true} duration={500} onClick={handleToggle}>
            <li className="cursor-pointer">Tech</li>
          </Link>
          <Link
            to="Portfolio"
            smooth={true}
            duration={700}
            onClick={handleToggle}
          >
            <li className="cursor-pointer">Projects</li>
          </Link>
          <Link
            to="Experience"
            smooth={true}
            duration={1000}
            onClick={handleToggle}
          >
            <li className="cursor-pointer">Experience</li>
          </Link>
          <Link
            to="Contact"
            smooth={true}
            duration={1000}
            onClick={handleToggle}
          >
            <li className="cursor-pointer">Contact</li>
          </Link>
        </ul>

        {/* Social Media Icons */}
        <div className="flex justify-center gap-4 text-3xl mt-4">
          <a
            href="https://www.linkedin.com/in/ravi-chaudhary-coding-city/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaLinkedin />
          </a>
          <a
            href="https://www.instagram.com/mr.chaudhary108"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaInstagram />
          </a>
          <a
            href="https://github.com/ravi-codingcity"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaGithubSquare />
          </a>
        </div>
      </div>

      {/* Desktop Menu */}

      <div className="hidden lg:flex items-center justify-start  space-x-10 ">
        <ul className="flex gap-10 ">
          <Link to="/" smooth={true} className="cursor-pointer">
            <li>Home</li>
          </Link>
          <Link
            to="Tech"
            smooth={true}
            duration={500}
            className="cursor-pointer"
          >
            <li>Tech</li>
          </Link>
          <Link
            to="Portfolio"
            smooth={true}
            duration={700}
            className="cursor-pointer"
          >
            <li>Projects</li>
          </Link>
          <Link
            to="Experience"
            smooth={true}
            duration={1000}
            onClick={handleToggle}
          >
            <li className="cursor-pointer">Experience</li>
          </Link>
          <Link
            to="Contact"
            smooth={true}
            duration={1000}
            className="cursor-pointer"
          >
            <li>Contact</li>
          </Link>
        </ul>
        <div className="flex gap-4 text-4xl py-2 items-center">
          <a
            href="https://www.linkedin.com/in/ravi-chaudhary-coding-city/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaLinkedin />
          </a>
          <a
            href="https://www.instagram.com/mr.chaudhary108"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaInstagram />
          </a>
          <a
            href="https://github.com/ravi-codingcity"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaGithubSquare />
          </a>
        </div>
      </div>
    </div>
  );
}

export default Navbar;
