import axios from "axios";
import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";

interface User{
    email:string,
    password:string
}

type inputEvent=React.ChangeEvent<HTMLInputElement>;
type submitEvent=React.FormEvent<HTMLFormElement>;
export default function Signin  () {
    // const [email,setEmail]=useState<string>("");
    // const [password,setPassword]=useState<string>("");
    const dispatch=useDispatch();
    const navigate=useNavigate();
    const [user,setUser] =useState<User >({email:"",password:""});

    const handleEmail=(e:inputEvent):void=>{
        setUser(
            user?{...user,email:e.target.value}:{email:e.target.value,password:""}
        )
    }
    const handlePassword=(e:inputEvent):void=>{
        setUser(
            user?{...user,password:e.target.value}:{email:"",password:e.target.value}
        )
    }
    const handleSubmit=(e:submitEvent):void=>{
        e.preventDefault();
        axios.post("http://localhost:3002/account/signin",user,{withCredentials:true}).then((result)=>{
            if(result.data.status==="error"){
                alert("Enter correct data")
            }
            else{
                dispatch({type:"AUTH_ON"});
                navigate("/");
                window.location.reload();
            }
        }).catch(err=>alert("error has been occured"))

    }

    return(
        <div className="container">
            <form  className="white" onSubmit={handleSubmit}>
                <h5 className="grey-text text-darken-3">Sign In</h5>
                <div className="input-field">
                    <label htmlFor="email">Email</label>
                    <input type="email" id="email" onChange={handleEmail} />
                </div>
                <div className="input-field">
                    <label htmlFor="password">Password</label>
                    <input type="password" id="password" onChange={handlePassword}/>
                </div>
                <div className="input-field">
                    <button className="btn pink lighten-1 z-depth-0">Log in</button>
                </div>
            </form>
        </div>
    )
}



