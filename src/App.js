import React from 'react'

import './App.css'
import { Navbar, IntroPersonal, Image, Footer } from "./components";

const App = () => {
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

export default App