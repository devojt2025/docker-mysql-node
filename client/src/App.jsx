import React, { useState, useEffect } from 'react'
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import ProtectedRoute from './ProtectedRoute/ProtectedRoute';
import Home from './Pages/Home';
import Navbar from './Components/Layout/Navbar';
import Foodpanda from './Pages/Foodpanda';
import Grab from './Pages/Grab';


function App() {
  

  return (
    <>
      <Router>
        <Navbar />
        <Routes>
          <Route path="/" element={<ProtectedRoute isAuthorized={true}><Home /></ProtectedRoute>} />
          <Route path="/foodpanda" element={<ProtectedRoute isAuthorized={true}><Foodpanda /></ProtectedRoute>} />
          <Route path="/grab" element={<ProtectedRoute isAuthorized={true}><Grab /></ProtectedRoute>} />
          {/* <Route path="/login" element={<Login />} /> */}
        </Routes>
      </Router>
    </>
  )
}

export default App
