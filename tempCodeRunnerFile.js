app.post("/students",(req,res)=>
{  
    console.log(req.body);
    const user= new Student(req.body)
    res.send("hello from other end")
    user.save()
    
})