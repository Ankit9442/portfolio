import React, { useState } from "react";
import { CiFacebook, CiTwitter, CiLinkedin, CiInstagram } from "react-icons/ci";
import "./App.css";
import backPhoto from "./asset/back.jpg";
import Landing from "./page/Landing";
import Navbar from "./page/Navbar";
import About from "./page/About";
import LineGradient from "./component/LineGradient";
import Projects from "./page/Projects";
import Blog from "./page/Blog";
import Skill from "./page/Skill";
function App() {
  const [selectedPage, setSelectedPage] = useState("home");

  const [isTopOfPage, setIsTopOfPage] = useState(true);
 console.log("app" , selectedPage)
  return (
    <div>
      <div
        id="home"
        style={{ backgroundImage: `url(${backPhoto})` }}
        className="app bg-cover bg-center w-screen  h-screen py-10 relative "
      > 
        <Navbar selectedPage={selectedPage} setSelectedPage={setSelectedPage} />
        </div>
        {/* <Landing
          selectedPage={selectedPage}
          setSelectedPage={setSelectedPage}
        /> */}
        <div className="bg-gray-500 sm:p-2 p-1 flex flex-col w-fit fixed left-0 top-[50%]  z-50 ">
          <span className="sm:p-2  p-1 m-1 sm:m-2  cursor-pointer inline-flex items-center w-fit  bg-white   rounded   mx-1.5 text-xl  hover:text-white hover:bg-rose-500 hover:scale-125    duration-300 ">
            <CiFacebook size={25} />
          </span>
          <span className="sm:p-2 p-1  m-1 sm:m-2  cursor-pointer inline-flex items-center w-fit bg-white    rounded   mx-1.5 text-xl  hover:text-white hover:bg-rose-500  hover:scale-125   duration-300 ">
            <CiTwitter size={25} />
          </span>
          <span className="sm:p-2 p-1  m-1 sm:m-2 cursor-pointer inline-flex items-center  w-fit bg-white   rounded   mx-1.5 text-xl  hover:text-white hover:bg-rose-500  hover:scale-125   duration-300 ">
            <CiLinkedin size={25} />
          </span>
          <span className="sm:p-2 p-1  m-1 sm:m-2 cursor-pointer inline-flex items-center  w-fit  bg-white  rounded   mx-1.5 text-xl  hover:text-white hover:bg-rose-500  hover:scale-125   duration-300 ">
            <CiInstagram size={25} />
          </span>
        </div>
     
      <div id="about">
        {" "}
        <About />
      </div>
      <LineGradient />
      <Projects />
      <LineGradient/>
      <Skill/>
      <LineGradient />
      <Blog />
    
    </div>
  );
}

export default App;

// <iframe
//   width="560"
//   height="315"
//   src="https://www.youtube.com/embed/xNRJwmlRBNU"
//   title="YouTube video player"
//   frameborder="0"
//   allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
//   allowfullscreen
// ></iframe>;
