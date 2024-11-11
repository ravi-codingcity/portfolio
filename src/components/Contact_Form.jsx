import Contact_Icon from "../assets/contact_icon.png";
import React, { useRef, useState } from "react";
import emailjs from "@emailjs/browser";
import "../App.css";

const Contact_Form = () => {
  const form = useRef();
  const [isSending, setIsSending] = useState(false);
  const [message, setMessage] = useState("");

  const sendEmail = (e) => {
    e.preventDefault();
    setIsSending(true);

    emailjs
      .sendForm("service_3htkxgt", "template_tfcydtp", form.current, {
        publicKey: "fx25GQdlHnMAWirmb",
      })
      .then(
        () => {
          setIsSending(false);
          setMessage(
            "Your message was sent successfully. Thanks for showing interest!"
          );
          form.current.reset();
          console.log("Message Sent");
        },
        (error) => {
          setIsSending(false);
          setMessage("Failed to send message. Please try again later.");
          console.error("FAILED...", error.text);
          console.log("Message Failed");
        }
      );
  };

  return (
    <div className="max-w-screen-lg flex items-center justify-center sm:m-auto mx-2">
      <div className="border-[1px] border-purple-700 sm:px-10 px-2 py-10 rounded-lg shadow-2xl shadow-purple-900 my-5">
        <h2 className="text-3xl font-semibold text-white text-center mb-6">
          Contact Us
        </h2>

        <div className="flex justify-center pt-5 flex-col sm:flex-row ">
          <div className="sm:w-2/4 ml-3 ">
            <p className="pb-6 sm:text-5xl font-bold text-2xl">
              Let's Discuss Something Cool Together
            </p>
            <img
              src={Contact_Icon}
              alt=""
              className="w-64 sm:block hidden m-auto"
            />
          </div>
          <div className="sm:w-2/4 border-[1px] border-purple-500 rounded-xl p-6 sm:m-auto mx-3">
            <form className="space-y-6" ref={form} onSubmit={sendEmail}>
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
                  name="name"
                  required
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
                  name="email"
                  required
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
                  name="message"
                  rows="4"
                  className="w-full p-3 bg-gray-700 text-white rounded-md focus:outline-none focus:ring-2 focus:ring-purple-500"
                  placeholder="Enter your message"
                ></textarea>
              </div>

              <button
                type="submit"
                disabled={isSending}
                className="w-full p-3 bg-purple-600 hover:bg-purple-700 text-white font-semibold rounded-md focus:outline-none focus:ring-2 focus:ring-purple-500 transition duration-300 flex items-center justify-center"
              >
                {isSending ? (
                  <div className="loader ease-linear rounded-full border-4 border-t-4 border-gray-300 h-6 w-6"></div>
                ) : (
                  "Submit"
                )}
              </button>
            </form>

            {message && (
              <p className="mt-4 text-green-500 text-center">{message}</p>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact_Form;
