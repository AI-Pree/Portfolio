import React from "react";
import {ReactElement} from "react";
import PropTypes from "prop-types";

import {nav} from "../../data/nav";
import {NavLink} from "react-router-dom";

type NavBarProps = {
    myColor: string;
};

export default function NavBar({myColor}: NavBarProps): ReactElement {
    return (
        <>
            <ul className={`navBar ${myColor}`}>
                <li key="1" className="list-navbar">
                    <NavLink exact to="/" activeClassName="nav-active-grey">
                        HOME
                    </NavLink>
                </li>
                {nav.contents.slice(1).map((navItem) => (
                    <li key={navItem.id} className={navItem.classnameBar}>
                        <NavLink to={navItem.link} activeClassName={navItem.colorClass}>
                            {navItem.title}
                        </NavLink>
                    </li>
                ))}
            </ul>
        </>
    );
}
