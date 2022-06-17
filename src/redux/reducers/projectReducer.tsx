import ProjectSummary from "../../components/projects/ProjectSummary";
import { projectInterface } from "../../interFaces";



const initState:{projects:projectInterface[],projectById:projectInterface}={
    projects: []
    ,
    projectById: {} as projectInterface
}


const projectReducer=(state = initState,action:{type:string,project?:projectInterface,data?:projectInterface[]})=>{
    switch(action.type){
        case "CREATE_PROJECT":
            console.log("created project",action.project);
            return state;
        case "CREATE_PROJECT_ERROR":
            console.log("create project error")
            return state;
        case "GET_PROJECTS":
            return {...state,projects:action.data};
        case "GET_PROJECT_BY_ID":
            return {...state,projectById:action.project};
        case "EMPTY_PROJECTS":
            console.log("No projects in the database")
            return state;
        default:
            return state;
    }
}

export default projectReducer;