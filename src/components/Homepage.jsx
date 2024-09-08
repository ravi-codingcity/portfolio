import React from "react";
import Bg_SVG from "../assets/svgexport.svg";
import Navbar from "./Navbar";
import Tech_tab from "./Tech_tab";
import Portfolio from "./Portfolio";
import Footer from "./Footer";
import ScrollToTopButton from "./ScrollTop";
import Blogs from "./Blogs";
import All_1 from "../assets/All_1.jpg";
import { FaReact } from "react-icons/fa";
import { RiTailwindCssFill } from "react-icons/ri";
import { FaHtml5 } from "react-icons/fa";
import { IoLogoCss3 } from "react-icons/io";
import { FaWordpress } from "react-icons/fa";
import { FaShopify } from "react-icons/fa";
import { TbBrandJavascript } from "react-icons/tb";

import {
  SiAdobephotoshop,
  SiAdobeillustrator,
  SiAdobeaftereffects,
  SiCoreldraw,
  SiAdobepremierepro,
} from "react-icons/si";
import Experience from "./Experience";

function Homepage() {
  return (
    <div
      className="bg-[#030014]  text-white"
      style={{
        backgroundImage: `url(${Bg_SVG})`,
        backgroundSize: "cover", // Optional: Adjust the background size
        backgroundPosition: "top", // Optional: Adjust the background position
        backgroundRepeat: "no-repeat",
      }}
    >
      <Navbar />
      <div className=" text-white text-center">
        <button className="py-5">Coding City</button>
        <h1 className="text-6xl font-bold py-5">
          Elevate Your Content with Our <br /> AI-Powered Writing Tool
        </h1>
        <p className="py-2 text-lg">
          Highly customizable Tailwind CSS template for AI - Tool, <br />
          Startup, Software, App and Product Sites. Comes with <br /> everything
          you need - pages, features, sections, <br /> components and more that
          you can easily customize.
        </p>
        <button className="py-3 rounded-md text-lg px-6 bg-gradient-to-b from-[#a073ee] via-[#a073ee] to-[#6e25ed]">
          Start Your Free Trial
        </button>
      </div>

      <div className="text-center">
        <button className="py-4">Some of Main Features</button>
        <h1 className="text-6xl font-bold py-4">Key Features of Our Tool</h1>
        <p className="py-4">
          Our AI writing tool is designed to empower you with exceptional
          writing capabilities, making <br /> the writing process more
          efficient, accurate, and enjoyable.
        </p>
        <div className="flex flex-wrap w-8/12 items-center justify-center m-auto py-4 gap-5 ">
          <Tech_tab icon={<FaReact className=" m-auto" />} title={"React Js"} />
          <Tech_tab
            icon={<RiTailwindCssFill className="m-auto" />}
            title={"Tailwind"}
          />
          <Tech_tab icon={<FaHtml5 className=" m-auto" />} title={"HTML"} />
          <Tech_tab icon={<IoLogoCss3 className=" m-auto" />} title={"CSS"} />
          <Tech_tab
            icon={<TbBrandJavascript className=" m-auto" />}
            title={"Javascript"}
          />
          <Tech_tab
            icon={<FaWordpress className=" m-auto" />}
            title={"Wordpress"}
          />
          <Tech_tab
            icon={<FaShopify className=" m-auto" />}
            title={"Shopify"}
          />
          <Tech_tab
            icon={<SiAdobephotoshop className=" m-auto" />}
            title={"Photoshop"}
          />
          <Tech_tab
            icon={<SiAdobeillustrator className=" m-auto" />}
            title={"Illustrator"}
          />
          <Tech_tab
            icon={<SiAdobepremierepro className=" m-auto" />}
            title={"Premier Pro"}
          />
          <Tech_tab
            icon={<SiAdobeaftereffects className=" m-auto" />}
            title={"After Effect"}
          />
          <Tech_tab
            icon={<SiCoreldraw className=" m-auto" />}
            title={"Corel Draw"}
          />
        </div>
      </div>

      <div>
        <h1 className="text-6xl font-bold py-4 text-center">Portfolio</h1>
        <Portfolio />
      </div>

      <div className="">
        <h1 className="text-6xl font-bold py-10 text-center ">
          Working Experience
        </h1>
        <Experience />
      </div>

      <div className="py-10">
        <h1 className="text-6xl font-bold py-8 text-center">
          Latest Blogs and News
        </h1>
        <div className="max-w-screen-lg grid grid-cols-1 md:grid-cols-3 sm:grid-cols-2 m-auto  justify-items-center">
          <Blogs
            img={All_1}
            h="Revolution in Content Creation and Communication"
            p="Lorem ipsum dolor sit amet, consectetur adipisc elit sed do eiusmod tempor incididunt ut labore et dolore magna oliumosd aliqua..."
          />
          <Blogs
            img={All_1}
            h="Revolution in Content Creation and Communication"
            p="Lorem ipsum dolor sit amet, consectetur adipisc elit sed do eiusmod tempor incididunt ut labore et dolore magna oliumosd aliqua..."
          />
          <Blogs
            img={All_1}
            h="Revolution in Content Creation and Communication"
            p="Lorem ipsum dolor sit amet, consectetur adipisc elit sed do eiusmod tempor incididunt ut labore et dolore magna oliumosd aliqua..."
          />
        </div>
      </div>

      <ScrollToTopButton />

      <Footer />
    </div>
  );
}

export default Homepage;
