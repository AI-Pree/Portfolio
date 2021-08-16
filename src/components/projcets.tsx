import React, {ReactElement} from "react";
import {projects} from ".././data/projects";

export default function Projects(): ReactElement {
    return (
        <section className="projects">
            <h2>
                <span className="green-color">Projects</span>
            </h2>
            <ul>
                {projects.map((project) => (
                    <li key={project.id}>
                        <ul className="display-inline">
                            <li>
                                <h2 className="grey-trans">{project.title}</h2>
                            </li>
                            <li>
                                <h1 className="green-color">
                                    {project.spent}
                                    <span className="day-font grey-trans">days</span>
                                </h1>
                            </li>
                        </ul>
                        <p>
                            <span className="light-bold green-color">
                                {project.description}
                            </span>
                        </p>
                        <p>{project.details}</p>
                    </li>
                ))}
            </ul>
        </section>
    );
}