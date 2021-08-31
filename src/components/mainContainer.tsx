import React, {ReactElement} from "react";
import {useCallback, useEffect, useMemo} from "react";
import Header from "./containers/homeContainer/header";
import About from "./containers/aboutContainer/about";
import Projects from "./containers/projectContainer/projcets";
import Experience from "./containers/workContainer/experience";
import SideNav from "./nav/sideNav";
import NavBar from "./nav/navBar";

export default function MainContainer(): ReactElement {
    return <div className="grid"></div>;
}
