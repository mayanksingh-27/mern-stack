const Book=require("../model/Book");

const getallbooks=async(req,res,next)=>
{
    let books;
    try{
      books=await Book.find();
    }
    catch(err)
    {
      console.log(err);
    }
    if(!books)
    {
      
      return res.status(404).json({message:"No products found"})
    }
    return res.status(200).json({books});
  
  
  }

  const addbook=async(req,res,next)=>{
    const {name,author,description,price,available}=req.body;
    let book;
    try{
      book=new Book({
        name,
        author,
        description,
        price,
        available,
      });
      await book.save();
    }catch(err){
      console.log(err);
    }
    if(!book){
      return res.status(500).json({message:"unable to add"})
    }
    return res.status(201).json({book})

  }
  
  exports.getallbooks=getallbooks;
  exports.addbook=addbook;