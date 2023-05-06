import React from 'react'

import './App.css'

import { BrowserRouter, Routes, Route } from 'react-router-dom';
import HomePage from "./pages/homePage/homePage";
import Projects from "./pages/projectsPage/projects";

const App = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<HomePage />}/>
                <Route path={"/projects/"} element={<Projects />}/>
            </Routes>
        </BrowserRouter>
    )
}

export default App