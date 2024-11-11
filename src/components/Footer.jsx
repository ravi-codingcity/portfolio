import React from "react";
import { FaInstagram } from "react-icons/fa6";
import { FaLinkedin } from "react-icons/fa";
import { FaGithubSquare } from "react-icons/fa";

function Footer() {
  return (
    <div className="pt-16">
      <div className="flex justify-center gap-4 text-4xl py-2">
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

      <div className="text-center py-4">All Right Reserved | 2024</div>
    </div>
  );
}

export default Footer;
