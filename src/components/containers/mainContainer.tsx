import React, {ReactElement} from "react";
import {useCallback, useState, useEffect, useMemo} from "react";
import {Switch, Route, useLocation} from "react-router-dom";

import Home from "../../views/home";
import About from "../../views/about";
import Projects from "../../views/project/projects";
import Experience from "../../views/experience";
import SideNav from "../nav/sideNav";
import NavBar from "../nav/navBar";

let colorClass = "";

const changeColor = () => {
    const location = useLocation();

    if (location.pathname === "/about") colorClass = "red-bg";
    else if (location.pathname === "/experience") colorClass = "blue-bg";
    else if (location.pathname === "/projects") colorClass = "green-bg";
    else colorClass = "grey-bg";
};

export default function MainContainer(): ReactElement {
    changeColor();
    return (
        <>
            <SideNav myColor={colorClass} />
            <NavBar myColor="list-navbar grey:hover" />
            <div className="container">
                <Switch>
                    <Route exact path="/" component={Home} />
                    <Route path="/about" component={About} />
                    <Route path="/experience" component={Experience} />
                    <Route path="/projects" component={Projects} />
                </Switch>
            </div>
        </>
    );
}
