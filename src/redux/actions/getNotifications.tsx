
import { Dispatch } from "redux";
import axios from "axios";

const getNotifications=async (dispatch:Dispatch)=>{
    //get the data
    const result=await axios.get("http://localhost:3002/notifications/get");
    const data=result.data
    if(result.data){
        dispatch({type:"GET_NOTIFICATIONS",data});
    }
    else{
        alert("error")
    }
}

export default getNotifications;