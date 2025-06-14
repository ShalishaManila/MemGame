import React from 'react'
import { Outlet, Navigate } from 'react-router-dom'
const ProtectedPages = () => {
    const auth = localStorage.getItem("loggedin");
  return auth ? <Outlet /> : <Navigate to={"/MemGame/login"} />
}

export default ProtectedPages
