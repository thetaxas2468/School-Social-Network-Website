import Cookies from "js-cookie";
import  { useEffect, useState } from "react";
import {useSelector,useDispatch} from "react-redux";
import { RootState } from "../..";
import { Project, projectInterface } from "../../interFaces";
import  createProject  from "../../redux/actions/createProject";



type inputEvent=React.ChangeEvent<HTMLInputElement>;
type textareEvent=React.ChangeEvent<HTMLTextAreaElement>;
type submitEvent=React.FormEvent<HTMLFormElement>;
export default function CreateProject  () {
    const [project,setProject] =useState<Project>({authorFirstName:"",authorLastName:"",title:"",content:""});
    const dispatch=useDispatch();
    useEffect(()=>{
        if(!Cookies.get("jwt")){
            window.location.href="/";
        }
    },[])
    const handleTitle=(e:inputEvent):void=>{
        setProject(
            {...project,title:e.target.value}
        )
    }
    const handleContent=(e:textareEvent):void=>{
        setProject(
            {...project,content:e.target.value}
        )
    }
    const handleFirstName=(e:inputEvent):void=>{
        setProject(
            {...project,authorFirstName:e.target.value}
        )
    }
    const handleLastName=(e:inputEvent):void=>{
        setProject(
            {...project,authorLastName:e.target.value}
        )
    }
    const handleSubmit=(e:submitEvent):void=>{
        e.preventDefault();
        createProject(project,dispatch);

    }
    return(
        <div className="container">
            <form  className="white" onSubmit={handleSubmit}>
                <h5 className="grey-text text-darken-3">Create Project</h5>
                <div className="input-field">
                    <label htmlFor="authorname">Author firstname</label>
                    <input type="text" id="authorname" onChange={handleFirstName} />
                </div>
                <div className="input-field">
                    <label htmlFor="authorlastname">Author lastname</label>
                    <input type="text" id="authorlastname" onChange={handleLastName} />
                </div>
                <div className="input-field">
                    <label htmlFor="title">Title</label>
                    <input type="text" id="title" onChange={handleTitle} />
                </div>
                <div className="input-field">
                    <label htmlFor="content">Content</label>
                    <textarea id="content"  className="materialize-textarea" onChange={handleContent}></textarea>
                </div>
                <div className="input-field">
                    <button className="btn pink lighten-1 z-depth-0">Create</button>
                </div>
            </form>
        </div>
    )
}



