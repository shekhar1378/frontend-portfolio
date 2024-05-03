import React from "react";

const About = () => {
  return (
  <section id="about">
    <div className="w-full h-screen bg-zinc-900   p-1 flex">
      <div className="flex md:flex-row flex-col-reverse gap-10 items-center justify-center md:px-20 px-2">
        <div className="w-full md:px-2 px-2 ">
          <div className="flex flex-col  md:px-2 px-1  md:items-start items-center md:text-start text-center">
            <h1 className="flex capitalization md:text-[2rem] text-[1.8rem] leading-[3.5vw]  tracking-wide font-bold text-blue-700 mb-4">About Me</h1>
            <h1 className="flex capitalization md:text-[1.4rem] text-[1rem] leading-none  tracking-wide">
              Hey, I'm
            </h1>
            <h1 className="flex capitalization md:text-[2rem] text-[1.6rem]  font-bold leading-none  py-2">
              Chandra Shekhar Maurya,
            </h1>
            <h1 className="flex capitalization text-[1rem]  mb-4 tracking-wide py-2">
              and I'm a Frontend Developer. My passion is to create and develop a clean UI/UX for my users.
            </h1>
            <h1 className="flex  capitalization text-[1rem] tracking-wide">
              My main stack currently is React/Next.js in combination with Tailwind CSS and TypeScript.
            </h1>
          </div>
        </div>
        <div className="w-full px-1 ">
          <div className=" overflow-hidden">
            <img
              src="https://images.pexels.com/photos/91227/pexels-photo-91227.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
              alt=""
            />
          </div>
        </div>
      </div>
    </div>
    </section>
  );
};

export default About;
