import React from 'react'
import { FaXTwitter  } from "react-icons/fa6";
import { FiGithub } from "react-icons/fi";
import { TbBrandLinkedin } from "react-icons/tb";

const Footer = () => {
  return (
    <div className=' bg-zinc-800 md:p-8 p-6'>
        <div className='flex md:flex-row flex-col items-center justify-between md:px-4'>
        <div className='flex items-center'>
            <h3 className='text-[1.2rem] font-bold px-6 text-center tracking-wide'>Copyright © {new Date().getFullYear()}. All rights are reserved</h3>
        </div>

        <div className='flex gap-5 items-center md:px-6 p-8'>
         <a href="https://github.com/shekhar1378" target="_blank" rel="noopener noreferrer">
            <span className=' text-[1.4rem] hover:text-blue-700'><FiGithub/></span>
          </a>
          <a href="https://twitter.com/shekhar9837" target="_blank" rel="noopener noreferrer">
            <span className=' text-[1.4rem]  hover:text-blue-700'><FaXTwitter/></span>
            </a>
          <a href="https://www.linkedin.com/in/chandra-shekhar-maurya" target="_blank" rel="noopener noreferrer">
            <span className=' text-[1.6rem] hover:text-blue-700'><TbBrandLinkedin/></span>
            </a>


        </div>
        </div>
    </div>  
  )
}

export default Footer
