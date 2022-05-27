import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Navbar from "./Navbar";
import '../css/app.css';
import Home from './pages/Home';
import Cooking from './pages/Cooking';
import About from './pages/About';


function App() {


  return (
    <>
    <Navbar />
    <div className="container">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/cooking" element={<Cooking />} />
        <Route path="/about" element={<About />} />
      </Routes>
    </div>
  </>
  
  )
}


export default App;
 