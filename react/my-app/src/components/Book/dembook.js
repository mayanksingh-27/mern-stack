import Card from 'react-bootstrap/Card';
//import ListGroup from 'react-bootstrap/ListGroup';
import {Button, Typography} from '@mui/material';
import React, { useState, useEffect } from 'react'  
import "./book.css"
import {Link} from "react-router-dom"
import axios from 'axios';
import DeleteForeverIcon from '@mui/icons-material/DeleteForever';
import EditIcon from '@mui/icons-material/Edit';

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
            return <div className='card' key={_id} >
                <Card     border={'Dark'}  
style={{ width: '16rem'}
                   
                }>
    
      <Card.Img variant="top" src={image} />
      <Card.Body>
       <p class="uppercase" ><h4>{name}</h4></p>
        <p>
        <p><strong>Author:</strong>{author}</p>
        {description}
 
        

        </p>
        <Card.Body>
      <Button  LinkComponent={Link}to={`/about/${_id}`} ><Typography><DeleteForeverIcon></DeleteForeverIcon></Typography>Delete</Button>
      
      <Button LinkComponent={Link} to={`/books/${_id}`} ><Typography><EditIcon></EditIcon></Typography>Update</Button>
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