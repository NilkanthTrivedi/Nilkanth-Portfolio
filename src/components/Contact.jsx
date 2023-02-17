import React from "react";

export default function Contact() {
    return (
        <>
            <div
                name="contact"
                className="w-full h-screen bg-gradient-to-b from-black to-gray-800 p-4 text-white md:pt-20"
            >
                <div className="flex flex-col p-4 justify-center max-w-screen-lg mx-auto h-full">
                    <div className="pb-8">
                        <p className="text-4xl font-bold inline border-b-4 border-gray-500">
                            Contact
                        </p>
                        <p className="py-6">
                            Submit the form to get in touch with me
                        </p>
                    </div>
                    <div className="flex justify-center items-center">
                        <form
                            action="https://getform.io/f/b64c43ad-bfc8-43b9-ad2e-c4c5f7aa4fca"
                            method="POST"
                            className="flex flex-col w-full md:w-1/2"
                        >
                            <input
                                type="text"
                                name="name"
                                id=""
                                placeholder="Enter your name"
                                className="p-2 bg-transparent border-2 rounded-md text-white focus:outline-none"
                            />
                            <input
                                type="text"
                                name="email"
                                id=""
                                placeholder="Enter your email"
                                className="p-2 my-4 bg-transparent border-2 rounded-md text-white focus:outline-none"
                            />
                            <textarea
                                name="message"
                                placeholder="Enter your message"
                                id=""
                                cols="30"
                                rows="10"
                                className="p-2 bg-transparent border-2 rounded-md text-white focus:outline-none"
                            ></textarea>

                            <button className="text-white bg-gradient-to-b from-cyan-500 to-blue-500 px-6 py-3 my-8 mx-auto flex items-center rounded-md hover:scale-110 duration-300">
                                Let's talk
                            </button>
                        </form>
                    </div>
                </div>
            </div>
        </>
    );
}
