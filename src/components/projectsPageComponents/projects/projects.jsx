import React, { useState, useEffect } from 'react'
import './projects.css'

import { default as ProjectTemplate } from './projectTemplate'
import riceCADGIF from '../../../assests/riceCAD.gif'
import guessItGIF from '../../../assests/guessIt.gif'
import uniCourseGIF from '../../../assests/uniCourse.gif'

const ProjectsContent = () => {

    const [repoLink, setRepoLink] = useState("");
    const [webLink, setWebLink] = useState("");

    const handleClick = (link) => {
        // window.location.href = link
        window.open(link, "_blank")
    }
    useEffect(() => {
        const project1Links = [
            "https://github.com/HlaKarki/GuessIt",
            "https://snowy-surf-9881.fly.dev/",
        ];
        const project2Links = [
            "https://github.com/trentonyo/riceCAD",
            "https://ricecad.herokuapp.com",
        ];
        const project3Links = [
            "https://github.com/HlaKarki/CS340Project",
            // "https://flip2.engr.oregonstate.edu:2015/"
        ]

        const links = document.querySelector(".links");
        const modalBackdrop = document.getElementById("modal-backdrop");
        const linkButtons = document.querySelectorAll(".linkButton");

        if (links && modalBackdrop && linkButtons) {
            linkButtons.forEach((linkButton) => {
                linkButton.addEventListener("click", function (event) {
                    modalBackdrop.classList.toggle("hidden");
                    links.classList.toggle("hidden");

                    if (linkButton.textContent.includes("GuessIt")) {
                        setRepoLink(project1Links[0]);
                        setWebLink(project1Links[1]);
                    } else if (linkButton.textContent.includes("riceCAD")) {
                        setRepoLink(project2Links[0]);
                        setWebLink(project2Links[1]);
                    }
                    else if (linkButton.textContent.includes("University Course Planner")) {
                        setRepoLink(project3Links[0]);
                        setWebLink("");
                    }
                });
            });

            document.addEventListener("click", function (event) {
                if (!links.classList.contains("hidden")) {
                    let found = false;
                    for (let i = 0; i < linkButtons.length; i++) {
                        if (linkButtons[i].contains(event.target)) {
                            found = true;
                            break;
                        }
                    }
                    if (!found && !links.contains(event.target)) {
                        modalBackdrop.classList.toggle("hidden");
                        links.classList.toggle("hidden");
                    }
                }
            });
        }
    }, []);

    const project1Info = {
        gifSource: guessItGIF,
        projectDesc1: "GuessIt is a web-based word guessing game that I created to improve my front-end, back-end, and UX skills while at the same time providing potential users with a fun and challenging way to test their vocabulary and logic skills.",
        projectDesc2: "The game is similar to the popular Wordle game and challenges players to guess a five-letter word based on limited guesses and feedback. For the front-end, I used HTML, CSS, and JavaScript to create a responsive and interactive user interface. On the back-end, I used Node.js and Express.js to handle user authentication, game logic, and data storage. To improve the UX, I conducted user research and usability testing, and made iterative changes based on user feedback. One of the challenges I faced was optimizing the game's performance, which I overcame by implementing caching and other performance optimizations.",
        titleButtonText: "GuessIt",
        year: "2023"
    };

    const project2Info = {
        gifSource: riceCADGIF,
        projectDesc1: "I collaborated with a team of talented web developers to create a cutting-edge project that showcases our skills in front-end development, back-end development, and UX design",
        projectDesc2: "riceCAD is a lightweight, online CAD (computer-assisted design) tool for generating schematics that can be used by OpenComputers robots (utilizing the riceBUILD program) to build your projects in-game (Minecraft) automatically! You design it, you publish it, and your in-game robot builds it",
        titleButtonText: "riceCAD online",
        year: "2022"
    };

    const project3Info = {
        gifSource: uniCourseGIF,
        projectDesc1: "I developed a robust university course planner as a practical application of the knowledge acquired during my database course. This dynamic website seamlessly incorporates the powerful Database Management System, MariaDB, to provide a comprehensive and user-friendly experience.",
        projectDesc2: "The course planner website operates by retrieving real-time data from a meticulously designed schema hosted on Oregon State University's flip servers. Through direct connection with the university's database, this platform enables users to access up-to-date course information, including class schedules, prerequisites, and availability.\n" +
            "        Additionally, the website empowers users with the ability to interact with the database in a meaningful way. It allows for the insertion of new course data, facilitating updates to existing records, and even provides options to remove outdated or irrelevant information. By integrating these functionalities, the course planner ensures that users can effectively plan their academic journey and make informed decisions.\n" +
            "        With the seamless integration of MariaDB, a robust database management system, and a user-friendly interface, the university course planner demonstrates my expertise in database-driven web development and showcases my ability to deliver practical solutions in an educational context.",
        titleButtonText: "University Course Planner",
        year: "2023"
    };




    return (
        <div>

            <ProjectTemplate {...project3Info} />
            <ProjectTemplate {...project1Info} />
            <ProjectTemplate {...project2Info} />

            <div id="modal-backdrop" className="hidden"></div>
            <div className="links hidden">
                <button onClick={ ()=> handleClick(repoLink)} id="gitHubButton">GitHub Repository</button>
                {
                    webLink !== "" &&
                    <button onClick={() => handleClick(webLink)} id="webLinkButton">Website Link</button>
                }

            </div>
        </div>
    )
}

export default ProjectsContent