import React from "react";

const About = () => {
  return (
    <section id="about" className="bg-zinc-900 pt-10 md:pt-32">
      <div className="container mx-auto px-4 py-20 md:px-20 flex flex-col md:flex-row-reverse items-center justify-center md:gap-10">
        <div className="w-full md:w-1/2 px-2 mb-10 md:mb-0">
          <div className="flex flex-col md:items-start items-center text-center md:text-start">
            <h1 className="text-2xl md:text-4xl font-bold text-blue-700 mb-4">
              About Me
            </h1>
            <h2 className="text-xl md:text-2xl font-bold text-blue-100 mb-4">
              Hey, I'm Chandra Shekhar Maurya,
            </h2>
            <p className="text-lg md:text-xl mb-8 text-zinc-300">
              I'm a Frontend Developer passionate about creating clean UI/UX experiences for users. 
            </p>
            <p className="text-lg md:text-xl mb-8 text-zinc-300">
            My main stack includes React/Next.js, Tailwind CSS, and TypeScript.
            </p>
          </div>
        </div>
        <div className="w-full md:w-1/2 px-2">
          <div className="overflow-hidden rounded-lg">
            <img
              src="https://images.pexels.com/photos/91227/pexels-photo-91227.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
              alt="Profile"
              className="w-full h-auto"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
