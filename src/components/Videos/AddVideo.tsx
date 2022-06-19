import axios from "axios";
import Cookies from "js-cookie";
import react, { useEffect, useState } from "react";


type inputEvent=React.ChangeEvent<HTMLInputElement>;
type textareEvent=React.ChangeEvent<HTMLTextAreaElement>;
type submitEvent=React.FormEvent<HTMLFormElement>;

export default function AddVideo(){

    const [videoName,setVideoName]=useState<string>("");
    const [videoDetails,setVideoDetails]=useState<string>("");
    const [videoLink,setVideoLink]=useState<string>("");
    const [videoSubject,setVideoSubject]=useState<string>("");

    useEffect(()=>{
        if(!Cookies.get("jwt")){
            window.location.href="/";
        }
    },[])
    const hanleVideoName=(e:inputEvent):void=>{
        setVideoName(e.target.value);
    }
    const handleVideoDetails=(e:inputEvent):void=>{
        setVideoDetails(e.target.value)
    }
    const handleVideoLink=(e:inputEvent):void=>{
        setVideoLink(e.target.value);
    }
    const handleVideoSubject=(e:inputEvent):void=>{
        setVideoSubject(e.target.value);
    }
    const handleSubmit=(e:submitEvent):void=>{
        e.preventDefault();
        axios.post("http://localhost:3002/video/add-video",{name:videoName,details:videoDetails,link:videoLink,subject:videoSubject}).then((result)=>{
            alert("Done!")

        }).catch(err=>console.log("error"))

    }


    return(
        <div className="container">
            <form  className="white" onSubmit={handleSubmit}>
                <h5 className="grey-text text-darken-3">Add Video</h5>
                <div className="input-field">
                    <label htmlFor="authorname">Video Title</label>
                    <input type="text" id="authorname" onChange={hanleVideoName} />
                </div>
                <div className="input-field">
                    <label htmlFor="authorlastname">Video Details</label>
                    <input type="text" id="authorlastname" onChange={handleVideoDetails} />
                </div>
                <div className="input-field">
                    <label htmlFor="title">Video Link</label>
                    <input type="text" id="title" onChange={handleVideoLink} />
                </div>
                <div className="input-field">
                    <label htmlFor="title">Subject of the video</label>
                    <input type="text" id="title" onChange={handleVideoSubject} />
                </div>
                <div className="input-field">
                    <button className="btn pink lighten-1 z-depth-0">add Video</button>
                </div>
            </form>
        </div>
    )
}