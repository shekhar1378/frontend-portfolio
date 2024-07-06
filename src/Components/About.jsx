import React from "react";

const About = () => {
  return (
    <section id="about" className="bg-zinc-900 pt-10 md:pt-32">
      <div className="container mx-auto px-4 py-20 md:px-20 flex flex-col  items-center justify-center md:gap-10">
        <div className="w-full  px-2 mb-10 md:mb-0">
          <div className="flex  flex-col   md:text-start text-center md:px-24">
            <h1 className=" text-2xl md:text-[2.4rem] font-bold text-blue-700 mb-4">
              About Me
            </h1>
            <h2 className="text-xl md:text-2xl font-bold text-blue-100 mb-4">
              Hey, I'm Chandra Shekhar Maurya,
            </h2>
            <p className="text-lg md:text-xl mb-8 text-zinc-300">
              I'm a Frontend Developer passionate about creating clean<br/> UI/UX experiences for users. 
            </p>
            <p className="text-lg md:text-xl mb-8 text-zinc-300">
            My main stack includes React.js, with<br/>Tailwind CSS.
            </p>
          </div>
          <div className="md:px-20 flex md:justify-start justify-center ">
         
          </div>
        </div>

        {/* <div className="w-full flex items-start justify-start py-10 md:px-20">
          <div className="skills flex md:flex-row flex-col items-center gap-10  px-2">
            <h1 className="text-[1.2rem] font-semibold px-2">Tech Stack</h1>
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
        </div>  */}
       
      </div>
    </section>
  );
};

export default About;
