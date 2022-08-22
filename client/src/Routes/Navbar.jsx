import React from "react";
import { Link } from "react-router-dom";

export const Navbar = () => {
    return (
        <nav className="navbar">
            <Link to="/"><h2>Online Shop</h2></Link>
            <Link to="/register">Register</Link>
            <Link to="/login">Login</Link>
        </nav>
    );
};


