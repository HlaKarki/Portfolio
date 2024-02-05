import "./App.css"
import { useRef } from "react";
import Hla from "./components/hlahtun.jsx";

export default function App() {
    const container = useRef();

    return (
        // <div ref={container} className="app">
        //     <div className="box">Hello</div>
        // </div>
        <div>
            <Hla />
        </div>
    );
}