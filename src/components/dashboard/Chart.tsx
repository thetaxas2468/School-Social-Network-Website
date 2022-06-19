import React, { useEffect, useState } from "react";
import { Notification, projectInterface,Try } from "../../interFaces";
import { Bar } from 'react-chartjs-2';
import { Chart, registerables } from 'chart.js';
import axios from "axios";
import Cookies from "js-cookie";
Chart.register(...registerables);
export default function Chartcmp  ({projectsData}:{projectsData:projectInterface[]}) {
    const [temp,setTemp]=useState<Notification[]>([]);


    useEffect(()=>{
        axios.get("http://localhost:3002/notifications/get").then((result)=>{
            setTemp(result.data)
        })

    },[])

    return( 
        <div >
            <h5 style={{"display":"flex","justifyContent":"space-around","background":"green","padding":"20px","borderRadius":"5px","borderColor":"red","color":"purple"}}>Statics and graphs about posts and notifications</h5>
        <div style={{ maxWidth: "40%" ,"display":"inline-block"}}>
          <Bar
            data={{
              labels: ["Posts"],
              datasets: [
                {
                  label: "Number of posts",
                  data: [projectsData.length],
                  backgroundColor: ["aqua"],
                  borderColor: ["aqua"],
                },
              ],
            }}
            // Height of graph
            height={400}
            
          />
        </div>
        <div style={{float:"right" }}>
          <Bar
            data={{
              labels: ["Classes","8:45-10:15","10:30:12:00","12:30-2:00","2:30-4:00","4:00 - 4:00+"],
              datasets: [
                {
                  label: "Classes and details",
                  data: [temp.length,
                    (temp.filter((el:Notification)=>{
                      return el.start==="8:45"&&el.end==="10:15";
                  })).length,
                  (temp.filter((el:Notification)=>{
                    return el.start==="10:30"&&el.end==="12:00";
                })).length,
                (temp.filter((el:Notification)=>{
                    return el.start==="12:30"&&el.end==="2:00";
                })).length,
                (temp.filter((el:Notification)=>{
                    return el.start==="2:30"&&el.end==="4:00";
                })).length,
                (temp.filter((el:Notification)=>{
                    return el.start==="4:00";
                })).length],
                  backgroundColor: ["aqua"],
                  borderColor: ["aqua"],
                },
              ],
            }}
            // Height of graph
            height={400}
            
          />
        </div>
      </div>
    )
}



