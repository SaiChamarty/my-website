// src/components/Timeline.jsx
import React from "react";
import "./Timeline.css";
import { projectList } from "../../data/projects";
import ProjectContent from "./ProjectContent";

export default function Timeline() {
  // We parse the data from the projects json file under data.
  const projects = projectList;

  return (
    <div>
      {/* This is the singular marker all the way at the top, pakodi */}
      <div className="marker" />

      <div className="timeline">
        {projects.map((p, idx) => {
          // compute a quicker delay per item
          const delayBlock = `${idx * 0.12}s`;

          return (
            <ProjectContent
              key={p.id}
              index={idx}
              delayBlock={delayBlock}     // <-- pass it down
              {...p}
            />
          );
        })}
      </div>
    </div>
  );
}
