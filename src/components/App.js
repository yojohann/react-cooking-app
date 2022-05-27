import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Navbar from "./Navbar";
import '../css/app.css';
import Home from './pages/Home';
import Pricing from './pages/Pricing';
import About from './pages/About';

export const RecipeContext = React.createContext()

function App() {


  return (
    <>
    <Navbar />
    <div className="container">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/pricing" element={<Pricing />} />
        <Route path="/about" element={<About />} />
      </Routes>
    </div>
  </>
  
  )
}


export default App;
 