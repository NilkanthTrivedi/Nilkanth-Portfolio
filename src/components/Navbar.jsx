import React, { useState } from "react";

import { FaBars, FaTimes } from "react-icons/fa";
import { Link } from "react-scroll";

export default function Navbar() {
    //
    const [nav, setNav] = useState(true);

    // For Navbar Links
    const links = [
        {
            id: 1,
            link: "home",
        },
        {
            id: 2,
            link: "about",
        },
        {
            id: 3,
            link: "projects",
        },
        {
            id: 4,
            link: "experience",
        },
        {
            id: 5,
            link: "contact",
        },
    ];
    return (
        <div className="flex justify-between items-center w-full h-20 px-10 text-white bg-black fixed z-50 ">
            <div>
                <h1 className="ml-3 text-3xl">Nilkanth Trivedi</h1>
            </div>

            {/* Here in tailwid is mobile first css */}

            <ul className="hidden md:flex">
                {links.map(({ id, link }) => (
                    <li
                        key={id}
                        className="px-4 cursor-pointer capitalize font-medium text-gray-400 hover:scale-105 duration-200"
                    >
                        <Link to={link} smooth duration={800}>
                            {link}
                        </Link>
                    </li>
                ))}
            </ul>

            {/* For Bar Icon */}

            <div
                onClick={() => setNav(!nav)}
                className="cursor-pointer pr-4 z-10 text-gray-400 md:hidden"
            >
                {nav ? <FaBars size={30} /> : <FaTimes size={30} />}
            </div>
            {!nav && (
                <ul className="flex flex-col justify-center items-center absolute top-0 left-0 w-full h-screen bg-gradient-to-b from-black to-gray-800 text-gray-500">
                    {links.map(({ id, link }) => (
                        <li
                            key={id}
                            className="px-4 cursor-pointer capitalize py-4
                        text-3xl"
                        >
                            <Link
                                onClick={() => setNav(!nav)}
                                to={link}
                                smooth
                                duration={800}
                            >
                                {link}
                            </Link>
                        </li>
                    ))}
                </ul>
            )}
        </div>
    );
}
