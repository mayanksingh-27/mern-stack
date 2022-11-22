import React from 'react'
import axios from 'axios';
const element = document.querySelector('#post-request .article-id');
const article = { name:"mayank" };
const sendreq=()=>{
   axios.post('http://localhost:5000/students', article)
   .then(response => element.innerHTML = response.data.id);

};
   



    
     
 
 
   

export default sendreq
