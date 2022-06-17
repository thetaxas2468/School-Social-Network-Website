
import { Dispatch } from "redux";
import { Project, projectInterface } from "../../interFaces";
import axios from "axios";

const createProject=async (project:Project,dispatch:Dispatch)=>{
    //get the data
    const result=await axios.post("http://localhost:3002/projects/create-project",project);
    console.log(result);
    if(result.data){
        dispatch({type:"CREATE_PROJECT",project})
    }
    else{
        console.log("error returned false")
    }
}

export default createProject;