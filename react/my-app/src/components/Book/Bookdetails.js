import axios from 'axios';
import{ useEffect } from 'react'
import { useNavigate, useParams } from 'react-router-dom'

import { FormLabel, TextField } from '@mui/material'
import { Box } from '@mui/system'



import React, { useState } from 'react'



const Bookdetails = () => {
    const history=useNavigate();
    
    
    const [inputs,setInputs]=useState({});
    const id=useParams().id;
    console.log(id);
    //always works on calling render function
    useEffect(()=>{
        const fetchHandler=async()=>{
         await    axios.get(`http://localhost:5000/students/${id}`)
           
         .then(res=>console.log(res.data))
         .then(data=>setInputs(data.book))
         
         
         
        };
        fetchHandler()
        //console.log(book)
    },[id]);

const handleSubmit=(e)=>{
        e.preventDefault();
        sendrequest().then(()=>history("/books"))
    }
const sendrequest=async()=>{
    await axios.patch(`http://localhost:5000/students/${id}`,{
    name:String(inputs.name),
    author:String(inputs.author),
    description:String(inputs.description),
    image:String(inputs.image)
   

}).then(res=>res.data)
}
const handleChange=(e)=>{
        setInputs((prevState)=>({
          ...prevState,
          [e.target.name]:e.target.value
        }))
       
      };
//console.log(inputs);

  
       
    

  return (
    <div>
        
         
    <form onSubmit={handleSubmit}>
            <Box display="flex" flexDirection="column" justifyContent={"content"} maxWidth={700} alignContent={"center"} alignSelf="center" marginLeft={"auto"} marginRight={"auto"} marginTop={10} padding={"10px"}>
            
           <FormLabel>Name</FormLabel>
           <TextField value={inputs.name}onChange={handleChange}margin='normal' fullWidth variant='outlined' name="name"/> 
           <FormLabel>Author</FormLabel>
           <TextField value={inputs.author} onChange={handleChange}margin='normal' fullWidth variant='outlined' name="author"/> 
           <FormLabel>description</FormLabel>
           <TextField value={inputs.description} onChange={handleChange}margin='normal' fullWidth variant='outlined' name="description"/> 
           <FormLabel>image</FormLabel>
           <TextField value={inputs.image}onChange={handleChange}margin='normal' fullWidth variant='outlined' name="image"/> 
           <button variant="contained" type="submit">Update Book</button>
            </Box>

    </form>

    </div>
    
  
/*    <form onSubmit={handleSubmit}>
    <Box display="flex" flexDirection="column" justifyContent={"content"} maxWidth={700} alignContent={"center"} alignSelf="center" marginLeft={"auto"} marginRight={"auto"} marginTop={10} padding={"10px"}>
    <FormLabel>Name</FormLabel>
    <TextField value={input.name} onChange={handleChange}margin='normal' fullWidth variant='outlined' name="name"/>
    <FormLabel>Author</FormLabel>
    <TextField value={input.author} onChange={handleChange}margin='normal' fullWidth variant='outlined' name="author"/>
    <FormLabel>description</FormLabel>
    <TextField value={input.description} onChange={handleChange}margin='normal' fullWidth variant='outlined' name="description"/>
    <FormLabel>image</FormLabel>
    <TextField value={input.image} onChange={handleChange}margin='normal' fullWidth variant='outlined' name="image"/>

   <button variant="contained" type="submit">Add Book</button>
    </Box>
   </form>  */    
 
  
  )
}

export default Bookdetails

