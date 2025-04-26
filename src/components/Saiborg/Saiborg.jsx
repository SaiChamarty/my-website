// Saiborg.jsx
import React from 'react';
import './Saiborg.css';

function Saiborg() {
  return (
    <div>
      <div>
        <div className="name">
          <p className="jersey">Saiborg</p>
        </div>
        {/* new image */}
        <div className="image-container">
          <img
            src="/saiborg.png"
            alt="Saiborg"
            className="saiborg-img"
          />
        </div>
        <div className='building'>
          <p>Building...</p>
        </div>
      </div>
    </div>
  );
}

export default Saiborg;