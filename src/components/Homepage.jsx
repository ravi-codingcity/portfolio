import React from "react";
import "../App.css";
import Bg_SVG from "../assets/svgexport.svg";
import Bg_R_SVG from "../assets/svgexport_R.svg";
import Navbar from "./Navbar";
import Tech_tab from "./Tech_tab";
import Portfolio from "./Portfolio";
import Footer from "./Footer";
import ScrollToTopButton from "./ScrollTop";
import Blogs from "./Blogs";
import All_1 from "../assets/All_1.jpg";
import { GiBookCover } from "react-icons/gi";
import { FaArrowDown } from "react-icons/fa6";
import { TbDeviceDesktopStar } from "react-icons/tb";
import React_icon from "../assets/react.svg";
import html_icon from "../assets/html.svg";
import css_icon from "../assets/css.svg";
import js_icon from "../assets/js.svg";
import wordpress_icon from "../assets/wordpress.svg";
import shopify_icon from "../assets/shopify.svg";
import photoshop_icon from "../assets/photoshop.svg";
import Illustrator_icon from "../assets/Illustrator.svg";
import Premierpro_icon from "../assets/Premierpro.svg";
import {
  SiAdobeaftereffects,
  SiCoreldraw,
  SiAdobepremierepro,
} from "react-icons/si";
import Experience from "./Experience";
import Contact_Form from "./Contact_Form";

function Homepage() {
  // Scroll down handler
  const handleScroll = () => {
    // Scroll down by 100 pixels (adjust this value as needed)
    window.scrollBy({
      top: 600, // Scroll down 100 pixels
      behavior: "smooth", // Smooth scrolling
    });
  };

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
      <div className="text-white text-center pb-16 ">
        <div className="py-5">Coding City</div>
        <h1 className="text-6xl font-bold py-5 leading-snug">
          Coding is not just a job <br /> It's an Adventure
        </h1>
        <p className="py-8 text-lg">
          Hello! I’m a Frontend Developer and Graphics Designer with over 4
          years <br />
          of experience, blending creativity with technical skills to bring
          <br />
          ideas to life.
        </p>
        <button
          onClick={handleScroll} // Add onClick event to the button
          className="relative inline-flex h-12 active:scale-95 transition overflow-hidden rounded-lg p-[2px] focus:outline-none"
        >
          {/* Spinning Gradient Border */}
          <span className="absolute inset-[-1000%] animate-slow-spin bg-[conic-gradient(from_90deg_at_50%_50%,#e7029a_0%,#f472b6_50%,#bd5fff_100%)]"></span>

          {/* Button Content */}
          <span className="inline-flex h-full w-full cursor-pointer items-center justify-center rounded-lg bg-purple-900 px-7 text-sm font-medium text-white backdrop-blur-3xl gap-2">
            Explore My Journey
            <FaArrowDown />
          </span>
        </button>
      </div>

      <div className="text-center py-10">
        <h1 className="text-6xl font-bold py-4">Tech Stack 😎</h1>
        <p className="py-4">
          Our AI writing tool is designed to empower you with exceptional
          writing capabilities, making <br /> the writing process more
          efficient, accurate, and enjoyable.
        </p>
        <div className="flex flex-wrap w-8/12 items-center justify-center m-auto py-4 gap-5 ">
          <Tech_tab icon={React_icon} title={"React Js"} />
          <Tech_tab icon={React_icon} title={"Tailwind"} />
          <Tech_tab icon={html_icon} title={"HTML"} />
          <Tech_tab icon={css_icon} title={"CSS"} />
          <Tech_tab icon={js_icon} title={"Javascript"} />
          <Tech_tab icon={wordpress_icon} title={"Wordpress"} />
          <Tech_tab icon={shopify_icon} title={"Shopify"} />
          <Tech_tab icon={photoshop_icon} title={"Photoshop"} />
          <Tech_tab icon={Illustrator_icon} title={"Illustrator"} />
          <Tech_tab icon={Premierpro_icon} title={"Premier Pro"} />
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

      <div className="py-10">
        <h1 className="text-6xl font-bold pt-4 text-center">Portfolio 💻</h1>
        <Portfolio />
      </div>

      <div className="py-10">
        <h1 className="text-6xl font-bold py-5 text-center ">
          Working Experience 😁
        </h1>
        <Experience />
      </div>

      <div className="max-w-screen-lg m-auto py-10">
        <h1 className="text-6xl font-bold py-5 text-center ">Education 😅</h1>
        <div className="flex justify-evenly py-8 ">
          <div className="w-60 py-8 relative group border rounded-xl">
            <span className="absolute inset-0 bg-gradient-to-b from-transparent to-[rgba(255,255,255,0.05)] opacity-0 group-hover:opacity-100 transition-opacity duration-300 ease-in-out z-10"></span>
            <div className="text-center text-6xl mb-5">
              <GiBookCover className=" m-auto" />
            </div>
            <h1 className="text-lg text-center">
              Graduated from Delhi University
            </h1>
          </div>

          <div className="w-60 py-8 relative group border rounded-xl">
            <span className="absolute inset-0 bg-gradient-to-b from-transparent to-[rgba(255,255,255,0.05)] opacity-0 group-hover:opacity-100 transition-opacity duration-300 ease-in-out z-10"></span>
            <div className="text-center text-6xl mb-5">
              <TbDeviceDesktopStar className=" m-auto" />
            </div>
            <h1 className="text-lg text-center">
              Graphics and Website Designing Course from Oxford Institute
            </h1>
          </div>
        </div>
      </div>

      <div
        className="bg-[#030014]  text-white"
        style={{
          backgroundImage: `url(${Bg_R_SVG})`,
          backgroundSize: "cover", // Optional: Adjust the background size
          backgroundPosition: "bottom", // Optional: Adjust the background position
          backgroundRepeat: "no-repeat",
        }}
      >
        <div className="py-10">
          <h1 className="text-6xl font-bold py-8 text-center">
            Latest Blogs and News 🤭
          </h1>
          <div className="max-w-screen-xl m-auto flex justify-center flex-wrap">
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

        <Contact_Form />

        <ScrollToTopButton />
        <Footer />
      </div>
    </div>
  );
}

export default Homepage;
