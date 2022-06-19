const mongoose=require("mongoose");

const Video = mongoose.Schema({


    name:{
        type:String,
        required:true,
    }
    ,details:{
        type:String,
        required:true
    },
    link:{
        type:String,
        required:true
    },
    subject:{
        type:String,
        required:true
    }


});

module.exports=mongoose.model("videos",Video);