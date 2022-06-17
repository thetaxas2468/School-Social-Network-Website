
import { Dispatch } from "redux";
import { Project, projectInterface } from "../../interFaces";
import axios from "axios";

const getProjects=async (dispatch:Dispatch,id:String)=>{
    //get the data
    const result=await axios.get("http://localhost:3002/projects/get-projects");
    const data=result.data
    // console.log(id,"here")
    let project ={} as projectInterface;
    result.data.map((element:projectInterface)=>{
        if(element._id===id){
            project=element;
        }
    })
    if(result.data){
        dispatch({type:"GET_PROJECT_BY_ID",project});
    }
    else{
        dispatch({type:"EMPTY_PROJECTS"});
    }
}

export default getProjects;