import React, {ReactElement} from "react";
import {nav} from "../data/nav";

export default function Nav(): ReactElement {
    return (
        <div className="grid">
            <nav>
                <div className="nav-container">
                    <div className="toggle-icon">
                        <span className="bar"></span>
                        <span className="bar"></span>
                    </div>
                </div>

                <ul className="list-icons">
                    {nav[0].logos?.map((logo) => (
                        <li key={logo.id} className="logo-space">
                            <a href={logo.link}>
                                <i className={logo.classname}></i>
                            </a>
                        </li>
                    ))}
                </ul>
                <div className="smallNav"></div>
            </nav>

            <div className="sideNav">
                <div className="sideNav-content">
                    <ul>
                        {nav[1].contents?.map((content) => (
                            <li key={content.id}>
                                <h2>
                                    <a className={content.classname}>
                                        {content.title}
                                        <br />
                                    </a>
                                </h2>
                            </li>
                        ))}
                    </ul>
                </div>
            </div>
        </div>
    );
}
