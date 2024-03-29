import React, {ReactElement} from "react";
import {nav} from "../../data/nav";

type SideNavProps = {
    myColor: string;
};

export default function SideNav({myColor}: SideNavProps): ReactElement {
    return (
        <>
            <div className={`nav ${myColor}`}>
                <div className="nav-container">
                    <div className="toggle-icon">
                        <span className="bar"></span>
                        <span className="bar"></span>
                    </div>
                </div>

                <div className="smallNav"></div>
            </div>

            <div className="sideNav">
                <div className="sideNav-content">
                    <ul>
                        {nav.contents.map((content) => (
                            <li key={content.id}>
                                <h2>
                                    <a className={content.classnameSide}>
                                        {content.title}
                                        <br />
                                    </a>
                                </h2>
                            </li>
                        ))}
                    </ul>
                </div>
            </div>
        </>
    );
}
