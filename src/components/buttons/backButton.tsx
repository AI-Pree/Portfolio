import React from "react";
import {ReactElement} from "react";

import {useHistory} from "react-router";

export default function BackButton(): ReactElement {
    const history = useHistory();
    const handleClick = () => {
        history.push("/projects");
    };

    return (
        <>
            <button type="button" onClick={handleClick}>
                Back
            </button>
        </>
    );
}
