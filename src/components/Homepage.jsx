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
import Blog_1 from "../assets/Blog_1.jpg";
import Blog_2 from "../assets/Blog_2.jpg";
import Blog_3 from "../assets/Blog_3.jpg";
import { FaArrowDown } from "react-icons/fa6";
import React_icon from "../assets/react.svg";
import html_icon from "../assets/html.svg";
import css_icon from "../assets/css.svg";
import js_icon from "../assets/js.svg";
import wordpress_icon from "../assets/wordpress.svg";
import shopify_icon from "../assets/shopify.svg";
import photoshop_icon from "../assets/photoshop.svg";
import Illustrator_icon from "../assets/Illustrator.svg";
import Premierpro_icon from "../assets/Premierpro.svg";
import After_Effect_Icon from "../assets/AfterEffect.svg";
import Express_icon from "../assets/Express_icon.svg";
import Nextjs_icon from "../assets/Nextjs_icon.svg";
import Tailwind_icon from "../assets/Tailwind_icon.svg";
import Coreldraw_icon from "../assets/Coreldraw_icon.svg";
import MongoDB_icon from "../assets/Mongodb_icon.svg";
import Node_icon from "../assets/Node_icon.svg";
import Experience from "./Experience";
import Contact_Form from "./Contact_Form";
import { Element } from "react-scroll";

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
      <Element name="/">
        <section to="/">
          <Navbar />
          <div className="text-white text-center pb-16 pt-7 ">
            <h1 className="text-3xl font-bold py-5 sm:leading-snug	 sm:text-6xl">
              Coding is not just a job <br /> It's an Adventure
            </h1>
            <p className="py-10 text-base sm:text-lg sm:px-0 px-3">
              Hello! I’m a Frontend Developer and Graphics Designer with over 4
              years <br className="sm:block hidden" />
              of experience, blending creativity with technical skills to bring
              <br className="sm:block hidden" />
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
        </section>
      </Element>

      <Element name="Tech">
        <section id="Tech">
          <div className="text-center py-10 max-w-screen-lg m-auto">
            <h1 className="sm:text-6xl font-bold py-4 text-4xl">
              Tech Stack 😎
            </h1>
            <p className="py-4 sm:text-base text-sm sm:px-0 px-4">
              My toolkit includes a range of advanced development and design
              tools, allowing me to create seamless, engaging interfaces and
              polished visuals. I focus on efficient, dynamic experiences with a
              commitment to quality and innovation.
            </p>
            <div className="max-w-screen-xl flex flex-wrap  items-center justify-center m-auto py-4 gap-4 ">
              <Tech_tab icon={React_icon} title={"React Js"} />
              <Tech_tab icon={Tailwind_icon} title={"Tailwind"} />
              <Tech_tab icon={html_icon} title={"HTML"} />
              <Tech_tab icon={css_icon} title={"CSS"} />
              <Tech_tab icon={js_icon} title={"Javascript"} />
              <Tech_tab icon={wordpress_icon} title={"Wordpress"} />
              <Tech_tab icon={shopify_icon} title={"Shopify"} />
              <Tech_tab icon={photoshop_icon} title={"Photoshop"} />
              <Tech_tab icon={Illustrator_icon} title={"Illustrator"} />
              <Tech_tab icon={Premierpro_icon} title={"Premier Pro"} />
              <Tech_tab icon={After_Effect_Icon} title={"After Effect"} />
              <Tech_tab icon={Coreldraw_icon} title={"Corel Draw"} />
              <Tech_tab icon={Node_icon} title={"Node Js"} />
              <Tech_tab icon={Express_icon} title={"Express Js"} />
              <Tech_tab icon={MongoDB_icon} title={"Mongo DB"} />
              <Tech_tab icon={Nextjs_icon} title={"Next Js"} />
            </div>
          </div>
        </section>
      </Element>

      <Element name="Portfolio">
        <section id="Portfolio">
          <div className="py-10">
            <h1 className="sm:text-6xl text-4xl font-bold pt-4 text-center">
              Portfolio 💻
            </h1>
            <Portfolio />
          </div>
        </section>
      </Element>

      <Element name="Experience">
        <section id="Experience">
          <div className="py-10">
            <h1 className="sm:text-6xl text-3xl font-bold py-5 text-center ">
              Working Experience 😁
            </h1>
            <Experience />
          </div>
        </section>
      </Element>

      {/* 

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
 
 */}
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
          <h1 className="sm:text-6xl text-4xl font-bold py-8 text-center">
            Latest Blogs and News 🤭
          </h1>
          <div className="max-w-screen-xl m-auto flex justify-center flex-wrap">
            <Blogs
              img={Blog_1}
              h="What's New in Next.js 14?"
              p="Version 14 is the first major release since the Next team published the App Router as a stable part of the framework in version 13.4. Why is Next so popular? Afterall, Next is relatively old for a JavaScript framework, initial releasing back in October 2016. "
            />
            <Blogs
              img={Blog_2}
              h="What is SSR (Server-Side Rendering) and CSR (client-side rendering)?"
              p="Server-Side Rendering (SSR) and Client-Side Rendering (CSR) are two different approaches used in web development to render web pages to users. Each approach has its own set of advantages and disadvantages."
            />
            <Blogs
              img={Blog_3}
              h="Will AI Replace Humans in the Workplace?"
              p="As AI (Artificial Intelligence) perception shifted from a threat to a supportive tool, it has significantly transformed the business world. As a result, AI and digitalization have become increasingly indispensable in the workplace, raising the question,"
            />
          </div>
        </div>

        <Element name="Contact">
          <section id="Contact">
            <Contact_Form />
          </section>
        </Element>

        <ScrollToTopButton />
        <Footer />
      </div>
    </div>
  );
}

export default Homepage;
