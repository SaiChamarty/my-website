import React from 'react';
import { Link } from 'react-router-dom';
import notfound from './Notfound.module.css';

export default function Notfound() {
  return (
    <div className={notfound.App}>
      <div className={notfound.Text}>
        <div className={notfound.name}>
          <h1>404 - Page Not Found</h1>
        </div>
        <div className={notfound.description}>
            <p>The page you are looking for does not exist.</p>
            <Link to="/">Return Home</Link>
        </div>
      </div>
    </div>
  );
}