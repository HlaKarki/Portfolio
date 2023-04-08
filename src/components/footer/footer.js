import React from 'react'
import './footer.css'

const handleClick = (link) => {
    window.location.href = link
}

const Footer = () => {
    return (
        <div className="footerDiv">
            <button onClick={ () => handleClick("https://www.linkedin.com/in/hlahtun")} title="Hla's LinkedIn Profile">LinkedIn</button>
            <button onClick={() => handleClick("https://twitter.com/hlakarki")} title="Hla's Twitter Profile">Twitter</button>
            <button onClick={() => handleClick("https://github.com/hlakarki")} title="Hla's GitHub Profile">GitHub</button>
        </div>
    )
}

export default Footer