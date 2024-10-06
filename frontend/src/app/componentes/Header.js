"use client"

import Link from 'next/link';
import { useState } from 'react';
import { FaBars, FaSearch, FaShoppingCart, FaTimes, FaUserCircle } from 'react-icons/fa';
import '../styles/Header.css';

const Header = () => {
  const [isMobileMenuOpen, setMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <header className="header">
      <div className="logo">
        <a href="/">eShop</a>
      </div>

      {/* Navigation Links for Desktop */}
      <nav className={`nav-links ${isMobileMenuOpen ? 'open' : ''}`}>
        <Link href="/Home" className="nav-link">Home</Link>
        <Link href="/Products" className="nav-link">Products</Link>
        <Link href="/AboutUs" className="nav-link">About Us</Link>
        <Link href="/Contact" className="nav-link">Contact</Link>
      </nav>

      {/* Search Bar */}
      <div className="search-bar">
        <input type="text" placeholder="Search products..." className="search-input" />
        <button className="search-button"><FaSearch /></button>
      </div>

      {/* Icons for Cart and User Profile */}
      <div className="icons">
        <Link href="/Cart" className="icon-link"><FaShoppingCart className="icon" /> <span className="cart-count">2</span></Link>
        <Link href="/UserProfile" className="icon-link"><FaUserCircle className="icon" /></Link>
      </div>

      {/* Mobile Menu Toggle */}
      <div className="mobile-menu-icon" onClick={toggleMobileMenu}>
        {isMobileMenuOpen ? <FaTimes /> : <FaBars />}
      </div>
    </header>
  );
};

export default Header;
