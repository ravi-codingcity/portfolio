import React, { useState } from "react";
import All_1 from "../assets/All_1.jpg";
import { FaEye } from "react-icons/fa";

function Portfolio() {
  const [activeCategory, setActiveCategory] = useState("All");

  const images = [
    {
      src: "https://flowbite.s3.amazonaws.com/docs/gallery/square/image.jpg",
      category: "Shoes",
    },
    {
      src: All_1,
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
    <div>
      <div className="flex items-center justify-center py-4 md:py-8 flex-wrap">
        <button
          type="button"
          className="text-blue-700 hover:text-white border border-blue-600 bg-white hover:bg-blue-700 focus:ring-4 focus:outline-none focus:ring-blue-300 rounded-full text-base font-medium px-5 py-2.5 text-center me-3 mb-3 dark:border-blue-500 dark:text-blue-500 dark:hover:text-white dark:hover:bg-blue-500 dark:bg-gray-900 dark:focus:ring-blue-800"
          onClick={() => setActiveCategory("All")}
        >
          All
        </button>
        <button
          type="button"
          className="text-gray-900 border border-white hover:border-gray-200 dark:border-gray-900 dark:bg-gray-900 dark:hover:border-gray-700 bg-white focus:ring-4 focus:outline-none focus:ring-gray-300 rounded-full text-base font-medium px-5 py-2.5 text-center me-3 mb-3 dark:text-white dark:focus:ring-gray-800"
          onClick={() => setActiveCategory("Shoes")}
        >
          Web Development
        </button>
        <button
          type="button"
          className="text-gray-900 border border-white hover:border-gray-200 dark:border-gray-900 dark:bg-gray-900 dark:hover:border-gray-700 bg-white focus:ring-4 focus:outline-none focus:ring-gray-300 rounded-full text-base font-medium px-5 py-2.5 text-center me-3 mb-3 dark:text-white dark:focus:ring-gray-800"
          onClick={() => setActiveCategory("Bags")}
        >
          Wordpress
        </button>
        <button
          type="button"
          className="text-gray-900 border border-white hover:border-gray-200 dark:border-gray-900 dark:bg-gray-900 dark:hover:border-gray-700 bg-white focus:ring-4 focus:outline-none focus:ring-gray-300 rounded-full text-base font-medium px-5 py-2.5 text-center me-3 mb-3 dark:text-white dark:focus:ring-gray-800"
          onClick={() => setActiveCategory("Bags")}
        >
          Shopify
        </button>
        <button
          type="button"
          className="text-gray-900 border border-white hover:border-gray-200 dark:border-gray-900 dark:bg-gray-900 dark:hover:border-gray-700 bg-white focus:ring-4 focus:outline-none focus:ring-gray-300 rounded-full text-base font-medium px-5 py-2.5 text-center me-3 mb-3 dark:text-white dark:focus:ring-gray-800"
          onClick={() => setActiveCategory("Electronics")}
        >
          Graphic Designing
        </button>
        <button
          type="button"
          className="text-gray-900 border border-white hover:border-gray-200 dark:border-gray-900 dark:bg-gray-900 dark:hover:border-gray-700 bg-white focus:ring-4 focus:outline-none focus:ring-gray-300 rounded-full text-base font-medium px-5 py-2.5 text-center me-3 mb-3 dark:text-white dark:focus:ring-gray-800"
          onClick={() => setActiveCategory("Gaming")}
        >
          Social Media
        </button>
      </div>

      <div className="max-w-screen-lg grid grid-cols-2 md:grid-cols-3 gap-4 m-auto transition-opacity duration-500 ease-in-out">
        {filteredImages.map((image, index) => (
          <div key={index} className="relative group overflow-hidden cursor-pointer">
            <img
              className="h-auto max-w-full rounded-lg transform transition duration-500 group-hover:scale-105 group-hover:blur-sm"
              src={image.src}
              alt={image.category}
            />
            <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition duration-300 ">
              <span className="text-black text-4xl">
                <FaEye />
              </span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Portfolio;
