import React, { useState } from "react";

interface SignUpUser{
    email:string,
    password:string,
    firstname:string,
    lastname:string
}

type inputEvent=React.ChangeEvent<HTMLInputElement>;
type submitEvent=React.FormEvent<HTMLFormElement>;
export default function Signup  () {
    // const [email,setEmail]=useState<string>("");
    // const [password,setPassword]=useState<string>("");
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
    const handleSubmit=(e:submitEvent):void=>{
        e.preventDefault();
        console.log(user)

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
                    <label htmlFor="firstname">Firstname</label>
                    <input type="text" id="firstname" onChange={handleFirstname} />
                </div>
                <div className="input-field">
                    <label htmlFor="lastname">Lastname</label>
                    <input type="text" id="lastname" onChange={handleLastname} />
                </div>
                <div className="input-field">
                    <button className="btn pink lighten-1 z-depth-0">Log in</button>
                </div>
            </form>
        </div>
    )
}



