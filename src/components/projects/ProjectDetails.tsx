import axios from "axios";
import Cookies from "js-cookie";
import React, { useEffect ,useState} from "react";
import { useDispatch, useSelector } from "react-redux";
import {  useNavigate, useParams } from 'react-router-dom';
import { setTimeout } from "timers/promises";
import { RootState } from "../..";
import { Try ,projectInterface} from "../../interFaces";
import getProjectById from "../../redux/actions/getProjectById";


type Props ={
    id:string
}

export default function ProjectDetails  () {
    const {id} = useParams<Props>();
    const dispatch=useDispatch();
    const project =useSelector<Try,projectInterface>((state):projectInterface=>state.project.projectById);
    const navigate=useNavigate();
    const password:string="admin";
     useEffect(()=>{

        window.setTimeout(()=>{
            getProjectById(dispatch,id!);
        },500)
        
        
    },[]);
    useEffect(()=>{
        if(!Cookies.get("jwt")){
            window.location.href="/";
        }
    },[])
    const handleClick=(e:React.MouseEvent)=>{
        axios.post("http://localhost:3002/projects/delete",id).then((result)=>{
            navigate("/");
        })
    }
    return(
        <div>{project._id?
            <div className="container section project-details">
                <div className="card z-depth-0">
                    <div className="card-content">
                        <span className="card-title">
                            {project.title}-{id}
                        </span>
                        <p>{project.content}.</p>
                    </div>
                    <div className="card-section grey lighten-4 grey-text">
                        <div>Posted by {project.authorFirstName} {project.authorLastName}</div>
                    </div>
                </div>
                <button onClick={handleClick}>Delete post</button>
            </div>:<div>Loading</div>
}
        </div>

        
    )
}



