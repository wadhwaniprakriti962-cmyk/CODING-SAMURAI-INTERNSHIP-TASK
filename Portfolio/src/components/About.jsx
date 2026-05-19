import React from 'react'
import {motion} from 'framer-motion'
import profile from '../assets/Profile.jpeg'
import { aboutInfo } from "../assets/assets";

const About = () => {
  return (
    <motion.div
  initial={{ opacity: 0, y: 50 }}
  whileInView={{ opacity: 1, y: 0 }}
  transition={{ duration: 0.6, ease: "easeOut" }}
  viewport={{ once: true }}
  id="about"
  className="py-20 bg-dark-200"
>

<div className="w-full flex justify-center items-center mt-10">
  
  <div className="w-full flex flex-col items-center text-center px-4">
    
    <h2 className="font-bold text-5xl mb-4">
      About <span className="text-blue">Me</span>
    </h2>

    <p className="text-gray-400 max-w-2xl text-2xl">
      Get to know about my background and passion
    </p>

  </div>

</div>

    {/* CONTENT */}
    <div className="flex flex-col md:flex-row items-center gap-12">

      {/* LEFT IMAGE */}
      <div className="md:w-1/2 flex justify-center md:justify-start">
        <motion.img
          className="w-[320px] h-[320px] md:w-[420px] md:h-[420px] rounded-2xl object-cover"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9 }}
          viewport={{ once: false, amount: 0.2 }}
          src={profile}
          alt="Profile"
        />
      </div>

      {/* RIGHT TEXT */}
    <motion.div className="rounded-2xl p-6 shadow-lg bg-dark-200 -mt-10">
  <h3 className="font-bold text-3xl mb-10">My Journey</h3>

  <p className="text-gray-300 text-2xl mb-8">
    I started my journey in web development with curiosity about how websites
    and applications actually work behind the scenes. That curiosity slowly
    turned into a passion as I began learning technologies like HTML, CSS,
    JavaScript, and React.
  </p>

  <p className="text-gray-300 text-2xl py-4">
    As I continue learning, I focus on improving both my frontend skills and
    problem-solving ability.
  </p>

  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
    {aboutInfo.map((data, index) => {
      const Icon = data.icon;

      return (
        <div
          key={index}
          className="bg-dark-300 rounded-2xl p-6 transition-transform duration-300 hover:-translate-y-2 cursor-pointer"
        >
          <div className={data.color}>
            <Icon className="text-4xl mb-4" />
            <h3 className="text-2xl font-bold mb-2 text-gray-300">{data.title}</h3>
            <p className="text-gray-300 text-xl">{data.description}</p>
          </div>
        </div>
      );
    })}
  </div>
</motion.div>

        </div>
      </motion.div>
  )}
export default About