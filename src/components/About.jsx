import React from "react";

export default function About() {
    return (
        <>
            <div
                name="about"
                className="w-full h-full bg-gradient-to-b from-gray-800 to-black text-white md:pt-16"
            >
                <div className="max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full">
                    <div className="pb-2">
                        <p className="text-4xl font-bold inline border-b-4 border-gray-500">
                            About
                        </p>
                    </div>

                    <p className="text-xl mt-10">
                        As a React JS developer, I have a strong understanding
                        of front-end technologies and a passion for building
                        intuitive and responsive user interfaces. With
                        experience in JavaScript, HTML, and CSS, I am skilled at
                        developing dynamic and interactive web applications
                        using the React JS framework.
                    </p>

                    <br />

                    <p className="text-xl">
                        I have completed my web-development course from Tops
                        Technologies Ahmedabad, and my internship at StackDot.
                        Also, I have completed several online courses and
                        projects to enhance my understanding of web development.
                        I am comfortable working with modern development tools
                        and practices, package managers (such as npm), and build
                        tools (such as Webpack).
                    </p>

                    <br />

                    <p className="text-xl">
                        I am a quick learner and always seek new challenges and
                        opportunities to grow and improve as a developer. I am
                        eager to join a team of experienced professionals and
                        bring my enthusiasm and potential to create creative and
                        engaging web applications.
                    </p>
                </div>
            </div>
        </>
    );
}
