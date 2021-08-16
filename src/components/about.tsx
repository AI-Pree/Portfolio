import React, {ReactElement} from "react";
import {about} from "../data/about";

export default function About(): ReactElement {
    return (
        <div>
            <h1>{about.title}</h1>
            <p>{about.intro}</p>
            <ul>
                {about.languages.map((language) => (
                    <li key={language.id}>
                        {language.title} ( level {language.skill_level} )
                    </li>
                ))}
            </ul>
        </div>
    );
}
