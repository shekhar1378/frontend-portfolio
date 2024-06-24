import React from "react";
import { MdOutlineEmail } from "react-icons/md";
import { GrMapLocation } from "react-icons/gr";
import Footer from "./Footer";

const Contact = () => {
  return (
    <section id="contact">
      <div className="w-full  bg-zinc-900 md:p-20   flex flex-col">
        <div className="w-full md:mt-16 mt-40 md:px-20 px-6">
          <div className="flex flex-col md:items-start items-center  pb-16 md:px-10">
            <h1 className="text-[1.2rem] uppercase font-bold  text-blue-700">
              Contact
            </h1>
            <h1 className="text-[2rem] font-bold text-center ">
              Don't be Shy! Hit me up!👇
            </h1>
          </div>

          <div className="flex md:flex-row flex-col  md:gap-40 md:px-10  border-t-2 border-zinc-700">
            <div className="flex items-center rounded-lg py-10">
              <span className="flex  text-blue-700">
                <GrMapLocation className="text-[1.9rem]" />
              </span>
              <div className="flex  flex-col  ml-8">
                <h1 className="text-[1.2rem] font-bold tracking-wide">
                  Location
                </h1>
                <p className="text-[1rem] font-light tracking-wider cursor-pointer hover:text-blue-700">
                  India
                </p>
              </div>
            </div>
            <div className="flex items-center rounded-lg py-10">
              <span className="text-blue-700">
                <MdOutlineEmail className="text-[1.9rem]" />
              </span>
              <div className="ml-8">
                <h1 className="text-[1.2rem] font-bold  tracking-wide">Mail</h1>
                <a
                  href="mailto:mauryashekhar9837@gmail.com"
                  className="text-[1rem] cursor-pointer hover:text-blue-700"
                >
                  mauryashekhar9837@gmail.com
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
