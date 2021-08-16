import React, {ReactElement} from "react";
import {projects} from ".././data/projects";

export default function Projects(): ReactElement {
    return (
        <section className="projects">
            <h2>
                <span className="orange-color">Projects</span>
            </h2>
            {projects.map((project) => (
                <p key={project.id}>{project.title}</p>
            ))}
        </section>
    );
}
