
const initState={
    auth:false
}


const authReducer=(state = initState,action:{type:string})=>{
    if(action.type==="AUTH_OFF"){
        return {...state,auth:false}
    }
    else if(action.type==="AUTH_ON"){
        return {...state,auth:true}
    }
    return state;
}

export default authReducer;