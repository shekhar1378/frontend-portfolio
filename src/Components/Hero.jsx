import React from "react";
import { FaXTwitter  } from "react-icons/fa6";
import { FiGithub } from "react-icons/fi";
import { TbBrandLinkedin } from "react-icons/tb";
import "./hero.css";

const Hero = () => {
  return (
    <section id="hero" className="bg-zinc-900 pt-32">
      <div className="container mx-auto md:w-[80%]">
        <div className="hero-main w-full flex md:flex-row flex-col-reverse px-6  items-center justify-center   md:gap-20">
          <div className="relative hero-text text-white leading-none items-center md:text-start text-center md:py-10  py-6">
            <h1 className="md:text-[3.6rem] text-[2.2rem] font-bold ">
              Front-End React<br/> Developer
            </h1>
            <img
              src="/public/static/waving.png"  
              className="md:w-[4rem] md:h-[4rem] w-[2.6rem] absolute md:top-[26%]  md:right-1/4 top-[22%] right-[6%] "
            />
            <p className="md:py-10 py-6 md:text-[1rem] text-[0.9rem]">
              Hi, I'm Chandra Shekhar Maurya. A passionate Front-end React
              <br/>Developer based in India.
            </p>
            <div className="flex items-center md:justify-start justify-center gap-3">
              <a href="https://github.com/shekhar1378" target="_blank" rel="noopener noreferrer">
                <FiGithub className="text-[1.7rem] hover:text-blue-700" />
              </a>
              <a href="https://twitter.com/shekhar9837" target="_blank" rel="noopener noreferrer">
                <FaXTwitter className="text-[1.7rem] hover:text-blue-700" />
              </a>
              <a href="https://www.linkedin.com/in/chandra-shekhar-maurya" target="_blank" rel="noopener noreferrer">
                <TbBrandLinkedin className="text-[2rem] hover:text-blue-700" />
              </a>
            </div>
            
          </div>
          <div className="hero-img">
            </div>
        

        
        </div>

        <div className="md:w-[90%] flex items-center justify-center py-16">
          <div className="skills flex md:flex-row flex-col items-center gap-10  px-2">
            <h1 className="text-[1.2rem] font-semibold ">Tech Stack</h1>
            <div className="border-r-2 border-zinc-100 h-[2rem] md:flex hidden"></div>
            <div className="logos  grid grid-row-2 ">
              <ul className=" gap-4 grid md:grid-cols-5 grid-cols-2 cursor-pointer">
                <li className="transform transition-transform hover:-translate-y-1">
                  <img src="https://skillicons.dev/icons?i=html,css" />
                </li>
                <li className="transform transition-transform hover:-translate-y-1">
                  <img src="https://skillicons.dev/icons?i=js,ts" />
                </li>
                <li className="transform transition-transform hover:-translate-y-1">
                  <img src="https://skillicons.dev/icons?i=react,nextjs" />
                </li>
                <li className="transform transition-transform hover:-translate-y-1">
                  <img src="https://skillicons.dev/icons?i=tailwind,sass" />
                </li>
                <li className="transform transition-transform hover:-translate-y-1">
                  <img src="https://skillicons.dev/icons?i=git,github" />
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
