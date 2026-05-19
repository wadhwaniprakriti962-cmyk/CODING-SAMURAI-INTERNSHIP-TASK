import React from 'react'
import {motion} from 'framer-motion'
import {workData} from '../assets/assets.js'
const Work = () => {
  return (
     <motion.div
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      viewport={{ once: true }}
      id="experience"
      className="py-20 bg-dark-100"
    >
        <div className='w-full items-center text-center px-6'>
          <h2 className="text-5xl font-bold text-center mb-4">
            Work<span className="text-blue">Experience</span>
          </h2>    
      <p className="text-gray-400 text-center mb-16 text-2xl ">
        My professional journey so far
      </p>
     <div className="flex justify-center py-3">

  {/* Center wrapper */}
  <div className="relative w-full max-w-4xl">

    {/* LEFT LINE */}
    <div className="absolute left-10 top-0 w-[3px] h-full bg-blue" />

    {/* DOT 1 (top) */}
    <div className="absolute left-10 top-10 w-4 h-4 rounded-full bg-blue transform -translate-x-1/2" />

    {/* DOT 2 (middle example) */}
    <div className="absolute left-10 top-1/2 w-4 h-4 rounded-full bg-blue transform -translate-x-1/2" />

    {/* CONTENT */}
    <div className="pl-24 space-y-20 p-6 gap-6 sm:gap-8 w-full max-w-[95%] mx-auto px-4">

      {workData.map((data, index) => (
        <div
          key={index}
          className="bg-dark-300 p-6 rounded-2xl shadow-lg hover:-translate-y-2 transition-all duration-300 py-8"
        >

          <h3 className="text-2xl font-semibold text-white mb-2">
            {data.title}
          </h3>

          <p className="text-blue text-sm mb-3 font-medium">
            {data.date}
          </p>

          <p className="text-gray-300 text-base leading-relaxed">
            {data.description}
          </p>


        </div>
      ))}

    </div>

  </div>
</div>
        </div>


        

    </motion.div>
  )
}

export default Work