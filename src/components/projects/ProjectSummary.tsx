import Cookies from "js-cookie";
import React, { useEffect } from "react";
import {projectInterface} from "../../interFaces.jsx";

interface Props{
    project:projectInterface
}

export default function ProjectSummary  ({project}:Props) {

    return(
        <div className="card z-depth-0 project-summary black_light_background">
            <div className="card-content grey-text text-darken-3">
                <span className="card-title">{project.authorFirstName} {project.authorLastName}</span>
                <div>Title :<span>{project.title}</span></div>
                <p className="grey-text">{project.content}</p>
            </div>
        </div>
    )
}



