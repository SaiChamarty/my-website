import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

const products = [
  { title: 'HOME', source: '/', id: 1 },
  { title: 'PROJECTS', source: '/projects', id: 2 },
  { title: 'SAIBORG', source: '/saiborg', id: 3 },
  { title: 'ABOUT', source: '/about', id: 4 }
];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const toggleMenu = () => setIsOpen(!isOpen);

  // Close the mobile menu when the screen width increases
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
    <li
      key={product.id}
      style={{
        listStyle: 'none',
        margin: '10px'
      }}
    >
      <Link
        to={product.source}
        style={{
          textDecoration: 'none',
          color: '#4FA031'
        }}
      >
        {product.title}
      </Link>
    </li>
  ));

  return (
    <nav style={{ position: 'relative', display: 'flex', flexDirection: 'column' }}>
      <div
        style={{
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center'
        }}
      >
        {/* Logo */}
        <img
          src="logoo.png"
          alt="Logo"
          style={{
            width: '50px',
            height: '50px',
            padding: '10px'
          }}
        />

        {/* Desktop Navigation Links */}
        <div className="nav-links" style={{ marginRight: '30px', fontWeight: 700 }}>
          <ul
            style={{
              display: 'flex',
              padding: '10px',
              margin: '0',
              listStyle: 'none',
              gap: '20px'
            }}
          >
            {listItems}
          </ul>
        </div>

        {/* Hamburger Menu Icon for Mobile */}
        <div
          className="hamburger"
          onClick={toggleMenu}
          style={{
            flexDirection: 'column',
            cursor: 'pointer',
            marginRight: '20px'
          }}
        >
          <div style={{ width: '25px', height: '3px', backgroundColor: '#4FA031', margin: '4px 0' }}></div>
          <div style={{ width: '25px', height: '3px', backgroundColor: '#4FA031', margin: '4px 0' }}></div>
          <div style={{ width: '25px', height: '3px', backgroundColor: '#4FA031', margin: '4px 0' }}></div>
        </div>
      </div>

      {/* Mobile Navigation Links - only visible when hamburger menu is toggled */}
      {isOpen && (
        <div
          className="mobile-menu"
          style={{
            position: 'absolute', // position relative to <nav>
            top: '70px',         // adjust this value as needed based on your navbar height
            right: '20px',       // aligns the menu with the hamburger icon
            background: '#000',
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'flex-start',
            padding: '10px'
          }}
        >
          <ul style={{ listStyle: 'none', padding: '0', margin: '0' }}>
            {listItems}
          </ul>
        </div>
      )}
    </nav>
  );
}