import React from 'react';
import './navbar.css';


const Navbar = () => {
    return (
        // Navigation Bar
        <nav class="navbar">
            <div class="container">
                <a href="#" class="logo">
                    <img src="https://avatars.githubusercontent.com/u/71394119?s=200&v=4" alt="logo" />
                </a>
                <ul class="nav-links">
                    <li><a href="#">Home</a></li>
                    <li><a href="#">About</a></li>
                    <li><a href="#">Services</a></li>
                    <li><a href="#">Contact</a></li>
                </ul>
            </div>
        </nav>
    );
}

export default Navbar;