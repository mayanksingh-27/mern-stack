const mongoose=require('mongoose');



const bookSchema= new mongoose.Schema(
    {
        name:{
            type:String,
            required:true
        },
        author:{
            type:String,
            required:true
        },
        description:{
            type:String,
            required:true
        },
     
        
       
            
        
        image:{
            type:String,
            required:true
        }
    }
);
const Student=new mongoose.model("Book",bookSchema);
module.exports=Student