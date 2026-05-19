import{nav} from 'framer-motion/client'
import React, { useState } from "react";
import {FaBars} from 'react-icons/fa'
import { FaXmark } from 'react-icons/fa6'

const Navbar = () => {
    const[showMenu,setShowMenu]=useState(false);

  return (
    <nav className="fixed w-full z-50 bg-dark-100/90 backdrop-blur-sm shadow-lg overflow-hidden">
      <div className="w-full px-10 flex justify-between items-center px-4 py-4">
        <div>
          <a href="#" className='text-4xl font-bold text-white text-sm sm:text-lg font-bold truncate max-w-[70%]'>
            Prakriti
            <span className='text-blue'>Wadhwani</span>
            <div className='w-5 h-5 bg-blue rounded-full'>
            </div>
            </a>
        </div>
            <div className='hidden md:flex items-center gap-8 text-white/80'>
              <a href="#home" className='relative text-white/80 text-2xl transition duration-300 hover:text-blue flex justify-right group '>
                <span>Home</span>
                <span className='absolute left-0 -bottom-1 w-0 h-0.5 bg-blue transition-all duration-300 group-hover:w-full'></span>
              </a>
              <a href="#about" className='relative text-white/80 text-2xl transition duration-300 hover:text-blue flex justify-right group '>
                <span>About</span>
                <span className='absolute left-0 -bottom-1 w-0 h-0.5 bg-blue transition-all duration-300 group-hover:w-full'></span>
              </a>
              <a href="#skills" className='relative text-white/80 text-2xl transition duration-300 hover:text-blue flex justify-right group '>
                <span>Skills</span>
                <span className='absolute left-0 -bottom-1 w-0 h-0.5 bg-blue transition-all duration-300 group-hover:w-full'></span>
              </a>
              <a href="#projects" className='relative text-white/80 text-2xl transition duration-300 hover:text-blue flex justify-right group '>
                <span>Projects</span>
                <span className='absolute left-0 -bottom-1 w-0 h-0.5 bg-blue transition-all duration-300 group-hover:w-full'></span>
              </a>
              <a href="#experience" className='relative text-white/80 text-2xl transition duration-300 hover:text-blue flex justify-right group '>
                <span>Experience</span>
                <span className='absolute left-0 -bottom-1 w-0 h-0.5 bg-blue transition-all duration-300 group-hover:w-full'></span>
              </a>
              <a href="#contact" className='relative text-white/80 text-2xl transition duration-300 hover:text-blue flex justify-right group'>
                <span>Contact</span>
                <span className='absolute left-0 -bottom-1 w-0 h-0.5 bg-blue transition-all duration-300 group-hover:w-full'></span>
              </a>
            </div>
            <div className='md:hidden'>
              {
                showMenu?
                <FaXmark onClick={()=>setShowMenu(!showMenu)} className=' text-2xl cursor-pointer'/>:
                <FaBars onClick={()=>setShowMenu(!showMenu)} className='text-2xl cursor-pointer'/>
              }
            </div>
        </div>
        {
           showMenu&&(
            <div className='md:hidden mt-4 bg-dark-300 h-screen rounded-lg'>
              <a href="#home" className='relative text-white/80 text-2xl transition duration-300 hover:text-blue flex justify-right group'>
                <span>Home</span>
                <span className='absolute left-0 -bottom-1 w-0 h-0.5 bg-blue transition-all duration-300 group-hover:w-full active:underline'></span>
              </a>
              <a href="#about" className='relative text-white/80 text-2xl transition duration-300 hover:text-blue flex justify-right group'>
                <span>About</span>
                <span className='absolute left-0 -bottom-1 w-0 h-0.5 bg-blue transition-all duration-300 group-hover:w-full'></span>
              </a>
              <a href="#skills" className='relative text-white/80 text-2xl transition duration-300 hover:text-blue flex justify-right group'>
                <span>Skills</span>
                <span className='absolute left-0 -bottom-1 w-0 h-0.5 bg-blue transition-all duration-300 group-hover:w-full'></span>
              </a>
              <a href="#projects" className='relative text-white/80 text-2xl transition duration-300 hover:text-blue flex justify-right group'>
                <span>Projects</span>
                <span className='absolute left-0 -bottom-1 w-0 h-0.5 bg-blue transition-all duration-300 group-hover:w-full'></span>
              </a>
              <a href="#experience" className='relative text-white/80 text-2xl transition duration-300 hover:text-blue flex justify-right group'>
                <span>Experience</span>
                <span className='absolute left-0 -bottom-1 w-0 h-0.5 bg-blue transition-all duration-300 group-hover:w-full'></span>
              </a>
              <a href="#contact" className='relative text-white/80 text-2xl transition duration-300 hover:text-blue flex justify-right group'>
                <span>Contact</span>
                <span className='absolute left-0 -bottom-1 w-0 h-0.5 bg-blue transition-all duration-300 group-hover:w-full'></span>
              </a>
            </div>

           )
        }
    </nav>
  )
}

export default Navbar