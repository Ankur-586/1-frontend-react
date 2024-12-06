import React, { createContext, useState, useEffect } from "react";
import { ACCESS_TOKEN, REFRESH_TOKEN } from "../constants";

// Create a context
export const AuthContext = createContext();

// Create a provider component to manage authentication state
export const AuthProvider = ({ children }) => {
    const [isLoggedIn, setIsLoggedIn] = useState(false);

    // Check the login state whenever the component mounts or when `localStorage` changes
    useEffect(() => {
        const checkLoginStatus = () => {
            const token = localStorage.getItem(ACCESS_TOKEN);
            setIsLoggedIn(!!token); // If token exists, user is logged in
        };

        checkLoginStatus(); // Initial check for token on component mount

        // Listen for changes in localStorage (e.g., token removal)
        const handleStorageChange = () => {
            checkLoginStatus(); // Recheck the login status when localStorage changes
        };

        // Add event listener for 'storage' events
        window.addEventListener("storage", handleStorageChange);

        // Cleanup the event listener on component unmount
        return () => {
            window.removeEventListener("storage", handleStorageChange);
        };
    }, []); // Run only on mount and when `localStorage` changes

    // Function to log the user in
    const login = (accessToken) => {
        localStorage.setItem(ACCESS_TOKEN, accessToken); // Store the token in localStorage
        setIsLoggedIn(true); // Update the login state
    };

    // Function to log the user out
    const logout = () => {
        localStorage.removeItem(ACCESS_TOKEN); // Remove the token from localStorage
        setIsLoggedIn(false); // Update the login state
    };

    return (
        <AuthContext.Provider value={{ isLoggedIn, login, logout }}>
            {children} {/* Allow child components to access the context */}
        </AuthContext.Provider>
    );
};