import React from "react";
import { FaInstagram } from "react-icons/fa6";
import { FaLinkedin } from "react-icons/fa";
import { FaGithubSquare } from "react-icons/fa";

function Navbar() {
  return (
    <div className="bg-transparent flex justify-around items-center text-white py-6">
      <div className="text-2xl font-bold">Coding City</div>
      <div>
        <ul className="flex gap-5">
          <li>Home</li>
          <li>Tech</li>
          <li>Projects</li>
          <li>Contact</li>
        </ul>
      </div>
      <div>
        <div className="flex justify-center gap-4 text-4xl py-2">
          <FaInstagram />
          <FaLinkedin />
          <FaGithubSquare />
        </div>
      </div>
    </div>
  );
}

export default Navbar;
