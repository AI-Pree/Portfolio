import React from "react";
import {ReactElement} from "react";

import {nav} from "../../data/nav";

export default function NavBar(): ReactElement {
    return (
        <>
            <ul className="navBar">
                {nav.contents.map((navItem) => (
                    <li key={navItem.id} className={navItem.classnameBar}>
                        {navItem.title}
                    </li>
                ))}
            </ul>
        </>
    );
}
