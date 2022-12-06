import React from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import axios from 'axios'
import Alert from 'react-bootstrap/Alert';
import Button from 'react-bootstrap/Button';

const Del = () => {
    const navigate = useNavigate();
    const id=useParams().id
    console.log(id);
    axios.delete(`http://localhost:5000/students/${id}`).then(res=>res.data)

    const lastpart=()=>{
        navigate('/books');
        

        
    }
    setTimeout(()=>{

    },5000 );

  return (
    <>
    <Alert variant="success">
      <Alert.Heading>Hey, nice to see you</Alert.Heading>
      <p>
        Aww yeah, you successfully Completed reading this book kudos!!!
       
      </p>
      <hr />
      <p className="mb-0">
       Till then happy reading
      </p>
    </Alert>
    
    
 <div className="d-grid gap-2">
 <Button onClick={lastpart} variant="primary" size="lg">
   Go to library
 </Button>

</div>
</>
  );
}

export default Del