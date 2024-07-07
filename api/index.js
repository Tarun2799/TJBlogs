import express from "express";

const app =  express();

app.use(express.json());

app.get("/",(req,res)=>{
    res.json("hey there!");
})

app.listen(8800, ()=>{
    console.log("Connected to backend!");
})