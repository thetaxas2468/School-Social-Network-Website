
import { Dispatch } from "redux";
import { Project, projectInterface } from "../../interFaces";
import axios from "axios";

const getProjects=async (dispatch:Dispatch,project?:projectInterface)=>{
    //get the data
    const result=await axios.get("http://localhost:3002/projects/get-projects");
    const data=result.data
    if(result.data){
        dispatch({type:"GET_PROJECTS",data});
    }
    else{
        dispatch({type:"EMPTY_PROJECTS"});
    }
}

export default getProjects;