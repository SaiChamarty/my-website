// src/components/ProjectContent.jsx
import React from 'react';

export default function ProjectContent({ title, description }) {
  return (
    <div className="timeline-item">
      <div className="marker" />
      <div className="content">
        <h3>{title}</h3>
        <p>{description}</p>
      </div>
    </div>
  );
}

