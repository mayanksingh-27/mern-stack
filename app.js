const express=require('express');

const multer  = require('multer')
const upload = multer({ dest: 'uploads/' })
const cors=require('cors')
const mongoose=require('mongoose');
var fs = require('fs');
const app=express();
const port=5000;
//creating new router
const router=new express.Router()
//const router=require("./routes/book-routes");
const Student=require("./model/Book")
mongoose.connect("mongodb://localhost:27017"
).then(()=>console.log("connected to db"))

//middleware
app.use(express.json());
app.use(cors())

router.get("/trial",(req,res)=>{
    res.send("hello this")
})
app.use(router)
//app.use("/books",router)
/* app.post("/students",(req,res)=>
{  
    console.log(req.body);
    const user= new Student(req.body)
    res.send("hello from other end")
    user.save()
    
}) */

app.post("/students",async(req,res)=>
   
{
    try{
        const user=new Student(req.body);
        console.log(req.body)
        const createuser=await user.save();
        res.status(201).send("{ Student added with this id : "+createuser._id + " }") ;
    }catch(e){res.status(400).send(e);}
});

app.get("/students",async(req,res)=>
{
    try{
        const studentdata=await Student.find();
        res.send(studentdata);

    }catch(e){
        res.send(e);

    }
})

app.get("/students/:id",async(req,res)=>
{
    try{
        const _id=req.params.id;
        const studentsdata= await Student.findById(_id);

        if(!studentsdata){
            return res.status(404).send();
        }else{
            res.send(studentsdata);
        }
        

    }catch(e)

    {
        res.send(e);

    }
})
app.patch("/students/:id",async(req,res)=>{
    try{
        const _id=req.params.id;
        const updateStudents=await Student.findByIdAndUpdate(_id,req.body);
        
        res.send(updateStudents);


    }catch(e){
        res.status(404).send(updateStudents);
    }
})
app.delete("/students/:id",async(req,res)=>
{
    try{
        const id=req.params.id;
        const deletestudent=await Student.findByIdAndDelete(id)
        if(!req.params.id){
            return res.status(400).send();

        }
         res.send(deletestudent);


    }catch(e){
        res.status(500).send(e)

    }
})


app.get('/testmulter', upload.single('file'),async(req,res)=>{
    // console.log(req.file.path)
    const data= fs.readFileSync(req.file.path,{encoding:'utf8', flag:'r'});
    // console.log(data)
    res.send("the content of uploaded file is " + data)
} )


//connecting to mongo server
//mongoose.connect("mongodb://localhost:27017"
//).then(()=>console.log("connected to db"))

//connection to port
app.listen(port,function(err)
{
    if(err)
    {
        console.log("error")
    }
    console.log("server listening on port",port)
})


