import React, { useState, useEffect } from 'react'
import './projects.css'

import { default as ProjectTemplate } from './projectTemplate'
import riceCADGIF from '../../../assests/riceCAD.gif'
import guessItGIF from '../../../assests/guessIt.gif'

const ProjectsContent = () => {

    const [repoLink, setRepoLink] = useState("");
    const [webLink, setWebLink] = useState("");

    const handleClick = (link) => {
        window.location.href = link
    }
    useEffect(() => {
        const project1Links = [
            "https://github.com/HlaKarki/CS361Project/tree/GuessiT.v.2",
            "https://guessit.herokuapp.com",
        ];
        const project2Links = [
            "https://github.com/trentonyo/riceCAD",
            "https://ricecad.herokuapp.com",
        ];

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

    return (
        <div>

            <ProjectTemplate {...project1Info} />
            <ProjectTemplate {...project2Info} />

            <div id="modal-backdrop" className="hidden"></div>
            <div className="links hidden">
                <button onClick={ ()=> handleClick(repoLink)} id="gitHubButton">GitHub Repository</button>
                <button onClick={ ()=> handleClick(webLink)} id="webLinkButton">Website Link</button>
            </div>
        </div>
    )
}

export default ProjectsContent