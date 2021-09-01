import React, {ReactElement} from "react";
import {useCallback, useState, useEffect, useMemo} from "react";
import {BrowserRouter, HashRouter, Switch, Route} from "react-router-dom";

import Home from "../../views/home";
import About from "../../views/about";
import Projects from "../../views/project/projects";
import Experience from "../../views/experience";
import SideNav from "../nav/sideNav";
import NavBar from "../nav/navBar";

export default function MainContainer(): ReactElement {
    //setting color for the whole container
    const [colorClass, setColorClass] = useState("list-navbar-grey:hover");

    //changing the class based on the new state
    useEffect(() => {
        console.log("The colorclass is changed to  ${colorClass}");
    });

    return (
        <>
            <SideNav myColor={colorClass} />
            <HashRouter>
                <NavBar myColor={colorClass} />
                <div className="container">
                    <Switch>
                        <Route exact path="/" component={Home} />
                        <Route path="/about" component={About} />
                        <Route path="/experience" component={Experience} />
                        <Route path="/projects" component={Projects} />
                    </Switch>
                </div>
            </HashRouter>
        </>
    );
}
