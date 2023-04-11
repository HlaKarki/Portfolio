import React from 'react'
import './projects.css'

import { Header } from "../../components/projectsPageComponents";
import { ProjectsContent } from "../../components/projectsPageComponents";
import { NavPath } from "../../components/projectsPageComponents";

const Projects = () => {
    return (
        <div className="projectPageBody">
            <NavPath />
            <div className="contents">
                <Header />
                <ProjectsContent />
            </div>
        </div>
    )
}

export default Projects