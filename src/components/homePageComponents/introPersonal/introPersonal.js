import React from 'react'
import './introPersonal.css'
import { Link } from 'react-router-dom'

const IntroPersonal = () => {
    const personalDescription = "As a dedicated and curious individual with a passion for problem-solving, I am constantly seeking new challenges that allow me to apply my skills and expand my knowledge. With a strong foundation in programming languages such as JavaScript, C++, Java, and Python, I have honed my abilities in front-end development, back-end development, and UX design. I am a detail-oriented and collaborative team player, with experience working on projects that require both technical expertise and creativity. I am eager to apply my skills and knowledge in a professional setting and contribute to the success of any team I work with and will continue to strive towards exceeding expectations."
    return (
        <div className="infos">
            <div className="introNameSE">
                <h1>Hi, I'm Hla Htun</h1>
                <h1>Software Engineer</h1>
            </div>

            <h2>{personalDescription}</h2>
            <Link to="/projects">
                <button className="projectLinkButton">
                    <svg>
                        <rect x="0" y="0" fill="none" width="100%" height="100%"/>
                    </svg>
                    Explore my work
                </button>
            </Link>
        </div>
    )
}

export default IntroPersonal