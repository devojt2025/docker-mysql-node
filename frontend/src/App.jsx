import React, { useState, useEffect } from "react";
import socket from "./socket";
import { useDispatch, useSelector } from 'react-redux'
import { getOrders } from "./redux/action/orderActions";
import OrdersCard from "./Components/Card";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "./Pages/Home";
import Login from "./Pages/Login";
import {ToastContainer} from 'react-toastify'
import ProtectedRoute from "./ProtectedRoute/ProtectedRoute";
import Navbar from "./Components/Navbar";
import Foodpanda from "./Pages/Foodpanda";
import Grab from "./Pages/Grab";
function App() {
  return (
    <>
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<ProtectedRoute isAuthorized={true}><Home/></ProtectedRoute>}/>
        <Route path="/foodpanda" element={<ProtectedRoute isAuthorized={true}><Foodpanda /></ProtectedRoute>}/>
        <Route path="/grab" element={<ProtectedRoute isAuthorized={true}><Grab /></ProtectedRoute>}/>
        <Route path="/login" element={<Login/>}/>
      </Routes>
    </Router>
    <ToastContainer position="bottom-right"/>
    </>
  )
}

export default App;
