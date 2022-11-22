import React from "react";
import { Route,Routes } from "react-router-dom";
import Header from "./components/Header";
import  Home  from  "./components/Home";
import  Addbook  from "./components/Addbook"
import  About  from "./components/About"
import Allbook from "./components/Book/dembook"
import Bookdetails from "./components/Book/Bookdetails"
function App() {
  return (
    <React.Fragment>
      <header>
        <Header />
        
      </header>
      <main>
        <Routes>

          <Route path="/" element={<Home/>} exact/>
          <Route path="/add" element={<Addbook/>}exact />
          <Route path='/about' element={<About/>} exact/>
          <Route path='/books' element={<Allbook/>}exact />
          <Route path='/books/:id' element={<Bookdetails/>} exact/>
          
        </Routes>

        
       

      </main>
    </React.Fragment>
  );
}

export default App;
