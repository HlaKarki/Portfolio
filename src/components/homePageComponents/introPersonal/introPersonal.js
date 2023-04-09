import React from 'react'
import './introPersonal.css'
import { Link } from 'react-router-dom'

const IntroPersonal = () => {
    return (
        <div className="infos">
            <div className="introNameSE">
                <h1>Hi, I'm Hla Htun</h1>
                <h1>Software Engineer</h1>
            </div>

            <h2>Add breakpoints to your blank page, then drop sections to have them responsive out of the box</h2>
            <Link to="/projects">
                <button id="myProjectsButton">See my Projects</button>
            </Link>
        </div>
    )
}

export default IntroPersonal