import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css';

const products = [
  { title: 'HOME',     source: '/',         id: 1 },
  { title: 'PROJECTS', source: '/projects', id: 2 },
  { title: 'SAIBORG',  source: '/saiborg',  id: 3 },
  { title: 'ABOUT',    source: '/about',    id: 4 },
];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const toggleMenu = () => setIsOpen(!isOpen);

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth > 768) {
        setIsOpen(false);
      }
    };
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const listItems = products.map(product => (
    <li key={product.id} className="nav-item">
      <Link to={product.source} className="nav-link">
        {product.title}
      </Link>
    </li>
  ));

  return (
    <nav className="navbar">
      <div className="navbar-inner">
        <img src="logoo.png" alt="Logo" className="logo" />

        {/* Desktop Links */}
        <div className="nav-links">
          <ul>{listItems}</ul>
        </div>

        {/* Hamburger for mobile */}
        <div className="hamburger" onClick={toggleMenu}>
          <div className="hamburger-line" />
          <div className="hamburger-line" />
          <div className="hamburger-line" />
        </div>
      </div>

      {/* Mobile slide-out menu (always in the DOM, but height‐clipped) */}
      <div className={`mobile-menu ${isOpen ? 'open' : ''}`}>
        <ul>{listItems}</ul>
      </div>
    </nav>
  );
}