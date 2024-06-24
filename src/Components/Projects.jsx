import React from "react";
import "../App.css";

const Projects = () => {
  const projectsList = [
    {
      name: "Devtube",
      description:
        "Devtube is a video streaming platform built using React, Tailwind CSS and YouTube's public API.",
      image: "/devtube.jpeg",
      year: "2024",
      link:"https://yt-devtube.vercel.app"
    },
    {
      name: "Everyday-needs",
      description:
        "This is a minimalist e-commerce website,This website features a modern and intuitive design, with easy-to-use navigation.",
      image: "/everyday-needs.jpeg",
      year: "2024",
      link:"https://everyday-need.vercel.app"
    },
    // {
    //   name: "Twice",
    //   description:
    //     "Twice is an app that allows users to create and share their own custom music playlists.",
    //   image: "https://hailee.netlify.app/assets/img/work2.jpg",
    //   year: "2024",
    // },
  ];

  return (
    <section id="projects" className="pt-10 md:pt-32 ">
      <div className="container flex flex-col  mx-auto lg:px-20 px-4 py-10">
        <h1 className="text-[2rem] font-semibold text-center mb-8">
          Creating Next Level Digital Products
        </h1>

        <div className="flex flex-wrap items-center justify-center md:gap-20 gap-8">
          {projectsList.map((project, index) => (
            <div key={index} className="h-[30rem] w-[22rem] bg-zinc-800 rounded-lg shadow-md">
              <div className=" px-6 py-6 rounded-lg">
                <img
                  src={project.image}
                  alt={project.name}
                  className="w-full h-56 object-fill rounded-lg"
                />
              </div>
              <div className="px-6">
                <h2 className="text-lg font-semibold mb-2">{project.name}</h2>
                <p className="text-sm text-gray-400 mb-4">
                  {project.description}
                </p>

                <button className="flex px-4 py-2 bg-zinc-700 text-white rounded-md transition duration-300 hover:bg-gray-700">
                  {" "}
                  <a 
                  href={project.link}
                  target="_blank"
                  rel="noopener noreferrer">
                    Demo
                  </a>{" "}
                  <div className="arrow-wrapper">
                    <div className="arrow"></div>
                  </div>
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
