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
function App() {
  return (
    <>
    <Router>
      <Routes>
        <Route path="/" element={<ProtectedRoute isAuthorized={true}><Home/></ProtectedRoute>}/>
        <Route path="/login" element={<Login/>}/>
      </Routes>
    </Router>
    <ToastContainer position="bottom-right"/>
    </>
  )
}

export default App;
