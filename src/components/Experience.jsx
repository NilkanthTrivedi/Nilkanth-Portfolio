import React from "react";

import html from "../assets/html.png";
import css from "../assets/css.png";
import bootStrap from "../assets/Bootstrap_logo.png";
import javascript from "../assets/javascript.png";
import jquery from "../assets/jquery-logo.png";
import reactImage from "../assets/react.png";
// import redux from "../assets/redux.png";
import git from "../assets/Git-logo.png";
import github from "../assets/github.png";
import tailwind from "../assets/tailwind.png";

export default function Experience() {
  // For Technical Languages
  const techno = [
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
      title: "ReactJS",
      style: "shadow-sky-600",
    },

    {
      id: 5,
      src: jquery,
      title: "jQuery",
      style: "shadow-gray-400",
    },
    {
      id: 6,
      src: bootStrap,
      title: "Bootstrap",
      style: "shadow-gray-400",
    },

    {
      id: 7,
      src: tailwind,
      title: "TailWaind",
      style: "shadow-sky-400",
    },
    {
      id: 8,
      src: git,
      title: "Git",
      style: "shadow-orange-400",
    },
    {
      id: 9,
      src: github,
      title: "GitHub",
      style: "shadow-gray-400",
    },
  ];
  return (
    <>
      <div
        name="experience"
        className="w-full h-full bg-gradient-to-b from-gray-800 to-black md:pt-16"
      >
        <div className="max-w-screen-lg mx-auto p-4 flex flex-col justify-center w-full h-full text-white">
          <div>
            <p className="text-4xl font-bold border-b-4 border-gray-500 p-2 inline">
              Experience
            </p>
          </div>

          <div className="w-full grid grid-cols-2 sm:grid-cols-3 gap-12 text-center py-12 px-8 sm:px-0">
            {techno.map(({ id, src, title, style }) => (
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
    </>
  );
}
