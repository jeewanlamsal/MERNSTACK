require('dotenv').config()
const express= require('express')

// const mongoose=require('mongodb+srv://jeewanlamsal40:Jeewanlamsal123@cluster0.3pihi.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0')

 const connectToDatabase=require('./database')
 const app=express()
 app.use(express.json())

connectToDatabase()

 app.get("/",(req, res)=>{
    res.status(200). json({   //200 is status code.
        message: "This is home page"
    })
})
app.get("/about",(req, res)=>{
    res.json({
        message: "This is page"
    })
})
app.post("/blog",(req,res)=>{
    console.log(req.body);
    
    res.status(200).json({
        message: "Blog api hit successfully"
    })
})
app.listen(process.env.PORT,()=>{
    console.log("NodeJs project has started");
    
})   


// mongodb+srv://jeewanlamsal40:<db_password>@cluster0.3pihi.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0