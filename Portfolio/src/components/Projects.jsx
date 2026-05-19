import React from 'react'
import {motion} from 'framer-motion'
import ProjectCard from "./ProjectCard";
import { projects } from "../assets/assets";

const Projects = () => {
  return (
    <motion.div
    initial={{ opacity: 0, y: 50 }}
    whileInView={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.6, ease: "easeOut" }}
    viewport={{ once: true }}
    id="projects"
    className='py-20 bg-dark-200'>
         <div className="px-6 w-full">
            <h2 className="text-5xl font-bold text-center mb-4 py-1">
             My <span className="text-blue">Projects</span>
            </h2>
            <p className="text-gray-400 text-center py-2 text-2xl ">
                  A selection of my recent work
            </p>
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 w-full mx-auto'>
                {projects.map((project,index)=>(
                    <ProjectCard key={index} {...project}/>
                ))}
            </div>
        </div>
    </motion.div>
   

  )
}

export default Projects