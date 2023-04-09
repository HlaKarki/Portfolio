import React from 'react'
import './projects.css'

import { Header } from "../../components/projectsPageComponents";
import { ProjectsContent } from "../../components/projectsPageComponents";

const Projects = () => {
    return (
        <div className="contents">
            <Header />
            <ProjectsContent />
        </div>
    )
}

export default Projects