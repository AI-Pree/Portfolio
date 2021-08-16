import React, {ReactElement} from "react";

export default function Header(): ReactElement {
    return (
        <header>
            <h1 className="hi">
                <span className="grey-trans">
                    Hi, <br />
                </span>
            </h1>
            <h2>
                <span> I build scalable web applications.</span>
            </h2>

            <div className="little-container grey-color">
                <div className="box-line">
                    <hr className="line display-line" />
                </div>
                <div className="animate-head">
                    <p>
                        I have a serious passion for software development followed with
                        writing elegant, clean and efficent code.
                    </p>
                </div>
            </div>
        </header>
    );
}
