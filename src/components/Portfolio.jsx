import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion"; // Import Framer Motion
import brown_curry from "../assets/brown_curry.jpg";
import c6world from "../assets/c6world.jpg";
import Anom from "../assets/Anom.jpg";
import dygrouptech from "../assets/dygrouptech.jpg";
import ieltsfirst from "../assets/ieltsfirst.jpg";
import jrds from "../assets/jrds.jpg";
import kesarvilas from "../assets/kesarvilas.jpg";
import libertymasksny from "../assets/libertymasksny.jpg";
import misd from "../assets/misd.jpg";
import mommastory from "../assets/mommastory.jpg";
import omtrans from "../assets/omtrans.jpg";
import rapidtax from "../assets/rapidtax.jpg";
import sharadkohli from "../assets/sharadkohli.jpg";
import taxsharksindia from "../assets/taxsharksindia.jpg";
import techtradigital from "../assets/techtradigital.jpg";
import theelmoak from "../assets/theelmoak.jpg";
import theexamguru from "../assets/theexamguru.jpg";
import zevo from "../assets/zevo.jpg";
import GD from "../assets/GD.jpg";
import { FaEye, FaTimes } from "react-icons/fa";

function Portfolio() {
  const [activeCategory, setActiveCategory] = useState("All");
  const [selectedImage, setSelectedImage] = useState(null); // For modal pop-up
  const [showModal, setShowModal] = useState(false); // For controlling the modal visibility

  const images = [
    {
      src: Anom,
      category: "Wordpress",
      url: "https://anomresources.com/",
    },
    {
      src: brown_curry,
      category: "Wordpress",
      url: "https://browncurry.com/",
    },
    {
      src: c6world,
      category: "Wordpress",
      url: "https://c6world.org/",
    },
    {
      src: dygrouptech,
      category: "Wordpress",
      url: "https://dygrouptech.com/",
    },
    {
      src: ieltsfirst,
      category: "Web Development",
      url: "https://www.ieltsfirst.com/",
    },
    {
      src: jrds,
      category: "Wordpress",
      url: "https://jrds.org.in/",
    },
    {
      src: kesarvilas,
      category: "Wordpress",
      url: "https://kesarvilas.com/",
    },
    {
      src: libertymasksny,
      category: "Wordpress",
      url: "https://kesarvilas.com/",
    },
    {
      src: misd,
      category: "Wordpress",
      url: "https://libertyleatherny.com/",
    },
    {
      src: mommastory,
      category: "Wordpress",
      url: "https://mommastory.com/",
    },
    {
      src: omtrans,
      category: "Web Development",
      url: "https://www.omtrans.in/",
    },
    {
      src: rapidtax,
      category: "Web Development",
      url: "https://www.rapidtax.in/",
    },
    {
      src: sharadkohli,
      category: "Wordpress",
      url: "https://sharadkohli.com/",
    },
    {
      src: taxsharksindia,
      category: "Wordpress",
      url: "https://taxsharksindia.com/",
    },
    {
      src: techtradigital,
      category: "Wordpress",
      url: "https://techtradigital.com/",
    },
    {
      src: theelmoak,
      category: "Wordpress",
      url: "https://elmandoak.in/",
    },
    {
      src: theexamguru,
      category: "Web Development",
      url: "https://www.theexamguru.com/",
    },
    {
      src: zevo,
      category: "Web Development",
      url: "https://zevoindia.in/",
    },

    {
      src: GD,
      category: "Graphics Designing",
    },
  ];

  // Filter images based on active category
  const filteredImages =
    activeCategory === "All"
      ? images
      : images.filter((image) => image.category === activeCategory);

  // Function to open the modal or redirect based on category
  const handleImageClick = (image) => {
    if ((image.category === "Web_dev", "Wordpress" && image.url)) {
      window.open(image.url, "_blank"); // Redirect to the specified URL
    } else {
      setSelectedImage(image);
      setShowModal(true); // Open modal for other categories
    }
  };

  // Function to close the modal
  const closeModal = () => {
    setShowModal(false);
  };

  return (
    <div>
      {/* Category Buttons */}
      <div className="flex items-center justify-center py-4 md:py-8 flex-wrap">
        {["All", "Web Development", "Wordpress", "Graphics Designing"].map(
          (category) => (
            <button
              key={category}
              type="button"
              className={`text-gray-900 border border-white hover:border-gray-200 dark:border-gray-900 dark:bg-white dark:hover:border-gray-700 bg-white focus:ring-4 focus:outline-none focus:ring-gray-300 rounded-full text-base font-medium px-5 py-2.5 text-center me-3 mb-3 dark:text-black dark:focus:ring-gray-800 ${
                activeCategory === category ? "bg-blue-500 text-black" : ""
              }`}
              onClick={() => setActiveCategory(category)}
            >
              {category}
            </button>
          )
        )}
      </div>

      {/* Image Gallery with Animation */}
      <motion.div
        layout
        className="max-w-screen-lg grid grid-cols-2 md:grid-cols-3 gap-4 m-auto px-2"
      >
        <AnimatePresence>
          {filteredImages.map((image, index) => (
            <motion.div
              key={index}
              layout
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.9 }}
              transition={{ duration: 0.3 }}
              className="relative group overflow-hidden cursor-pointer"
              onClick={() => handleImageClick(image)} // Updated click handler
            >
              <img
                className="h-auto max-w-full rounded-lg transform transition duration-500 group-hover:scale-105 group-hover:blur-sm"
                src={image.src}
                alt={image.category}
              />
              <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition duration-300">
                <span className="text-black text-4xl">
                  <FaEye />
                </span>
              </div>
            </motion.div>
          ))}
        </AnimatePresence>
      </motion.div>

      {/* Modal Pop-up with Smooth Zoom Animation */}
      {showModal && (
        <motion.div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50 backdrop-blur-sm"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.5 }}
        >
          <motion.div
            className="relative rounded-lg p-4"
            initial={{ scale: 0.6 }}
            animate={{ scale: 1 }}
            exit={{ scale: 0.6 }}
            transition={{ duration: 0.3 }}
          >
            <img
              src={selectedImage.src}
              alt={selectedImage.category}
              className="max-w-full h-auto rounded-lg object-contain"
            />
            <button
              className="absolute top-2 right-2 m-8 text-black text-3xl hover:text-red-500 hover:scale-125 duration-150"
              onClick={closeModal}
            >
              <FaTimes />
            </button>
          </motion.div>
        </motion.div>
      )}
    </div>
  );
}

export default Portfolio;
