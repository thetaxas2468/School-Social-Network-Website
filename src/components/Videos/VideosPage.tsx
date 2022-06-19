import axios from "axios";
import Cookies from "js-cookie";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import "./videos.css"
import Chart from "./Chart";
import { videoD } from "../../interFaces";

export default function VideosPage(){
    const [done,setDone]=useState<videoD[]>([]);


    useEffect(()=>{
        axios.get("http://localhost:3002/video/get").then((result)=>{
            setDone(result.data);
        }).catch(e=>alert("error"))
    },[])

    useEffect(()=>{
        if(!Cookies.get("jwt")){
            window.location.href="/";
        }
    },[])
    const handleClicked=(e:React.MouseEvent<HTMLButtonElement>,url:string)=>{
        window.open(url, '_blank');
    }
    const handleDelete=(e:React.MouseEvent<HTMLButtonElement>,id?:string)=>{
        axios.post("http://localhost:3002/video/delete",{id:id}).then((result)=>{
            let temp=done.filter((elem)=>{
                return elem._id!==id
            });
            setDone(temp);
        }).catch(er=>alert("Error"))

    }
    return(
        <div>
            {done.length===0?<h1>there is no videos added</h1>:

            <div className="videos">
                {
                    done.map((elem:videoD)=>{
                        return (
                            <div className="video" key={elem._id}>
                                <h5>Video name: {elem.name}</h5>
                                <h5>Video details: {elem.details}</h5>
                                <h5>Navigate into:  <button className="button" onClick={(e)=>handleClicked(e,elem.link)}>{elem.link}</button></h5>
                                <h5>Video Subject:  {elem.subject}</h5>
                                <button className="button" onClick={(e)=>handleDelete(e,elem._id)}>Delete video</button>
                            </div>
                        )
                    })
                }
            <Chart videosData={done}></Chart>
            </div>
            }

        </div>
    )
}