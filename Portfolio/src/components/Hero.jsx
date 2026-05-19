import React from 'react'
import {easeOut, motion} from 'framer-motion'
import profile from '../assets/Profile.jpeg'

const Hero = () => {
  return (
    <motion.div
  initial={{ opacity: 0, y: 50 }}
  whileInView={{ opacity: 1, y: 0 }}
  transition={{ duration: 0.6, ease: "easeOut" }}
  viewport={{ once: true }}
  id="home"
  className="min-h-screen flex items-center pt-20 pb-16 bg-gradient-to-r from-[#1a1a1a] via-[#2d2d2d] to-[#1a1a1a]"
>

  <div className="container mx-auto px-6 flex flex-col md:flex-row items-center justify-between">

    {/* LEFT SIDE */}
    <div className="md:w-1/2 text-center md:text-left">

      <h1 className="text-4xl md:text-7xl font-bold mb-8">
        Hi, I'm <span className="text-blue">Prakriti Wadhwani</span>
      </h1>

      <h2 className="text-2xl md:text-5xl font-semibold mb-8 typewriter">
        Full Stack Developer
      </h2>

      <p className="text-xl md:text-2xl text-gray-300 mb-8">
        I am passionate about creating real-world applications that solve problems and improve user experience.
      </p>

      <div className="flex justify-center md:justify-start gap-6">
        <a href="#projects" className="px-7 py-3 bg-blue rounded-lg hover:bg-blue-700 transition">
          View Work
        </a>
        <a href="#contact" className="px-7 py-3 border border-blue rounded-lg hover:bg-blue/20 transition">
          Contact Me
        </a>
      </div>

    </div>

    {/* RIGHT SIDE */}
   <div className="md:w-1/2 flex justify-center md:justify-end">

    <div className="relative w-[300px] h-[300px] md:w-[420px] md:h-[420px] md:translate-x-80 lg:translate-x-60">

    {/* glow */}
    <div className="absolute inset-0 rounded-full bg-blue/20  animate-pulse"></div>

    {/* image */}
    <motion.img
      animate={{ y: [0, -20, 0] }}
      transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
      className="relative w-full h-full rounded-full object-cover z-10"
      src={profile}
      alt="Profile"
    />

  </div>

</div>

  </div>

</motion.div>
  )};
export default Hero;