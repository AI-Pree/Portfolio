import React, {ReactElement} from "react";
import {about} from "../data/about";

export default function About(): ReactElement {
    return (
        <section className="designer">
            <h2>
                <span className="red-color">{about.title}</span>
            </h2>
            <article>{about.intro}</article>
            <ul>
                {about.languages.map((language) => (
                    <li key={language.id}>
                        {language.title} ( level {language.skill_level} )
                    </li>
                ))}
            </ul>
        </section>
    );
}
