import React from "react";

const Projects = () => {
  const projectsList = [
    {
      name: "Twice",
      description:
        "Twice is an app that allows users to create and share their own custom music playlists.",
      image:
        "https://dennissnellenberg.com/media/pages/work/twice/0ab7e43954-1710404752/thumbnail-twice.jpg",
      year: "2024",
    },
    {
      name: "Twice",
      description:
        "Twice is an app that allows users to create and share their own custom music playlists.",
      image:
        "https://dennissnellenberg.com/media/pages/work/twice/0ab7e43954-1710404752/thumbnail-twice.jpg",
      year: "2024",
    },
    {
      name: "Twice",
      description:
        "Twice is an app that allows users to create and share their own custom music playlists.",
      image:
        "https://dennissnellenberg.com/media/pages/work/twice/0ab7e43954-1710404752/thumbnail-twice.jpg",
      year: "2024",
    },
  ];

  return (
    <section id="projects">
      <div className="w-full bg-zinc-900  p-1 flex items-center justify-center ">
        <div className="w-full flex justify-start items-start flex-col  px-2 py-4">
          <div className="w-full  md:px-14 px-1 py-10">
            <h1 className="block m-b-start-2rem md:text-[3.6rem] text-[2.8rem] leading-none">
              <span>Creating next level</span>
              <span> digital products</span>
            </h1>
            {/* <h1 className="md:text-[3.6rem] text-[2.8rem] leading-none"></h1> */}
          </div>

          <div className=" flex flex-col items-center space-x-3 gap-5 ">
            {projectsList.map((item, index) => (
              <div key={index} className=" bg-red-300">
                <div className=" grid grid-cols-2  ">
                  <img src={item.image} alt="" className="" />
                  <h1 className="text-xl font-bold">{item.name}</h1>
                  <div>
                    <p>{item.description}</p>
                    <p>{item.year}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Projects;
