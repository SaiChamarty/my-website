import React from 'react';
import { Link } from 'react-router-dom';

export default function Notfound() {
  return (
    <div className='App'>
      <div className='Text'>
        <div className='name'>
          <h1>404 - Page Not Found</h1>
        </div>
        <div className='description'>
            <p>The page you are looking for does not exist.</p>
            <Link to="/">Return Home</Link>
        </div>
      </div>
    </div>
  );
}