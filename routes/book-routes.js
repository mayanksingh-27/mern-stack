const express=require("express");
const Book = require("../model/Book");
const router=express.Router();
const bookscontroller=require("../controllers/bookconstrol")


router.get("/",bookscontroller.getallbooks);
router.get("/",async(req,res,next)=>{
    let books;
    try{
        books=await Book.find();

    }catch(err){
        console.log(err);
    }
    if(!books){
        return res.status(404).json({message:"No product found"})
    }
    return res.status(200).json({books});

})

router.post("/",bookscontroller.addbook);
module.exports=router;