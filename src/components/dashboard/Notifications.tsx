import axios from "axios";
import Cookies from "js-cookie";
import React, { useEffect, useState } from "react";
import { Notification } from "../../interFaces";

export default function Notifications  ({authenticated}:{authenticated:boolean}) {
    const [temp,setTemp]=useState<Notification[]>([]);


    useEffect(()=>{
        axios.get("http://localhost:3002/notifications/get").then((result)=>{
            setTemp(result.data)
        })

    },[])

    return(
        <div>
            <h3>Classes</h3>
            {temp.length===0?<div><h1 >There is no classes</h1></div>:
                <table>
                    <thead>
                    <tr>
                        <th>
                            Class
                        </th>
                        <th>
                            startsAt
                        </th>
                        <th>
                            endsAt
                        </th>
                    </tr>
                    </thead>
                    <tbody>
                        {temp.map((elm)=>{
                            return (
                                <tr key={elm._id}>
                                    <td>{elm.name}</td>
                                    <td>{elm.start}</td>
                                    <td>{elm.end}</td>
                                </tr>
                            )
                        })}
                    </tbody>
                </table>
            }
            
        </div>
    )
}



