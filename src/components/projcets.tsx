import React, {ReactElement} from "react";
import {projects} from ".././data/projects";

export default function Projects(): ReactElement {
    return (
        <div>
            <h1>Projects</h1>
            {projects.map((project) => (
                <p key={project.id}>{project.title}</p>
            ))}
        </div>
    );
}
