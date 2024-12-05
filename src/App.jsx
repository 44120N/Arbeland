import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import Navbar from "./components/Navbar";
import ColorPalette from "./components/ColorPalette";
import "./index.css";

function App() {
    const [count, setCount] = useState(0);

    return (
        <>
            <ColorPalette>
                <Navbar />
            </ColorPalette>
        </>
    );
}

export default App;
