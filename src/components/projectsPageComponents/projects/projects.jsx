import React from 'react'
import './projects.css'

const ProjectsContent = () => {
    return (
        <div>
            <div className="project">
                <div className="projectContent">
                    <img className="riceCADGIF" src="https://web.engr.oregonstate.edu/~hessro/static/media/riceCAD.f0e34f6de6e2be6a5015.gif" alt="GIF demonstrating how riceCAD online works"/>
                    <div className="projectDescription">
                        <label className="p1">
                            I collaborated with a team of talented web developers to create a cutting-edge project that showcases our skills in front-end development, back-end development, and UX design
                        </label>
                        <div className="lineBreak"></div>
                        <label className="p2">
                            riceCAD, is a lightweight, online CAD (computer-assisted design tool) for generating schematics that can be used by OpenComputers robots (utilizing the riceBUILD program) to build your projects in game automatically! You design it, you publish it, and your in-game minecraft robot builds it
                        </label>
                    </div>
                </div>
                <div className="projectInfo">
                    <button className="linkButton" title="riceCAD GitHub Repository">riceCAD Online</button>
                    <h2>2022</h2>
                </div>
            </div>

            <div id="modal-backdrop" className="hidden"></div>
            <div className="links hidden">
                <button onClick={ ()=> handleClick("https://github.com/trentonyo/riceCAD")} id="gitHubButton">GitHub Repository</button>
                <button onClick={ ()=> handleClick("https://ricecad.herokuapp.com")} id="webLinkButton">Website Link</button>
            </div>
        </div>
    )
}

window.onload = function () {
    const linkButton = document.querySelector('.linkButton')
    const modalBackdrop = document.getElementById('modal-backdrop')
    const links = document.querySelector('.links')
    const imageLink = document.querySelector('.riceCADGIF')

    imageLink.addEventListener('click', function(event) {

        modalBackdrop.classList.toggle('hidden')
        links.classList.toggle('hidden')
        console.log("clicked")
    })

    linkButton.addEventListener('click', function(event) {
        modalBackdrop.classList.toggle('hidden')
        links.classList.toggle('hidden')
    })

    document.addEventListener('click', function(event) {
        if (!links.contains(event.target) && !linkButton.contains(event.target)) {
            modalBackdrop.classList.add('hidden')
            links.classList.add('hidden')
        }
    })
}

const handleClick = (link) => {
    window.location.href = link
}

export default ProjectsContent