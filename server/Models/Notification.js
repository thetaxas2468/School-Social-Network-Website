const mongoose=require("mongoose");

const Notification = mongoose.Schema({


    name:{
        type:String,
        required:true,
        unique:true,
    }
    ,start:{
        type:String,
        required:true
    },
    end:{
        type:String,
        required:true
    }




});

module.exports=mongoose.model("notifications",Notification);