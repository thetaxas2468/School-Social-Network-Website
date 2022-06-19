import React, { useEffect, useState } from "react";
import {useSelector,useDispatch} from "react-redux";
import { RootState } from "../..";
import { Project, projectInterface,Notification } from "../../interFaces";
import  createProject  from "../../redux/actions/createProject";
import  createNotification  from "../../redux/actions/createNotification";
import Cookies from "js-cookie";



type inputEvent=React.ChangeEvent<HTMLInputElement>;
type submitEvent=React.FormEvent<HTMLFormElement>;
export default function CreateProject  () {
    const [notification,setNotification] =useState<Notification>({name:"",start:"",end:""});
    const dispatch=useDispatch();
    useEffect(()=>{
        if(!Cookies.get("jwt")){
            window.location.href="/";
        }
    },[])
    const handleName=(e:inputEvent):void=>{
        setNotification(
            {...notification,name:e.target.value}
        )
    }
    const handleStart=(e:inputEvent):void=>{
        setNotification(
            {...notification,start:e.target.value}
        )
    }
    const handleEnd=(e:inputEvent):void=>{
        setNotification(
            {...notification,end:e.target.value}
        )
    }
    const handleSubmit=(e:submitEvent):void=>{
        e.preventDefault();
        createNotification(notification,dispatch);

    }
    return(
        <div className="container">
            <form  className="white" onSubmit={handleSubmit}>
                <h5 className="grey-text text-darken-3">Create Project</h5>
                <div className="input-field">
                    <label htmlFor="authorname">Class name is :</label>
                    <input type="text" id="authorname" onChange={handleName} />
                </div>
                <div className="input-field">
                    <label htmlFor="authorlastname">Class starts at:</label>
                    <input type="text" id="authorlastname" onChange={handleStart} />
                </div>
                <div className="input-field">
                    <label htmlFor="title">Class ends at:</label>
                    <input type="text" id="title" onChange={handleEnd} />
                </div>
                <div className="input-field">
                    <button className="btn pink lighten-1 z-depth-0">Create Notification</button>
                </div>
            </form>
        </div>
    )
}



