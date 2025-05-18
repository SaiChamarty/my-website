// src/components/Timeline.jsx
import React from "react";
import "./Timeline.css";
import { projectDict } from "../../data/projects";
import ProjectContent from "./ProjectContent";
import { useState }     from "react";

export default function Timeline() {

  const [shift, setShift] = useState(false);    // ← new

  const projects = Object.entries(projectDict).map(([title, cfg]) => ({
    title,
    description: cfg.description,
    demo:        cfg.demo,
    onDemo:      cfg.onDemo,
    shiftOnOpen: cfg.shiftOnOpen

  }));

  return (
    <div>
      <div className="marker" />

      <div className={`timeline${shift ? " timeline--shift" : ""}`}>
        {projects.map((p, idx) => (
          <ProjectContent
            key={p.title}
            index={idx}
            notifyShift={setShift}        // ← pass setter down
            {...p}          // title, description, demo, onDemo
          />
        ))}
      </div>
    </div>
  );
}