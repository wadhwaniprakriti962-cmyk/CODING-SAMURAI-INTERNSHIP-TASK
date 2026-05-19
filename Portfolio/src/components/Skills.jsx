import React from 'react'
import{motion} from 'framer-motion'
import { skills } from "../assets/assets";
import { text } from 'framer-motion/client';

const Skills = () => {
  return (
  <motion.div
    initial={{ opacity: 0, y: 50 }}
    whileInView={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.6, ease: "easeOut" }}
    viewport={{ once: true }}
    id="skills"
    className="py-20 bg-dark-100"
  >
    <div className="px-6 w-full">
      <h2 className="text-5xl font-bold text-center mb-4">
        My <span className="text-blue">Skills</span>
      </h2>

      <p className="text-gray-400 text-center mb-16 text-2xl">
        Technologies I work with to bring ideas to life
      </p>

       <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 sm:gap-8 w-full max-w-[95%] mx-auto px-4">
        {skills.map((skill, index) => {
          const Icon = skill.icon;

          return (
            <div
             key={index}
             className="bg-dark-300 rounded-3xl p-6 hover:-translate-y-2 transition duration-300 cursor-pointer min-h-[280px] flex flex-col justify-between  "
            >
             <div>
             <div className="flex items-center gap-3 mb-4 min-w-0">
             <Icon className="w-12 h-12 text-blue shrink-0" />

            <h3 className="text-xl sm:text-2xl font-semibold leading-tight break-words">
             {skill.title}
            </h3>
            </div>

    <p className="text-gray-400 mb-6 leading-relaxed text-xl">
      {skill.description}
    </p>
  </div>

  <div className="flex flex-wrap gap-3 font-bold">
    {skill.tags.map((tech) => (
      <span
        key={tech}
        className="px-4 py-2 bg-dark-200 text-gray-300 rounded-lg text-sm font-medium"
      >
        {tech}
      </span>
    ))}
  </div>
</div>
          )})}
</div>
</div>
</motion.div>)}
export default Skills