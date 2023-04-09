import React from 'react'
import './navbar.css'
import gitHubLogo from '../../../assests/github-mark/github-mark-white.svg'

const Navbar = () => {
    return (
        <div className="navbar">
            <a href="https://github.com/HlaKarki">
                <img src={gitHubLogo} alt="GitHub" id="gitHubLogo"/>
            </a>
        </div>
    )
}

export default Navbar