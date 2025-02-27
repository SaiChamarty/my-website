import React from 'react';
import { Link } from 'react-router-dom';

const products = [
  { title: 'HOME', source: '/', id: 1 },
  { title: 'PROJECTS', source: '/projects', id: 2 },
  { title: 'SAIBORG', source: '/saiborg', id: 3 },
  { title: 'ABOUT', source: '/about', id: 4 }
];

export default function Navbar() {
  const listItems = products.map(product => (
    <li
      key={product.id}
      style={{
        listStyle: 'none',
        color: '#4FA031',
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
    <nav
      style={{
        display: 'flex', // Flex container
        justifyContent: 'space-between' // Space between logo and links
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

      {/* Navigation Links */}
      <div
        style={{
          marginRight: '30px',
          fontWeight: 700
        }}
      >
        <ul
          style={{
            display: 'flex', // Flexbox for links
            padding: '10px',
            margin: '0',
            listStyle: 'none',
            gap: '20px'
          }}
        >
          {listItems}
        </ul>
      </div>
    </nav>
  );
}