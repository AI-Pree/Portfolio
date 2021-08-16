import React, {ReactElement} from "react";
import {experience} from "../data/experience";

export default function Experience(): ReactElement {
    return (
        <div>
            <h1>{experience.title}</h1>
            <p>{experience.intro}</p>
        </div>
    );
}
