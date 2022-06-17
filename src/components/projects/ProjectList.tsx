import React from "react";
import ProjectSummary from "./ProjectSummary";
import {projectInterface} from "../../interFaces";
import { Link } from "react-router-dom";

interface Props{
    projects:projectInterface[]
}

export default function ProjectList  ({projects}:Props) {

    return(
        <div className="project-list section">
            {projects && projects.map(project=>{
                const key=project._id;
                return (
                    <Link to={"/project/" + project._id} key={key}>
                
                    <ProjectSummary project={project} key={key}  />
                </Link>);
            })}
        </div>
    )
}



