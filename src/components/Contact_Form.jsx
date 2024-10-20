import React from "react";
import { IoMailOpenOutline } from "react-icons/io5";
import Contact_Icon from "../assets/contact_icon.png";

const Contact_Form = () => {
  return (
    <div className="max-w-screen-lg  flex items-center justify-center m-auto">
      <div className="  border-[1px] border-purple-700  px-10 py-10 rounded-lg shadow-2xl shadow-purple-900 my-5">
        <h2 className="text-3xl font-semibold text-white text-center mb-6">
          Contact Us
        </h2>

        <div className="flex justify-center pt-5">
          <div className="w-2/4 ml-3">
            <p className="pb-6  text-5xl font-bold">
             Let's Discuss on Something Cool Together 
            </p>
            <img src={Contact_Icon} alt="" className="w-64 m-auto" />
          </div>
          <div className="w-2/4 border-[1px] border-purple-500 rounded-xl p-6 m-auto">
            <form className="space-y-6">
              <div>
                <label
                  className="block text-gray-400 text-sm mb-1"
                  htmlFor="name"
                >
                  Name
                </label>
                <input
                  type="text"
                  id="name"
                  className="w-full p-3 bg-gray-700 text-white rounded-md focus:outline-none focus:ring-2 focus:ring-purple-500"
                  placeholder="Enter your name"
                />
              </div>
            

              <div>
                <label
                  className="block text-gray-400 text-sm mb-1"
                  htmlFor="email"
                >
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  className="w-full p-3 bg-gray-700 text-white rounded-md focus:outline-none focus:ring-2 focus:ring-purple-500"
                  placeholder="Enter your email"
                />
              </div>
              <div>
                <label
                  className="block text-gray-400 text-sm mb-1"
                  htmlFor="message"
                >
                  Message
                </label>
                <textarea
                  id="message"
                  rows="4"
                  className="w-full p-3 bg-gray-700 text-white rounded-md focus:outline-none focus:ring-2 focus:ring-purple-500"
                  placeholder="Enter your message"
                ></textarea>
              </div>
              <button
                type="submit"
                className="w-full p-3 bg-purple-600 hover:bg-purple-700 text-white font-semibold rounded-md focus:outline-none focus:ring-2 focus:ring-purple-500 transition duration-300"
              >
                Submit
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact_Form;
