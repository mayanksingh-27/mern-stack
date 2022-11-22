import React, { useState } from 'react'
import {AppBar,Tabs,Tab,Toolbar,Typography} from '@mui/material';
import LibraryBooksIcon from '@mui/icons-material/LibraryBooks';
import { NavLink } from 'react-router-dom';
const Header = () => {
    const [value,setValue]=useState();
  return (
    <div>
      <AppBar sx={{backgroundColor:'#232F3D'}} position="sticky">
        <Toolbar>
        <Typography> 
            <LibraryBooksIcon/>
        </Typography>
        <Tabs
        sx={{ml:"auto"}}
  
  textColor="inherit"
  indicatorColor="secondary"
  value={value} onChange={(e,val)=>setValue(val)}
  
>
  <Tab value="one"LinkComponent={NavLink} to="/add" label="Add products" />
  <Tab value="two" LinkComponent={NavLink} to="/books" label="Books" />
  <Tab value="three" LinkComponent={NavLink} to="/about"label="About Us" />
</Tabs>
        </Toolbar>
     

      </AppBar>
    </div>
  )
}

export default Header