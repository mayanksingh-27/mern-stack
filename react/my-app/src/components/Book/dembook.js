import Card from 'react-bootstrap/Card';
import ListGroup from 'react-bootstrap/ListGroup';
import {Button, Typography} from '@mui/material';
import React, { useState, useEffect } from 'react'  
import "./book.css"
import {Link, useNavigate} from "react-router-dom"
import axios from 'axios';
import DeleteForeverIcon from '@mui/icons-material/DeleteForever';

let count;

function KitchenSinkExample()
 {  
  const history=useNavigate();
    {  
        const [books,setBooks]=useState([]);
      
        useEffect(()=>
        {
          axios.get("http://localhost:5000/students")
          .then((res)=>
          setBooks(res.data))
        })
      
    const deleteHandler=()=>{
  axios.delete(`http://localhost:5000/students/`).then(res=>res.data).then(()=>history("./books"))
  }      
  return (
    <>
    <div>
        <ul>
        
    {
        books.map((students)=>
        {
            const {_id,name,description,author,image}=students;
            return <div className='card' key={_id} >
                <Card     border={'Dark'}  
style={{ width: '16rem'}
                   
                }>
    
      <Card.Img variant="top" src={image} />
      <Card.Body>
        <h4>{name}</h4>
        <p>
        {description}
 <p>{author}</p>
        

        </p>
        <Card.Body>
      <Button LinkComponent={Link}to={`/books/${_id}`} >Delete</Button>
      <Button LinkComponent={Link} to={`/books/${_id}`} ><Typography><DeleteForeverIcon></DeleteForeverIcon></Typography>Update</Button>
      </Card.Body>
         
      </Card.Body>
      
    
        
  
    </Card>
            </div>
        })
    }
    
        </ul>
    </div>
    
 
        
    
  
    </>
  );
 
    
}
 }

export default KitchenSinkExample;