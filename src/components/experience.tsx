import React, {ReactElement} from "react";
import {experience} from "../data/experience";

export default function Experience(): ReactElement {
    return (
        <section className="developer">
            <h2>
                <span className="blue-color">{experience.title}</span>
            </h2>
            <p>{experience.intro}</p>
        </section>
    );
}
