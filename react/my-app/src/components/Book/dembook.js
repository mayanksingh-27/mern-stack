import Card from 'react-bootstrap/Card';
import ListGroup from 'react-bootstrap/ListGroup';
import {Button} from '@mui/material';
import React, { useState, useEffect } from 'react'  
import "./book.css"
import {Link} from "react-router-dom"
import axios from 'axios';



function KitchenSinkExample()
 {
    {  
        const [books,setBooks]=useState([]);
      
        useEffect(()=>
        {
          axios.get("http://localhost:5000/students")
          .then((res)=>
          setBooks(res.data))
        })
      
          
  return (
    <>
    <div>
        <ul>
        
    {
        books.map((students)=>
        {
            const {_id,name,description,author,image}=students;
            return <div className='card' key={_id}>
                <Card style={{ width: '16rem'}}>
    
      <Card.Img variant="top" src={image} />
      <Card.Body>
        <h4>{name}</h4>
        <p>
        {description}
 <p>{author}</p>
        

        </p>
        <Card.Body>
      <Button >Delete</Button>
      <Button LinkComponent={Link} to={`/books/${_id}`} >Update</Button>
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