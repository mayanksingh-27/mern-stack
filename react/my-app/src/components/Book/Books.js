// import React, { useState, useEffect } from 'react'  
// import {Button} from '@mui/material';
// import axios from 'axios';
// //import Link from "react-router-dom"
// import "./book.css"
// import { useNavigate } from 'react-router-dom';

// const history=useNavigate()

// function DataFetching() {  
//   const [books,setBooks]=useState([]);

//   useEffect(()=>
//   {
//     axios.get("http://localhost:5000/students")
//     .then((res)=>
//     setBooks(res.data))
//   })
// const deleteHandler=()=>{
//   axios.delete(`http://localhost:5000/students/${_id}`).then(res=>res.data).then(()=>history("./books"))
//  }
//     return(
//       <>
      
//       <h1>Data retrieval</h1>
//       {
//         books.map((students) => {
//         const {id,name,description,author,price,avilability,image}=students;
//         return <div className='book' key={_id}>
//           <div>
//             <ul>
//             <h2>{name}</h2>
//           <p>{description}</p>
//           <p>{author}</p>
//           <p>{price}</p>
//           <p>{avilability}</p>
//           <p><img src= {image}width={250} height={300}alt={name}/></p>

//           <Button onClick={deleteHandler} variant="contained">Delete</Button>
//           <Button LinkComponent={Link} to={`/books/${_id}`}  variant="contained">Update</Button>
           

//             </ul>
//           </div>
        

//         </div>

//         })
// }
//       </>
//     );
    
//   }


// /* const Books = () => {
//     const [books,setBooks]=useState();
//     useEffect(()=>
//     {
//         fetchHandler().then(data=> setBooks(data));
//     },);

//     console.log(books); */

//   /* return (
//     <div>
//       <h1>Allbook are here</h1>
//     </div>
//   ) */


// export default DataFetching
