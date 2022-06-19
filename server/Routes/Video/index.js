
const Video = require("../../Models/Video")
const router=require("express").Router();






router.post("/delete",(req,res)=>{
    const {id}=req.body;
    Video.deleteOne({id}).then((result)=>{
        res.send(true)
    }).catch(err=>res.send(false))
})

router.post("/add-video",(req,res)=>{
    const {name,details,link,subject} =req.body;
    const temp=new Video({name,details,link,subject});
    Video.create(temp).then((result)=>{
        res.send(true)
    }).catch((e)=>res.send(false))
})

router.get("/get",(req,res)=>{
    Video.find({}).then(result=>res.send(result)).catch(e=>res.send(null));
})
module.exports=router;





