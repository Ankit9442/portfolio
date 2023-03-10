import React from "react";
import LineGradient from "../component/LineGradient";
import html from "../asset/html.png";
import css from "../asset/css.png";
import javascript from "../asset/javascript.png";
import reactImage from "../asset/react.png";
import nextjs from "../asset/nextjs.png";
import graphql from "../asset/graphql.png";
import github from "../asset/github.png";
import tailwind from "../asset/tailwind.png";

const Skill = () => {
  const techs = [
    {
      id: 1,
      src: html,
      title: "HTML",
      style: "shadow-orange-500",
    },
    {
      id: 2,
      src: css,
      title: "CSS",
      style: "shadow-blue-500",
    },
    {
      id: 3,
      src: javascript,
      title: "JavaScript",
      style: "shadow-yellow-500",
    },
    {
      id: 4,
      src: reactImage,
      title: "React",
      style: "shadow-blue-600",
    },
    {
      id: 5,
      src: tailwind,
      title: "Tailwind",
      style: "shadow-sky-400",
    },
    {
      id: 6,
      src: nextjs,
      title: "Next JS",
      style: "shadow-white",
    },
    {
      id: 7,
      src: graphql,
      title: "GraphQL",
      style: "shadow-pink-400",
    },
    {
      id: 8,
      src: github,
      title: "GitHub",
      style: "shadow-gray-400",
    },
  ];

  return (
    <div
      id="skill"
      className="   py-10 w-5/6 mx-auto sm:py-24"
    >
      <div className="max-w-screen-lg mx-auto p-4 flex flex-col justify-center w-full h-full text-white">
      <div className="md:w-2/5 mx-auto text-center">
        <div className="mb-10">
          <p className="font-playfair font-semibold text-4xl">
            <span className="text-red">SKILL</span>
          </p>
          <div className="flex justify-center mt-1">
            <LineGradient width="w-2/3" />
          </div>
        </div>
      </div>
        <div>

          <p className="py-3">These are the technologies I've worked with</p>
        </div>

        <div className="w-full grid grid-cols-2 sm:grid-cols-3 gap-8 text-center py-8 px-12 sm:px-0">
          {techs.map(({ id, src, title, style }) => (
            <div
              key={id}
              className={`shadow-md hover:scale-105 duration-500 py-2 rounded-lg ${style}`}
            >
              <img src={src} alt="" className="w-20 mx-auto" />
              <p className="mt-4">{title}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Skill;