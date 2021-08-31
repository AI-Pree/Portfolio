import React, {ReactElement} from "react";
import {useCallback, useEffect, useMemo} from "react";
import Header from "../../views/header";
import About from "../../views/about";
import Projects from "../../views/project/projects";
import Experience from "../../views/experience";
import SideNav from "../nav/sideNav";
import NavBar from "../nav/navBar";

export default function MainContainer(): ReactElement {
    return (
        <>
            <SideNav />
            <NavBar />
            <div className="container"></div>
        </>
    );
}
