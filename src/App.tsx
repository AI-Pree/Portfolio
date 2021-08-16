import React, {ReactElement} from "react";
import "./App.css";
import Header from "./components/header";
import About from "./components/about";
import Projects from "./components/projcets";
import Experience from "./components/experience";
import Nav from "./components/nav";

function App(): ReactElement {
    return (
        <main className="grid">
            <Nav />
            <Header />
            <About />
            <Experience />
            <Projects />
        </main>
    );
}

export default App;
