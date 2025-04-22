// src/components/Timeline.jsx
import React from 'react';
import './Timeline.css';
import { projectDict } from '../data/projects';
import ProjectContent from './ProjectContent';

export default function Timeline() {
  const projects = Object.entries(projectDict).map(
    ([title, description]) => ({ title, description })
  );

  return (
    <div>
      {/* standalone start marker */}
      <div className="marker" />

      <div className="timeline">
        {projects.map((proj, idx) => (
          <ProjectContent
            key={idx}
            title={proj.title}
            description={proj.description}
          />
        ))}
      </div>
    </div>
  );
}
