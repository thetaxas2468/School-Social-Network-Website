import axios from "axios";
import React, { useState } from "react";
import { useDispatch } from "react-redux";
import {useNavigate}  from "react-router-dom";

interface SignUpUser{
    email:string,
    password:string,
    firstname:string,
    lastname:string
}

type inputEvent=React.ChangeEvent<HTMLInputElement>;
type submitEvent=React.FormEvent<HTMLFormElement>;
export default function Signup  () {
    const navigate=useNavigate();
    const dispatch=useDispatch();
    const [user,setUser] =useState<SignUpUser>({email:"",password:"",firstname:"",lastname:""});

    const handleEmail=(e:inputEvent):void=>{
        setUser({
            ...user,email:e.target.value
        })
    }
    const handlePassword=(e:inputEvent):void=>{
        setUser({
            ...user,password:e.target.value
        })
    }
    const handleFirstname=(e:inputEvent):void=>{
        setUser({
            ...user,firstname:e.target.value
        })
    }
    const handleLastname=(e:inputEvent):void=>{
        setUser({
            ...user,lastname:e.target.value
        })
    }
    const handleSubmit= (e:submitEvent):void=>{
        e.preventDefault();
        if(user.password.length<=6){
            alert("Weak password")
            return;
        }
        else if(user.firstname.length === 0 || user.lastname.length === 0 ){
            alert("please enter all the fields");
            return;
        }
        axios.post("http://localhost:3002/account/signup",user,{withCredentials:true}).then((result)=>{
            dispatch({type:"AUTH_ON"});
            navigate("/");
            window.location.reload();

        }).catch(err=>console.log("error"))
            
    }

    return(
        <div className="container">
            <form  className="white" onSubmit={handleSubmit}>
                <h5 className="grey-text text-darken-3">Sign Up</h5>
                <div className="input-field">
                    <label htmlFor="email">Email</label>
                    <input type="email" id="email" onChange={handleEmail} />
                </div>
                <div className="input-field">
                    <label htmlFor="password">Password</label>
                    <input type="password" id="password" onChange={handlePassword}/>
                </div>
                <div className="input-field">
                    <label htmlFor="firstname">Firstname</label>
                    <input type="text" id="firstname" onChange={handleFirstname} />
                </div>
                <div className="input-field">
                    <label htmlFor="lastname">Lastname</label>
                    <input type="text" id="lastname" onChange={handleLastname} />
                </div>
                <div className="input-field">
                    <button className="btn pink lighten-1 z-depth-0">Sign Up</button>
                </div>
            </form>
        </div>
    )
}



