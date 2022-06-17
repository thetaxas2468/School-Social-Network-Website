

export interface Project{
    authorFirstName:string,
    authorLastName:string,
    title:string ,
    content:string,
    
}

export interface projectInterface{
    id:string,
    _id?:string,
    authorFirstName:string,
    authorLastName:string,
    title:string,
    content:string

}


export interface Try{
    auth:{},
    project:{projects:projectInterface[],projectById:projectInterface}

}