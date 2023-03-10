import React from "react";
import AnchorLink from "react-anchor-link-smooth-scroll"

const Landing = ({ selectedPage, setSelectedPage }) => {
  return (
    <div className="flex  w-5/6 mx-auto z-0">
      <div className="w-full h-screen  flex flex-col justify-end  items-center   ">
        <div className=" flex w-fit mx-auto  flex-col items-center justify-center sm:gap-10 gap-2 py-6 mb-20">
          <h1 className="lg:text-5xl  sm:text-4xl  text-3xl font-bold text-rose-500">
            {" "}
            Hi I'm Ankit Rawat
          </h1>
          <p className="sm:text-3xl text-xl text-white font-bold text-center  ">
            {" "}
            A computer science student passionate about programming and design.{" "}
          </p>
          <button
            onClick={setSelectedPage("projects")}
            className=" animate-bounce border sm:text-xl  border-gray-400 p-4 px-8 my-5 font-semibold tracking-wide   text-gray-400 hover:border-gray-400 hover:bg-rose-500 hover:text-white hover:scale-125 "
          >
          <AnchorLink 
            href={`#projects`}
            onClick={() => setSelectedPage("projects")}  >
          SEE MY WORK{" "}
        </AnchorLink>
           
          </button>
          
        </div>
      </div>
    </div>
  );
};

export default Landing;
