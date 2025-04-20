// src/components/Timeline.jsx
import React, { useState, useEffect, useRef } from 'react';
import './Timeline.css';
import { projectDict } from '../data/projects';

export default function Timeline({ loadMoreProjects, initialProjects }) {
    const projects = Object.entries(projectDict).map(
        ([title, description]) => ({ title, description })
    );

    return (
        <div>
            <div className="marker" />
            <div className="timeline">
                {/* --- YOUR PROJECT NODES --- */}
                {projects.map((proj, idx) => (
                    <div className="timeline-item" key={idx}>
                    <div className="marker" />
                    <div className="content">
                        <h3>{proj.title}</h3>
                        <p>{proj.description}</p>
                    </div>
                    </div>
                ))}
            </div>
        </div>
      
        
    );
}