import { InputSharp } from '@mui/icons-material'
import { FormLabel, TextField } from '@mui/material'
import { Box } from '@mui/system'
import axios from 'axios'
import { Button } from 'bootstrap'
import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
const Addbook = () => {
  toast("Wow so easy!");
  
  const history=useNavigate();
  const [inputs,setInputs]=useState({
    name:"",
    description:"",
    author:"",
    image:""
  });
  

  const handleChange=(e)=>{
    setInputs((prevState)=>({
      ...prevState,
      [e.target.name]:e.target.value
    }))
   
  };
 
const sendreq=async()=>{
  
    await axios.post(`http://localhost:5000/students`,{
      name:String(inputs.name),
      author:String(inputs.author),
      description:String(inputs.description),
      image:String(inputs.image)
      
  
    }).then(res=>{console.log(res)})

  
    .catch((error) => { 
      console.log(error.response.data);  
      console.log(error.response.status);  
      console.log(error.response.headers); 
  })
   

  
  
  }
  const handleSubmit=(e)=>{
    e.preventDefault();
    console.log(inputs);
    sendreq().then(()=>history("/books"))
  };

  return (
   <form onSubmit={handleSubmit}>
    <Box display="flex" flexDirection="column" justifyContent={"content"} maxWidth={700} alignContent={"center"} alignSelf="center" marginLeft={"auto"} marginRight={"auto"} marginTop={10} padding={"10px"}>
    <FormLabel>Name</FormLabel>
    <TextField value={inputs.name} onChange={handleChange}margin='normal' fullWidth variant='outlined' name="name" required/>
    <FormLabel>Author</FormLabel>
    <TextField value={inputs.author} onChange={handleChange}margin='normal' fullWidth variant='outlined' name="author"required/>
    <FormLabel>description</FormLabel>
    <TextField value={inputs.description} onChange={handleChange}margin='normal' fullWidth variant='outlined' name="description"required/>
    <FormLabel>image</FormLabel>
    <TextField value={inputs.image} onChange={handleChange}margin='normal' fullWidth variant='outlined' name="image"required/>

   <button variant="contained" type="submit">Add Book</button>
   
    </Box>
   </form>
  )
}

export default Addbook
