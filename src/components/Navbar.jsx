import React, { useContext } from "react";
import { Link, useNavigate } from "react-router-dom";
import { AuthContext } from "../components/AuthContext"; // Import AuthContext

const Navbar = () => {
    const { isLoggedIn, logout } = useContext(AuthContext); // Access the login state and logout function
    const navigate = useNavigate();

    const handleLogout = () => {
        logout(); // Log the user out
        navigate("/"); // Redirect to login page
    };

    return (
        <nav className="bg-gray-800 text-white p-4">
            <ul className="flex justify-between items-center">
                <li className="text-lg font-bold">
                    <Link to="/">E-Shop</Link>
                </li>
                <div className="flex space-x-4">
                    {!isLoggedIn && (
                        <>
                            <li>
                                <Link to="/register">Register</Link>
                            </li>
                            <li>
                                <Link to="/login">Login</Link>
                            </li>
                        </>
                    )}
                    {isLoggedIn && (
                        <li>
                            <button onClick={handleLogout}>Logout</button>
                        </li>
                    )}
                </div>
            </ul>
        </nav>
    );
};

export default Navbar;
