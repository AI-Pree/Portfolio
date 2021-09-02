import React, {ReactElement} from "react";
import {projects} from "../../data/projects";

import {CarouselItem} from "../../components/containers/carouselcontainer";
import {CarouselContainer} from "../../components/containers/carouselcontainer";

export default function Projects(): ReactElement {
    return (
        <section className="projects">
            <h1>
                <span className="green-color">Projects</span>
            </h1>
            <CarouselContainer>
                {projects.map((project) => (
                    <CarouselItem key={project.id} item={project} />
                ))}
            </CarouselContainer>
        </section>
    );
}
