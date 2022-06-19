
import { Dispatch } from "redux";
import { Notification} from "../../interFaces";
import axios from "axios";

const createNotification=async (notifiaction:Notification,dispatch:Dispatch)=>{
    //get the data
    const result=await axios.post("http://localhost:3002/notifications/create",notifiaction);
    if(result.data){
        alert("Notification has been added")
        dispatch({type:"CREATE_NOTIFICATION"})
    }
    else{
        alert("Error has been occured")
    }
}

export default createNotification;