import React, { useState, useEffect } from 'react'
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import ProtectedRoute from './ProtectedRoute/ProtectedRoute';
import Home from './Pages/Home';
import Navbar from './Components/Layout/Navbar';
import Foodpanda from './Pages/Foodpanda';
import Grab from './Pages/Grab';
import Login from './Pages/Login';
import { toast, Toaster } from 'sonner';
import foodpandaLogo from './assets/images/foodpanda.png'
import grabLogo from './assets/images/grab.jpg'
import socket from './socket';

function App() {
  useEffect(() => {
    console.log("Effect mounted");

    const handleFoodpandaOrder = (data) => {
      console.log("order token: ", data);
      toast.info("New Foodpanda Order Received", {
        style: { backgroundColor: '#f43098', color: 'white' },
        icon: <img src={foodpandaLogo} />,
      });
    };

    const handleGrabOrder = (data) => {
      console.log("order token: ", data);
      toast.info("New Grab Order Received", {
        style: { backgroundColor: '#4CAF50', color: 'white' },
        icon: <img src={grabLogo} />,
      });
    };

    socket.off("foodpanda_order_received", handleFoodpandaOrder);
    socket.on("foodpanda_order_received", handleFoodpandaOrder);

    socket.off("grab_order_received", handleGrabOrder);
    socket.on("grab_order_received", handleGrabOrder);

    return () => {
      socket.off("foodpanda_order_received", handleFoodpandaOrder);
      socket.off("grab_order_received", handleGrabOrder);
    };
  }, []);


  return (
    <>
      <Router>
        <Navbar />
        <Routes>
          <Route path="/" element={<ProtectedRoute isAuthorized={true}><Home /></ProtectedRoute>} />
          <Route path="/foodpanda" element={<ProtectedRoute isAuthorized={true}><Foodpanda /></ProtectedRoute>} />
          <Route path="/grab" element={<ProtectedRoute isAuthorized={true}><Grab /></ProtectedRoute>} />
          <Route path="/login" element={<Login />} />
        </Routes>
      </Router>
      <Toaster richColors />
    </>
  )
}

export default App
