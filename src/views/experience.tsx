import React, {ReactElement} from "react";
import {experience} from "../data/experience";

export default function Experience(): ReactElement {
    return (
        <section className="developer">
            <h1>
                <span className="blue-color">{experience.title}</span>
            </h1>
            <div className="article">
                <p>{experience.intro}</p>
            </div>
        </section>
    );
}
