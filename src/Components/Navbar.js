import React from 'react';
import '../CSS/Navbar.css';
import { Link } from 'react-router-dom';

export default function Navbar() {
    return (
        <div className="navbar">
            <h2 className="navbar-title"><Link to="/">Movies App</Link></h2>
            <nav className="navbar-links">
                <li className="navbar-links-link"><Link to="/">Home</Link></li>
                <li className="navbar-links-link"><Link to="/popular-movies">Popular Movies</Link></li>
                <li className="navbar-links-link"><Link to="/search-movies">Search Movies</Link></li>
                <li className="navbar-links-link"><Link to="/contact-us">Contact Us</Link></li>
            </nav>
        </div>
    )
}
