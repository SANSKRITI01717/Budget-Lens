const mongoose=require("mongoose");
const feedbackSchema=new mongoose.Schema({
    student:{
        type:mongoose.Schema.Types.ObjectId,
        ref:"student"
    },
     branch: {
         type:String,
       required:true,
     },
    college: {
            type:String,
       required:true,
    },
    year: {
         type:Number,
       required:true,
    }
    ,
  
    washroom: {
     type:Boolean,
     required:true,
    },
    sportsComplex: {
     type:Boolean,
     required:true,
    },
    digitalBoards: {
     type:Boolean,
     required:true,
    },
    labsMaintained: {
     type:Boolean,
     required:true,
    },
    labEquipment: {
     type:Boolean,
     required:true,
    },
   createdAt:{
        type: Date,
        default:Date.now
    }
})
const feedback= mongoose.model("feedback",feedbackSchema);
module.exports=feedback;