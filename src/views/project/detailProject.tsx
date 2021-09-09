import React, {ReactElement} from "react";
import {useParams} from "react-router";
import BackButton from "../../components/buttons/backButton";

import {projects} from "../../data/projects";

export default function DetailProject(): ReactElement {
    const {id}: any = useParams();

    return (
        <>
            <BackButton />
            <h2>{projects[id - 1].title}</h2>
        </>
    );
}
