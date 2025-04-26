// src/components/ProjectContent.jsx
import React from 'react';
import '../Timeline/Timeline.css';        // we’re keeping all styles here

export default function ProjectContent({ title, description, index }) {
  // compute a delay (e.g. 0.6s per item)
  const delay = 0.6 * (index + 1);

  return (
    <div className="timeline-item">
      <div className="marker" />
      <div className="branch" />
      <div
        className="content"
        style={{ '--fade-delay': `${delay}s` }}
      >
        <h3>{title}</h3>
        <p>{description}</p>
      </div>
    </div>
  );
}