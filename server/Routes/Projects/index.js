
const Project = require("../../Models/Project")
const router=require("express").Router();








router.post("/create-project",(req,res)=>{
    const {authorFirstName,authorLastName,title,content} =req.body;
    const temp=new Project({authorFirstName,authorLastName,title,content});
    Project.create(temp).then((result)=>{
        res.send(true)
    }).catch((e)=>res.send(false))
})

router.get("/get-projects",(req,res)=>{
    Project.find({}).then(result=>res.send(result)).catch(e=>res.send(null));
})
module.exports=router;





