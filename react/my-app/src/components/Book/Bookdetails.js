import axios from 'axios';
import{ useEffect } from 'react'
import { useParams } from 'react-router-dom'

import { FormLabel, TextField } from '@mui/material'
import { Box } from '@mui/system'



import React, { useState } from 'react'


const Bookdetails = () => {
    
    const [inputs,setInputs]=useState({});
    const id=useParams().id;
    //console.log(id);
    useEffect(()=>{
        const fetchHandler=async()=>{
         await    axios.get(`http://localhost:5000/students/${id}`).then(res=>res.data)
        };
        fetchHandler().then((data)=>setInputs(data.book));
    },[id]);

const handleSubmit=(e)=>{
        e.preventDefault();
    }
const handleChange=(e)=>{
    console.log(e);
}
  
       
    

  return (
   
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
            </Box>

    </form>
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

