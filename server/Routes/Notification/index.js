
const Notification = require("../../Models/Notification")
const router=require("express").Router();








router.post("/create",(req,res)=>{
    const {name,start,end} =req.body;
    const temp=new Notification({name,start,end});
    Notification.create(temp).then((result)=>{
        res.send(true)
    }).catch((e)=>res.send(false))
})

router.get("/get",(req,res)=>{
    Notification.find({}).then(result=>res.send(result)).catch(e=>res.send(null));
})
module.exports=router;





