

const mongoose=require("mongoose");
const StudentSchema=new mongoose.Schema({
    name:{
        type:String,
        require:true
    },
    rollNo:{
        type:String,
        required:true
    },
    branch:{
        type:String,
        required:true
    },
    year:{
        type:Number,
        required:true
    },
    college:{
        type:String,
        required:true
    }
})
const student=mongoose.model("student",StudentSchema);
module.exports=student;