import React, {ReactElement} from "react";
import {NavLink} from "react-router-dom";

import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faCaretRight} from "@fortawesome/free-solid-svg-icons";

import NormalButton from "../components/buttons/normalButton";

export default function Home(): ReactElement {
    return (
        <div className="homecontainer">
            <div className="header">
                <h1 className="hi">
                    <span className="grey-trans">
                        Hi, <br />
                    </span>
                </h1>
                <h2>
                    <span> I build scalable web applications</span>
                </h2>

                <div className="little-container grey-color">
                    <div className="box-line">
                        <hr className="line display-line" />
                    </div>
                    <div className="animate-head">
                        <p>
                            I have a serious passion for software development followed
                            with writing elegant, clean and efficent code.
                        </p>
                    </div>
                </div>
                <NavLink to="/about">
                    <NormalButton content="Explore more" colorClass="grey-bg">
                        <FontAwesomeIcon
                            icon={faCaretRight}
                            style={{margin: "0px 0px 0px 15px"}}
                        />
                    </NormalButton>
                </NavLink>
            </div>
        </div>
    );
}
