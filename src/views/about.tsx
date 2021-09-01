import React, {ReactElement} from "react";
import {about} from "../data/about";

const style = {
    color: "#000",
};

export default function About(): ReactElement {
    return (
        <section className="designer">
            <h1>
                <span className="red-color">{about.title}</span>
            </h1>

            <div className="article">
                <h2 style={style}>Learning new things related to Computer Science.</h2>
                <p>{about.intro}</p>
            </div>
            {/* <ul>
                {about.languages.map((language) => (
                    <li key={language.id}>
                        {language.title} ( level {language.skill_level} )
                    </li>
                ))}
            </ul> */}
        </section>
    );
}
