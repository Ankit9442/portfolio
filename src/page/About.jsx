import React from "react";
import profile from "../asset/ankit.jpg";
import LineGradient from "../component/LineGradient";
const About = () => {
  return (
    <section>
      <div className="flex flex-col  w-5/6 mx-auto items-center sm:py-24 py-10">
        <div className="mb-5 px-10 ">
          <h1 className="w-full text-center text-2xl sm:text-3xl font-semibold font-serif">
            About Me{" "}
          </h1>
          <LineGradient />
        </div>
        <div className=" sm:flex sm:flex-row justify-center  w-5/6 mx-auto  gap-5   ">
          <div className="lg:w-[400px] sm:w-[400px]  w-[200px]  mx-auto pb-[5%]  ">
            <img src={profile} className="rounded-[200px] border-2  " />
          </div>
          <div className="flex flex-col gap-3 xs:text-xl font-serif  ">
            <span>
              My name is Ankit Rawat. I'm an Btech student at Graphic Era Hill
              University Computer Science Department. I was born and raised in
              Dehradun.
            </span>

            <span>
              {" "}
              I completed my secondary education from Baluni Public School,
              Dehradun and high school from Mary Mata School, Chinyali Saur.{" "}
            </span>
            <span>
              {" "}
              I like to travel. I believe travelling gives you a new perspective
              to everything. You get to know a lot about the different cultures,
              the cuisines, their history, the language and all the small unique
              things every place has to offer.
            </span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
