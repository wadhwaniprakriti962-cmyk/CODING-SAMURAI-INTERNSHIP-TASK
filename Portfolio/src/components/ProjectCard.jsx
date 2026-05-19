import React from 'react'
import { projects } from "../assets/assets";

const ProjectCard = ({title,description,image,tech,demo,code}) => {
  return (
    <div className='bg-dark-300 rounded-3xl overflow-hidden hover:-translate-y-2 transition duration-300 w-full max-w-[95%] mx-auto p-4 sm:p-6 '>
        <img src={image} alt={title} className='w-full h-60 object-cover'/> 
        <div className='p-6'>
            <h3 className='text-xl font-semibold mb-2'>{title}</h3>
            <p className='text-gray-400 mb-4'>{description}</p>
            <div className='flex flex-wrap gap-2 mb-4'>
                {tech.map((item,index)=>(
                    <span key={index} className='px-3 py-1 bg-dark-200 rounded-full text-sm'>
                        {item}
                    </span>
                ))}
            </div>
            <br></br>
            <div className='flex gap-2'>
                <a href={demo} target="_blank" 
                 rel="noopener noreferrer" className='flex-1 text-center px-4 py-4 bg-blue rounded-lg font-medium hover:bg-blue-700 transition duration-300'
                   onClick={(e) => e.stopPropagation()}>
                    View Demo
                </a>
                <a href={code} target="_blank" 
                rel="noopener noreferrer"className='flex-1 text-center px-4 py-3 rounded-lg border border-blue font-medium hover:bg-blue-700 transition duration-300 flex items-center justify-center'
                  onClick={(e) => e.stopPropagation()}>
                    Code
                </a>
            </div>
        </div>
    </div>
  )
}

export default ProjectCard