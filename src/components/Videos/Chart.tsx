import React, { useEffect, useState } from "react";
import { Notification, projectInterface,Try, videoD } from "../../interFaces";
import { Bar } from 'react-chartjs-2';
import { Chart, registerables } from 'chart.js';
import axios from "axios";
import Cookies from "js-cookie";
Chart.register(...registerables);


export default function Chartcmp  ({videosData}:{videosData:videoD[]}) {
    const [temp,setTemp]=useState<Notification[]>([]);


    useEffect(()=>{
        axios.get("http://localhost:3002/video/get").then((result)=>{
            setTemp(result.data)
        })

    },[])

    return( 
        <div >
            <h5 style={{"display":"flex","justifyContent":"space-around","background":"green","padding":"20px","borderRadius":"5px","borderColor":"red","color":"purple"}}>Statics and graphs about videos and their subject</h5>
        <div style={{ maxWidth: "40%" ,"display":"flex"}}>
          {videosData.map((elem)=>{
              return(
                  <Bar style={{"margin":"10px 20px"}} data={{
                      labels:[elem.subject],
                      datasets:[
                        {
                            label:"Number of Videos about "+elem.subject,
                            data:[videosData.filter((elemt)=>{
                                return elem.subject===elemt.subject;
                            }).length],
                            backgroundColor: ["aqua"],
                             borderColor: ["aqua"],
                        },
                      ],
                  }} 
                  height={400}
                  key={elem.subject}/>
              )
          })}
        </div>
      </div>
    )
}



