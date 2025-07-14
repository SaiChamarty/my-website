// src/components/Timeline.jsx
import React from "react";
import "./Timeline.css";
import { projectDict } from "../../data/projects";
import ProjectContent from "./ProjectContent";
import { useState }     from "react";

export default function Timeline() {

  const [shift, setShift] = useState(false);    // ← new
  // We parse the data from the projects json file under data. 
  const projects = Object.entries(projectDict).map(([title, cfg]) => ({
    title,
    description: cfg.description,
    demo:        cfg.demo,
    onDemo:      cfg.onDemo,
    shiftOnOpen: cfg.shiftOnOpen

  }));

  return (
    <div>
      {/* This is the singular marker all the way at the top, pakodi */}
      <div className="marker" />

      <div className={`timeline${shift ? " timeline--shift" : ""}`}>
        {projects.map((p, idx) => {
          // compute a delay, e.g. 0.1s per item
          const delayBlock = `${idx * 0.2}s`;

          return (
            <ProjectContent
              key={p.title}
              index={idx}
              notifyShift={setShift}
              delayBlock={delayBlock}     // <-- pass it down
              {...p}
            />
          );
        })}
      </div>
    </div>
  );
}