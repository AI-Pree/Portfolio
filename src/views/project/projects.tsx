import React, {ReactElement} from "react";
import {projects} from "../../data/projects";

import {CarouselItem} from "../../components/containers/carouselcontainer";
import {CarouselContainer} from "../../components/containers/carouselcontainer";

const myButtonLink = "/project-details";

export default function Projects(): ReactElement {
    return (
        <section className="projects">
            <CarouselContainer>
                {projects.map((project) => (
                    <CarouselItem
                        key={project.id}
                        item={project}
                        buttonLink={myButtonLink}
                    />
                ))}
            </CarouselContainer>
        </section>
    );
}
