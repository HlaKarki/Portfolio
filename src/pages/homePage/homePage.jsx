import React from "react";
import {Footer, Image, IntroPersonal, Navbar} from "../../components";
import './homePage.css'
const HomePage = () => {
    return (
        <div className="App">
            <div>
                <Navbar/>
                <div className="infoContainer">
                    <IntroPersonal/>
                    <Image/>
                </div>
                <Footer/>
            </div>
        </div>
    )
}

export default HomePage