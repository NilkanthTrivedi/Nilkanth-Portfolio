import React from "react";

import agency from "../assets/projects/Agency.png";
import disneyClone from "../assets/projects/DisneyClone.png";
import institute from "../assets/projects/Institute.png";
import lapinoz from "../assets/projects/Lapinoz.png";
import motivator from "../assets/projects/Motivator.png";
import seven from "../assets/projects/TheSeven.png";
import trekking from "../assets/projects/Trekking.png";

const Chip = (props) => (
    <span className=" bg-gray-700 rounded-full text-xs px-3 py-1">
        {props.title}
    </span>
);

export default function Projects() {
    const projs = [
        {
            id: 1,
            src: disneyClone,
            title: "Disney+ Clone",
            techStack: ["ReactJS", "Firebase"],
            siteUrl: "https://disneyy-clone.netlify.app/",
            gitHref: "https://github.com/NilkanthTrivedi/disney-clone",
        },
        {
            id: 2,
            src: lapinoz,
            title: "Lapinoz Pizza",
            techStack: ["ReactJS", "Styled-Components", "CSS"],
            siteUrl: "https://lapinozzz-clone.netlify.app/",
            gitHref: "https://github.com/NilkanthTrivedi/lapinoz-clone",
        },
        {
            id: 3,
            src: institute,
            title: "Study Institute",
            techStack: ["HTML", "CSS", "Bootstrap5"],
            siteUrl: "https://it-institute.netlify.app/",
            gitHref:
                "https://github.com/NilkanthTrivedi/it-institute-portfolio",
        },
        {
            id: 4,
            src: trekking,
            title: "Hiking And Treks",
            techStack: ["HTML", "CSS"],
            siteUrl: "https://trekking-portfolio.netlify.app/",
            gitHref: "https://github.com/NilkanthTrivedi/trekking-portfolio",
        },
        {
            id: 5,
            src: agency,
            title: "Marketing Agency",
            techStack: ["Html", "CSS", "Grid"],
            siteUrl: "https://marketing-agency-grid-template.netlify.app/",
            gitHref:
                "https://github.com/NilkanthTrivedi/marketing-agency-template",
        },
        {
            id: 6,
            src: seven,
            title: "The Seven",
            techStack: ["HTMl", "CSS"],
            siteUrl: "https://the-seven-portfolio.netlify.app/",
            gitHref: "https://github.com/NilkanthTrivedi/the-seven-portfolio",
        },
        {
            id: 7,
            src: motivator,
            title: "Public Speaker",
            techStack: ["HTML", "CSS"],
            siteUrl: "https://incredible-froyo-8e1ab3.netlify.app/",
            gitHref:
                "https://github.com/NilkanthTrivedi/motivational-speaker-template",
        },
    ];
    return (
        <>
            <div
                name="projects"
                className="w-full h-full bg-gradient-to-b from-black to-gray-800 text-white md:pt-16"
            >
                <div className="max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full">
                    <div className="pb-8">
                        <p className="text-4xl font-bold inline border-b-4 border-gray-500">
                            Projects
                        </p>
                    </div>

                    <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-12 px-12 sm:px-0 pt-8">
                        {projs.map(
                            ({
                                id,
                                src,
                                title,
                                techStack,
                                gitHref,
                                siteUrl,
                            }) => (
                                <div
                                    key={id}
                                    className="shadow-md shadow-gray-600 rounded-lg text-center"
                                >
                                    <div className="font-semibold py-1 overflow-hidden">
                                        <p className="text-gray-300 py-2">
                                            {title}
                                        </p>

                                        <img
                                            src={src}
                                            alt=""
                                            className="rounded-md duration-200 hover:scale-110 object-cover w-full"
                                        />
                                        <div className="p-2">
                                            <div className="flex flex-wrap py-1 gap-2 w-auto">
                                                {techStack.map((item) => (
                                                    <Chip title={item} />
                                                ))}
                                            </div>
                                        </div>
                                    </div>
                                    <div className="flex p-2 py-3 text-center gap-2">
                                        <a
                                            href={siteUrl}
                                            target="_blank"
                                            className="w-1/2 px-4 py-1 border bg-gray-200 text-black font-semibold rounded-lg cursor-pointer hover:bg-gray-400 duration-100"
                                        >
                                            Demo
                                        </a>
                                        <a
                                            href={gitHref}
                                            target="_blank"
                                            className="w-1/2 px-4 py-1 bg-gray-700 rounded-lg cursor-pointer hover:bg-gray-600"
                                        >
                                            Code
                                        </a>
                                    </div>
                                </div>
                            )
                        )}
                    </div>
                </div>
            </div>
        </>
    );
}
