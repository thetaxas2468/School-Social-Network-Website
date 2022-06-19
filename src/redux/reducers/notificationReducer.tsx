

const initState:{notifications:Notification[]}={
    notifications:[]
}


const authReducer=(state = initState,action:{type:string,notification:Notification,notifications:Notification[]})=>{
    if(action.type==="CREATE_NOTIFICATION"){
        return state;
    }
    else if(action.type==="GET_NOTIFICATIONS"){
        return {...state,notifications:action.notifications};
    }
    return state;
}

export default authReducer;