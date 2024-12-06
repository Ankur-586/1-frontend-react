/* 
--> Also Known as index.js
--> Entry point of the React application 
*/

import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import "./index.css"
import { AuthProvider } from "./components/AuthContext"; 

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <AuthProvider>
    <App />
  </AuthProvider>
  </StrictMode>
)
