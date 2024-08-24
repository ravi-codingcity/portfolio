import React, { useState } from "react";
import Bg_SVG from "../assets/svgexport.svg";
import Bg_base from "../assets/homebase.svg";
import Icon_1 from "../assets/cc1.svg";
import Navbar from "./Navbar";
import Tech_tab from "./Tech_tab";

function Homepage() {
  const [activeCategory, setActiveCategory] = useState("All");

  const images = [
    {
      src: "https://flowbite.s3.amazonaws.com/docs/gallery/square/image.jpg",
      category: "Shoes",
    },
    {
      src: "https://flowbite.s3.amazonaws.com/docs/gallery/square/image-1.jpg",
      category: "Bags",
    },
    {
      src: "https://flowbite.s3.amazonaws.com/docs/gallery/square/image-2.jpg",
      category: "Electronics",
    },
    {
      src: "https://flowbite.s3.amazonaws.com/docs/gallery/square/image-3.jpg",
      category: "Gaming",
    },
    {
      src: "https://flowbite.s3.amazonaws.com/docs/gallery/square/image-4.jpg",
      category: "Shoes",
    },
    {
      src: "https://flowbite.s3.amazonaws.com/docs/gallery/square/image-5.jpg",
      category: "Bags",
    },
    {
      src: "https://flowbite.s3.amazonaws.com/docs/gallery/square/image-6.jpg",
      category: "Electronics",
    },
    {
      src: "https://flowbite.s3.amazonaws.com/docs/gallery/square/image-7.jpg",
      category: "Gaming",
    },
    // Add more images with categories as needed
  ];

  const filteredImages =
    activeCategory === "All"
      ? images
      : images.filter((image) => image.category === activeCategory);

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

      <div className="  text-white  mt-10 h-[450px] ">
        <img src={Bg_base} alt="" className="m-auto" />
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
          <Tech_tab
            icon={Icon_1}
            title={"Intelligent Writing Assistance"}
            desc={
              "Our AI writing tool analyzes your content, suggests improvements,"
            }
          />
          <Tech_tab
            icon={Icon_1}
            title={"Intelligent Writing Assistance"}
            desc={
              "Our AI writing tool analyzes your content, suggests improvements,"
            }
          />
          <Tech_tab
            icon={Icon_1}
            title={"Intelligent Writing Assistance"}
            desc={
              "Our AI writing tool analyzes your content, suggests improvements,"
            }
          />
          <Tech_tab
            icon={Icon_1}
            title={"Intelligent Writing Assistance"}
            desc={
              "Our AI writing tool analyzes your content, suggests improvements,"
            }
          />
          <Tech_tab
            icon={Icon_1}
            title={"Intelligent Writing Assistance"}
            desc={
              "Our AI writing tool analyzes your content, suggests improvements,"
            }
          />
          <Tech_tab
            icon={Icon_1}
            title={"Intelligent Writing Assistance"}
            desc={
              "Our AI writing tool analyzes your content, suggests improvements,"
            }
          />
        </div>
      </div>

      <div>
        <h1 className="text-6xl font-bold py-4 text-center">Portfolio</h1>
        <div>
          <div className="flex items-center justify-center py-4 md:py-8 flex-wrap">
            <button
              type="button"
              className="text-blue-700 hover:text-white border border-blue-600 bg-white hover:bg-blue-700 focus:ring-4 focus:outline-none focus:ring-blue-300 rounded-full text-base font-medium px-5 py-2.5 text-center me-3 mb-3 dark:border-blue-500 dark:text-blue-500 dark:hover:text-white dark:hover:bg-blue-500 dark:bg-gray-900 dark:focus:ring-blue-800"
              onClick={() => setActiveCategory("All")}
            >
              All categories
            </button>
            <button
              type="button"
              className="text-gray-900 border border-white hover:border-gray-200 dark:border-gray-900 dark:bg-gray-900 dark:hover:border-gray-700 bg-white focus:ring-4 focus:outline-none focus:ring-gray-300 rounded-full text-base font-medium px-5 py-2.5 text-center me-3 mb-3 dark:text-white dark:focus:ring-gray-800"
              onClick={() => setActiveCategory("Shoes")}
            >
              Shoes
            </button>
            <button
              type="button"
              className="text-gray-900 border border-white hover:border-gray-200 dark:border-gray-900 dark:bg-gray-900 dark:hover:border-gray-700 bg-white focus:ring-4 focus:outline-none focus:ring-gray-300 rounded-full text-base font-medium px-5 py-2.5 text-center me-3 mb-3 dark:text-white dark:focus:ring-gray-800"
              onClick={() => setActiveCategory("Bags")}
            >
              Bags
            </button>
            <button
              type="button"
              className="text-gray-900 border border-white hover:border-gray-200 dark:border-gray-900 dark:bg-gray-900 dark:hover:border-gray-700 bg-white focus:ring-4 focus:outline-none focus:ring-gray-300 rounded-full text-base font-medium px-5 py-2.5 text-center me-3 mb-3 dark:text-white dark:focus:ring-gray-800"
              onClick={() => setActiveCategory("Electronics")}
            >
              Electronics
            </button>
            <button
              type="button"
              className="text-gray-900 border border-white hover:border-gray-200 dark:border-gray-900 dark:bg-gray-900 dark:hover:border-gray-700 bg-white focus:ring-4 focus:outline-none focus:ring-gray-300 rounded-full text-base font-medium px-5 py-2.5 text-center me-3 mb-3 dark:text-white dark:focus:ring-gray-800"
              onClick={() => setActiveCategory("Gaming")}
            >
              Gaming
            </button>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
            {filteredImages.map((image, index) => (
              <div key={index}>
                <img
                  className="h-auto max-w-full rounded-lg"
                  src={image.src}
                  alt={image.category}
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Homepage;
