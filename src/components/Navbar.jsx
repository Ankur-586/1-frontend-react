import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
    return (
        <nav className="bg-gray-800 text-white p-4">
            <ul className="flex justify-between items-center">
                <li className="text-lg font-bold">E-Shop</li>
                <div className="flex space-x-4">
                    <ul>
                        <li>
                            <Link to="/register">Registerr</Link>
                        </li>
                        <li>
                            <Link to="/login">Login</Link>
                        </li>
                        <li>
                            <Link to="/logout">Logout</Link>
                        </li>
                    </ul>
                </div>
            </ul>
        </nav>
    );
};

export default Navbar;