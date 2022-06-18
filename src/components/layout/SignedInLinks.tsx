import axios from "axios";
import Cookies from "js-cookie";
import React, { MouseEventHandler } from "react";
import { useDispatch } from "react-redux";
import { NavLink ,useNavigate} from "react-router-dom";

export default function SignedInLinks  () {
    const navigate=useNavigate();
    const dispatch=useDispatch();
    const btnClicked=(e:React.MouseEvent<HTMLButtonElement>)=>{
        axios.get("http://localhost:3002/account/logout",{withCredentials:true}).then((result)=>{
            dispatch({type:"AUTH_OFF"});
            window.location.reload();
        }).catch(err=>alert("error occured"))
    }
    return(
        <ul className="right">
            <li>
                <NavLink to="/create">New Project</NavLink>
            </li>
            <li>
                <button onClick={btnClicked}>Log Out</button>
            </li>
            <li>
                <div className="btn btn-floating pink lighten-1">{Cookies.get("name")}</div>
            </li>
        </ul>
    );
}



