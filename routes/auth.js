const express=require("express");
const router=express.Router();
const mongoose=require("mongoose");
const Student=require("../models/Student");
router.post("/register",async(req,res)=>{
    const { name, rollNo, branch, year, college } = req.body;
    const student = new Student({ name, rollNo, branch, year, college });
    await student.save();
    res.json({ success: true, message: "Student registered!" });
});
router.post("/login",async(req,res)=>{
    try{
    const {rollNo,college}=req.body;
    student = await Student.findOne({ rollNo: rollNo });
    
    if(!student){
       res.json({ success: false, message: "Student not found!" });
    }else{
      
      res.json({ success: true, student: student });
    }
}catch(err){
   res.json({ success: false, message: err.message });
}
})
module.exports=router;