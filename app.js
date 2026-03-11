require("dotenv").config();
const express=require("express");
const app=express();
const mongoose=require("mongoose");
app.use(express.urlencoded({extended:true}));
app.use(express.json());
const cors = require("cors");
app.use(cors());
main().catch(err => console.log(err));

async function main() {
  await mongoose.connect(process.env.MONGODB_URL);
  console.log("connection Successful");

 
}
const path = require('path')
app.use(express.static(path.join(__dirname, 'public')))
const authRoutes = require("./routes/auth");
app.use("/api/auth", authRoutes);
const feedbackRoutes = require("./routes/feedback");
app.use("/api/feedback", feedbackRoutes);
app.listen(3000,()=>{
    console.log("listing");
})
const adminRoutes = require("./routes/admin");
app.use("/api/admin", adminRoutes);

app.get('/',(req,res)=>{
    console.log("root");
    res.send("Budget lens working");
})
