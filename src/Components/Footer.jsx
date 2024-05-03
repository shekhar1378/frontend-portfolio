import React from 'react'
import { FaXTwitter  } from "react-icons/fa6";
import { FiGithub } from "react-icons/fi";
import { TbBrandLinkedin } from "react-icons/tb";

const Footer = () => {
  return (
    <div className=' bg-zinc-800 md:p-8 p-6'>
        <div className='flex md:flex-row flex-col items-center justify-between md:px-16'>
        <div className='flex items-center'>
            <h3 className='text-[1.2rem] font-bold px-6 text-center tracking-wide'>Copyright © {new Date().getFullYear()}. All rights are reserved</h3>
        </div>

        <div className='flex gap-5 items-center md:px-6 p-8'>
            <span className=' text-[1.4rem]'><FaXTwitter/></span>
            <span className=' text-[1.4rem]'><FiGithub/></span>
            <span className=' text-[1.6rem]'><TbBrandLinkedin/></span>
        </div>
        </div>
    </div>  
  )
}

export default Footer
