import React, { useState, useEffect } from 'react'
import { Navigate } from 'react-router-dom'

// import Loader from '../components/Layouts/Loader'
import { getToken } from '../utils/helper';
import { useSelector } from 'react-redux';
const ProtectedRoute = ({ children, isAuthorized = false }) => {
    if (isAuthorized && getToken() === null) {
        console.log("1")
        return <Navigate to="/login" replace />
    }

    return children
};

export default ProtectedRoute;