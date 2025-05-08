import React from 'react'
import { Route, Routes } from "react-router-dom";
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import Home from './components/pages/Home'
import Dashboard from "./components/pages/Dashboard"
import NotFound from "./components/pages/NotFound"
const App = () => {
  return (
    <div> 
    <Navbar />
  
    <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="*" element={<NotFound/>} />
      
      </Routes>
      <Footer />
    </div>
  )
}

export default App