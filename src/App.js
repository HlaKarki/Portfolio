import React from 'react'

import './App.css'
import { Navbar, IntroPersonal, Image } from "./components";

const App = () => {
    return (
        <div className="App">
            <div>
                <Navbar/>
                <div className="infoContainer">
                    <IntroPersonal/>
                    <Image/>
                </div>
            </div>
        </div>
    )
}

export default App