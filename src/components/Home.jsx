import React from "react";

import HeroImage from "../assets/heroImage.jpeg";
import { Link } from "react-scroll";
import { MdOutlineKeyboardArrowRight } from "react-icons/md";

export default function Home() {
    return (
        <>
            <div
                name="home"
                className="h-full md:h-screen w-full bg-gradient-to-b from-black via-black to-gray-800"
            >
                <div className="max-w-screen-lg mx-auto flex flex-col-reverse items-center justify-center gap-8 h-full px-4 md:flex-row pt-32 lg:pt-0">
                    <div className="flex flex-col justify-center h-auto">
                        <h2 className="text-4xl sm:text-6xl font-bold text-white">
                            I'm a Frontend Developer
                        </h2>
                        <p className="text-gray-400 py-4 max-w-md">
                            “Enthusiastic about building web applications and
                            creating intuitive user experiences with strong web
                            development fundamentals”
                        </p>

                        <div className="pt-6">
                            <Link
                                to="projects"
                                smooth
                                duration={800}
                                className="group text-white w-fit px-6 py-3 my-2 flex items-center rounded-md bg-gradient-to-r from-cyan-500 to-blue-500 cursor-pointer"
                            >
                                Projects
                                <span className="group-hover:rotate-90 duration-300">
                                    <MdOutlineKeyboardArrowRight
                                        size={25}
                                        className="ml-1"
                                    />
                                </span>
                            </Link>
                        </div>
                    </div>

                    <div className="">
                        <img
                            src={HeroImage}
                            alt="my profile"
                            className="rounded-full mx-auto w-2/3 md:w-2/3"
                        />
                    </div>
                </div>
            </div>
        </>
    );
}
