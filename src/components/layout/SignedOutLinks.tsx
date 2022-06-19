import React from "react";
import { Link, NavLink } from "react-router-dom";

export default function SignedOutLinks  () {


    return(
        <ul className="right">
            <li>
                <Link to="/game">Play</Link>
            </li>
            <li>
                <NavLink to="/signup">Sign Up</NavLink>
            </li>
            <li>
                <NavLink to="/signin">Log in</NavLink>
            </li>
        </ul>
    );
}



