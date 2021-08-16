import React from 'react';
import logo from './logo.svg';
import './App.css';
import About from "./components/about";
import Projects from "./components/projcets";
import Experience from './components/experience';
import { projects } from './data/projects';

function App() {
  return (
    <main>
      <About />
      <Projects />
      <Experience />
    </main>
  );
}

export default App;
