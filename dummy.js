const express=require("express")
const app=express();
const port=process.env.PORT || 3000;

app.get("/",(req,res)=>
{
    res.send("hello form other side");
})
app.post("/students",(req,res)=>
{
    res.send("hello form other side");
})

app.listen(port,()=>
{
    console.log("connection ssucessfull")
})