import React from "react";
import { motion } from "framer-motion";
import {
  FaDribbble,
  FaEnvelope,
  FaGithub,
  FaMapMarkerAlt,
  FaPhone,
  FaTwitter,
  FaLinkedin,
} from "react-icons/fa";
import { useState } from "react";

const Contact = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const res = await fetch("http://localhost:5000/", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ name, email, message }),
      });

      const data = await res.json();

      if (res.ok) {
        alert("Message sent successfully 🚀");
        setName("");
        setEmail("");
        setMessage("");
      } else {
        alert(data.message);
      }
    } catch (error) {
      alert("Server not reachable");
    }
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      viewport={{ once: true }}
      id="contact"
      className="py-20 bg-dark-200"
    >
      <div className="max-w-full mx-auto px-6 text-center">
        {/* Heading */}
        <h2 className="text-5xl font-bold mb-4">
          Get In <span className="text-blue">Touch</span>
        </h2>

        <p className="text-gray-400 mb-16 text-xl">
          Have a project in mind or want to collaborate? Let's talk!
        </p>

        {/* GRID */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center max-w-full">
          {/* LEFT → FORM */}
          <div className="w-full flex justify-center">
            <div className="w-full max-w-md">
              <form className="space-y-6" onSubmit={handleSubmit}>
                <div className="py-4">
                  <label className="block text-gray-300 mb-2 text-xl text-left">
                    Your Name
                  </label>
                  <input
                    type="text"
                    className="w-full bg-dark-300 border border-dark-400 rounded-lg px-4 py-3 outline-none focus:border-blue"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                  />
                </div>

                <div className="py-4">
                  <label className="block text-gray-300 mb-2 text-xl text-left">
                    Email Address
                  </label>
                  <input
                    type="email"
                    className="w-full bg-dark-300 border border-dark-400 rounded-lg px-4 py-3 outline-none focus:border-blue"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                  />
                </div>

                <div className="py-4">
                  <label className="block text-gray-300 mb-2 text-xl py-4 text-left">
                    Your Message
                  </label>
                  <textarea
                    className="w-full h-40 bg-dark-300 border border-dark-400 rounded-xl px-4 py-3 outline-none focus:border-blue"
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                  />
                </div>

                <button
                  type="submit"
                  className="w-full px-6 py-3 bg-blue rounded-lg font-medium hover:bg-blue-700 transition duration-300"
                >
                  Send
                </button>
              </form>
            </div>
          </div>

          {/* RIGHT → CONTACT INFO */}
          <div className="space-y-8 w-full max-w-md mx-auto lg:mx-0">
            <div className="flex items-start gap-5">
              <FaMapMarkerAlt className="text-blue  text-2xl sm:text-3xl mt-1" />
              <div className="text-left">
                <h3 className="text-2xl font-semibold mb-1">Location</h3>
                <p className="text-gray-400 text-lg">Kanpur, Uttar Pradesh</p>
              </div>
            </div>

            <div className="flex items-start gap-4 sm:gap-5">
              <FaEnvelope className="text-blue text-2xl sm:text-3xl mt-1 shrink-0" />

              <div className="text-left min-w-0">
                <h3 className="text-xl sm:text-2xl font-semibold mb-1">
                  E-mail
                </h3>

                <p className="text-gray-400 text-sm sm:text-lg break-all">
                  wadhwaniprakriti962@gmail.com
                </p>
              </div>
            </div>

            <div className="flex items-start gap-5">
              <FaPhone className="text-blue text-3xl mt-1" />
              <div className="text-left">
                <h3 className="text-2xl font-semibold mb-1">Phone</h3>
                <p className="text-gray-400 text-lg">+91 9214375393</p>
              </div>
            </div>
            <div className="text-left mt-10 pt-4">
              <h3 className="font-semibold mb-4 text-xl">Follow Me</h3>

              <div className="flex flex-wrap gap-3 sm:gap-5 mt-2">
                <a
                  href="#"
                  className="w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-dark-300 flex items-center justify-center text-purple
      hover:bg-purple hover:text-white transition duration-300"
                >
                  <FaGithub />
                </a>

                <a
                  href="#"
                  className="w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-dark-300 flex items-center justify-center text-blue
      hover:bg-blue hover:text-white transition duration-300"
                >
                  <FaLinkedin />
                </a>

                <a
                  href="#"
                  className="w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-dark-300 flex items-center justify-center text-blue-400
      hover:bg-blue-400 hover:text-white transition duration-300"
                >
                  <FaTwitter />
                </a>

                <a
                  href="#"
                  className="w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-dark-300 flex items-center justify-center text-pink
      hover:bg-pink hover:text-white transition duration-300"
                >
                  <FaDribbble />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default Contact;
