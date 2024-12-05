/*
This file contains all the routes we want to access
*/

import React from "react";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import Login from "./pages/Login";
import Register from "./pages/Register";
import Navbar from './components/Navbar';
import Home from "./pages/Home";
import NotFound from "./pages/NotFound";
// import ProtectedRoute from "./components/ProtectedRoute";

function Logout() {
  localStorage.clear();
  return <Navigate to="/" />; // Redirect to home after logout
}

function App() {
  return (
    <BrowserRouter>
    <Navbar />
      <Routes>
      <Route path="/" element={<Home />} />
        
        <Route path="/login" element={<Login />} />
        <Route path="/logout" element={<Logout />} />
        <Route path="/register" element={<Register />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </BrowserRouter>
  );
}


export default App;

/*<Route path="/" element={<ProtectedRoute><Logout /></ProtectedRoute>}/> */