const express=require("express");
const router=express.Router();
const mongoose=require("mongoose");
const Feedback=require("../models/Feedback");
router.post("/submit",async(req,res)=>{
    try{
    const { student , branch, year, college ,washroom,sportsComplex, digitalBoards, labsMaintained,labEquipment} = req.body;
    const feedback = new Feedback({student, branch, year, college,washroom,sportsComplex, digitalBoards, labsMaintained,labEquipment });
    await feedback.save();
    res.json({ success: true, message: "Data Submitted Successfully" });
    }catch(err){
        res.json({success: false, message: err.message });
    }
 
})
module.exports = router 
