// src/components/Home.js
import React from 'react';
import { Link } from 'react-router-dom';
import '../styles/Home.css'; // Optional: Add your CSS for styling

function Home() {
    return (
        <div className="home-container">
            <nav>
                <ul>
                    <li>
                        <Link to="/register">Register</Link>
                    </li>
                    <li>
                        <Link to="/login">Login</Link>
                    </li>
                    <li>
                        <Link to="/logout">Logout</Link>
                    </li>
                </ul>
            </nav>
            <h1>Welcome to Our Application</h1>
        </div>
    );
}

export default Home;
