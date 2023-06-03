import React from 'react'
import './navPath.css'
import {Link} from "react-router-dom";

const NavPath = () => {
    return (
        <div className="navPathLinks">
            <Link to="/">
                <span title="Go to Hla's homepage">> Hla</span> /
            </Link>
            <Link to="/projects">
                <span> Projects</span>
            </Link>
        </div>
    )
}


export default NavPath