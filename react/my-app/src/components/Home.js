import { Box, Typography } from '@mui/material'
import { Button } from 'bootstrap'
import React from 'react'
import { Link } from 'react-router-dom';
import Background from 'C:/Users/mayan/OneDrive/Desktop/KJ/sem 5/mern/project/react/my-app/src/components/Book/images/background1.jpg';

const myComponentStyle = {
  display:"block",
  marginLeft:"630px",
  marginTop: "210px",
  fontSize: "35px",
  color: "#00000",
  backgroundColor: "Grey",
  padding: "50px",
  fontFamily: "",
  justify:"center",
  backdropFilter: 'blur(30px)'
}

const sectionStyle = {
  width: "100%",
  height: "600px",
  backgroundImage: `url(${Background})`,
  backgroundPosition: 'center',
  backgroundSize: 'cover',
  backgroundRepeat: 'no-repeat'
};


const Home = () => {
  return (
    <section style={ sectionStyle }>
    <div>
    
      <Box display="flex" flexDirection="coloumn" alignItems="center">
        <Link to="/books">
      <button  style={myComponentStyle} variant="contained"type="button">View All books!</button>
      </Link>
      </Box>
    </div>
    </section>
  )
}

export default Home
