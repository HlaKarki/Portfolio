import React from 'react'
import './projectTemplate.css'

const ProjectTemplate = ( { gifSource, projectDesc1, projectDesc2, titleButtonText, year } ) => {
    return (
        <div>
            <div className="project">
                <div className="projectContent">
                    <img className="imageDisplay" src={gifSource} alt={"GIF demonstrating how " + titleButtonText + " works"}/>
                    <div className="projectDescription">
                        <label className="p1">
                            {projectDesc1}
                        </label>
                        <div className="lineBreak"></div>
                        <label className="p2">
                            {projectDesc2}
                        </label>
                    </div>
                </div>
                <div className="projectInfo">
                    <button className="linkButton" title={"links for this project"}>{titleButtonText}</button>
                    <h2>{year}</h2>
                </div>
            </div>
        </div>
    )
}


export default ProjectTemplate