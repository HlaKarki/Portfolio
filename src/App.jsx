import "./App.css"
import { useRef } from "react";

import gsap from "gsap"; // <-- import GSAP
import { useGSAP } from "@gsap/react"; // <-- import the hook from our React package

export default function App() {
    const container = useRef();

    useGSAP(() => {
        // gsap code here...
        gsap.to(".box", {rotation: 360}); // <-- automatically reverted

    }, { scope: container }) // <-- scope for selector text (optional)

    return (
        <div ref={container} className="app">
            <div className="box">Hello</div>
        </div>
    );
}