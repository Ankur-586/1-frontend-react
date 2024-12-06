/*
--> This file contains all the routes we want to access
--> App.js - Main entry point
*/

import React from "react";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import Login from "./pages/Login";
import Register from "./pages/Register";
import Navbar from './components/Navbar';
import Home from "./pages/Home";
import NotFound from "./pages/NotFound";
import { AuthProvider } from "./components/AuthContext"; // Import AuthProvider

// Logout function clears the local storage and redirects to the home page
function Logout() {
  localStorage.clear(); // Clear local storage
  return <Navigate to="/" />; // Redirect to home after logout
}

function App() {
  return (
    <AuthProvider> {/* Wrap the app with AuthProvider to provide context */}
      <BrowserRouter>
        <Navbar /> {/* Navbar that will show login/logout state */}
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/logout" element={<Logout />} /> {/* Logout route */}
          <Route path="*" element={<NotFound />} /> {/* Catch-all route for non-existing pages */}
        </Routes>
      </BrowserRouter>
    </AuthProvider>
  );
}

export default App;
