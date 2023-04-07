import React from 'react'
import './navbar.css'
import gitHubLogo from '../../assests/github-mark/github-mark-white.svg'

const Navbar = () => {
    return (
        <div className="navbar">
            <img src={gitHubLogo} alt="GitHub" id="gitHubLogo"/>
        </div>
    )
}

export default Navbar