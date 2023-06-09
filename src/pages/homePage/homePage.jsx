import React from "react";
import {Footer, Image, IntroPersonal, Navbar} from "../../components/homePageComponents";
import './homePage.css'
const HomePage = () => {
    return (
        <div className="App">
            <div>
                <Navbar/>
                <div className="infoContainer">
                    <Image />
                    <IntroPersonal />
                </div>
                <Footer/>
            </div>
        </div>
    )
}

export default HomePage