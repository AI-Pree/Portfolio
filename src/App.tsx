import React, {ReactElement} from "react";
import "./App.css";
import About from "./components/about";
import Projects from "./components/projcets";
import Experience from "./components/experience";
import Nav from "./components/nav";

function App(): ReactElement {
    return (
        <main>
            <Nav />
            <About />
            <Projects />
            <Experience />
        </main>
    );
}

export default App;
