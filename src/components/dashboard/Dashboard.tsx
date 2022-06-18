import React, { useEffect, useState } from "react";
import Notifications from "./Notifications";
import ProjectList from "../projects/ProjectList";
import { useSelector ,useDispatch } from "react-redux";
import { RootState } from "../..";
import { projectInterface,Try } from "../../interFaces";
import getProjects from "../../redux/actions/getProjects";
import Cookies from 'js-cookie';

export default function Dashboard  () {
    const dispatch=useDispatch();
    const prjs=useSelector<Try,projectInterface[]>(state=>state.project.projects);
    const [auth,setAuth]=useState<boolean>(false);
    useEffect(()=>{
        
        window.setTimeout(()=>{
            if(Cookies.get("jwt")){
                setAuth(true);
                getProjects(dispatch);
            }
            else{
                setAuth(false);
                alert("Please log in")
            }
        },1000)
    },[])
    return(
        <div>
            {
            auth&&
            <div>
            {prjs.length!==0?
            <div className="dashboard container">
                <div className="row">
                    <div className="col s12 m6">
                        { <ProjectList projects={prjs}/>}
                    </div>
                    <div className="col s12 m5 offset-m1">
                        <Notifications/>
                    </div>

                </div>
            </div>:<div>Loading</div>
            }
            </div>
            }
            {!auth&&
                <div className="main-cont">
                    <h1 className="mGreen h1-cont">Please LOG IN 404 NOT FOUND PROJECTS </h1>
                    <img className="mainImage" src="https://upload.wikimedia.org/wikipedia/commons/thumb/6/6a/Please_log_in_image.png/1280px-Please_log_in_image.png"></img>
                </div>
            }
        </div>
    )
}



