import Cookies from "js-cookie";
import React ,{useEffect, useState} from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { Try } from "../../interFaces";
import SignedInLinks from "./SignedInLinks";
import SignedOutLinks from "./SignedOutLinks";


export default function Navbar  () {
    const [auth,setAuth]=useState<boolean>(false);
    useEffect(()=>{
        if(Cookies.get("jwt")){
            setAuth(true);
        }
        else{
            setAuth(false);
        }
    },[]);
    return(
        <nav className="nav-wrapper grey darken-3">
            <div className="container">
                <Link to="/" className="brand-logo left">Site</Link>
                {auth===true?<SignedInLinks/>:
                <SignedOutLinks/>}
            </div>
        </nav>
    );
}



