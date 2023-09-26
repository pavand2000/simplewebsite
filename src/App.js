import React from "react";
import { Routes, Route, Navigate} from "react-router-dom";

import Home from './Home';
import About from './About';
import Service from './Service';
import Contact from './Contact';
import Navbar from "./Navbar"

const App = () => {
  return (
    <>
    
    <Navbar/>
    <Routes>
      <Route exact path="/" Component={Home} />
      <Route exact path="/about" Component={About} />
      <Route exact path="/service" Component={Service}/>
      <Route exact path="/contact" Component={Contact}/>
      <Route path="/" element={<Navigate to="/" />} />
      
    </Routes>
    
    </>
  );
};

export default App;
