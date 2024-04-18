import React from 'react'
import './Navbar.css';
import MenuButton from '../MenuButton/MenuButton';
import { Link } from 'react-router-dom';


function Navbar() {
  return (
    <>
    <nav className="navbar font-r">
        <div className="logo"><h2>Blood Bank</h2></div>
        <ul className="nav-links font-r">
            <li><Link to="/">Home</Link></li>
            <li><Link to="/about">About Us</Link></li>
            <li><Link to="/projects">Looking for blood</Link></li>
            <li><Link to="/contact">Want to Donate blood</Link></li>
            <MenuButton />
        </ul>
        
    </nav>
    </>
  )
}

export default Navbar;