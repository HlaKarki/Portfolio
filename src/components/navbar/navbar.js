import React from 'react'
import './navbar.css'
import gitHubLogo from '../../assests/github-mark/github-mark-white.svg'

const Navbar = () => {
    return (
        <div className="navbar">
            <p>
                <img src={gitHubLogo} alt="GitHub" />
            </p>
        </div>
    )
}

export default Navbar