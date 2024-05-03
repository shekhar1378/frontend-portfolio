import React from "react";
import { FaXTwitter  } from "react-icons/fa6";
import { FiGithub } from "react-icons/fi";
import { TbBrandLinkedin } from "react-icons/tb";


import "./hero.css"

const Hero = () => {

  return (
    <section id="hero">
    <div className="hero">
      <div className="hero-main">
        <div className="hero-text">
          <h1>
            Front-End React<br/>Developer
          </h1>
          <img src="./src/assets/waving.png" alt="" />
          <p>
            Hi, I'm Chandra Shekhar Maurya. A passionate Front-end React <br/>
            Developer based in India.
          </p>
          <span>
            <a href=""><FiGithub/></a>
            <a href=""><FaXTwitter /></a>
            <a href=""><TbBrandLinkedin className="text-[1.7rem]"/></a>
          </span>
          </div>
          <div className="hero-img"></div>
      </div>
    </div>
    </section>
  );
};

export default Hero;
