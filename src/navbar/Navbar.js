import  "./Navbar.css"
import React from 'react';
import {Link} from 'react-router-dom';
import logo from "./logo.png"

const Navbar = () => {
  return(
    <nav className="navbar">
        <img src = {logo} alt="logo"></img>
        <ul className="nav-list">
            <Link to = "/" className="nav-items">
                <li>Home</li>
            </Link>
            <Link to = "/product" className="nav-items">
                <li>Products</li>
            </Link>
            <Link to = "/contact" className="nav-items">
                <li>Contact</li>
            </Link>
            <Link to = "/about" className="nav-items">
               <li>About us</li>
            </Link>
        </ul>
    </nav>
  );
}

export default Navbar