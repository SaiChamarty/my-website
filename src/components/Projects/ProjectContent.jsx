// src/components/ProjectContent.jsx

// this is the project block that has the demo, description and names of my projects.
import React, { useState } from "react";
import "./Timeline.css";

export default function ProjectContent(props) {
  const {
    title,
    description,
    role,
    image,
    primaryLink,
    links = [],
    dateLabel,
    delayBlock,
    index
  } = props;

  const [open, setOpen] = useState(false);
  const delay = 0.35 * (index + 1);

  return (
    <div
      className="timeline-item"
      style={{ "--delay": delayBlock }}
    >
      {/* For every timeline item, there is a marker (circle), a branch, a date label, and the content */}
      <div className="marker" />
      <div className="branch" />
      <div className="date-label">
        <span>{dateLabel}</span>
      </div>

      <div
        className="content"
        style={{ "--fade-delay": `${delay}s` }}
      >
        <button
          type="button"
          className={`project-card ${open ? "flipped" : ""}`}
          onClick={() => setOpen((prev) => !prev)}
          aria-expanded={open}
        >
          <div className="project-card-inner">
            {/* FRONT */}
            <div className="project-card-face project-card-front">
              <img className="project-card-photo" src={image} alt={title} />

              <div className="project-card-overlay">
                <div className="project-card-name">{title}</div>
                <div className="project-card-role">{role}</div>
              </div>

              {primaryLink ? (
                <a
                  href={primaryLink.href}
                  className="project-card-link"
                  onClick={(e) => e.stopPropagation()}
                  aria-label={primaryLink.ariaLabel || title}
                >
                  ↗
                </a>
              ) : null}

              <div className="project-card-action" aria-hidden="true">+</div>
            </div>

            {/* BACK */}
            <div className="project-card-face project-card-back">
              <p className="project-card-paragraph">{description}</p>

              {links.length ? (
                <div className="project-card-links">
                  {links.map((link) => (
                    <a
                      key={link.href}
                      href={link.href}
                      className="project-pill"
                      onClick={(e) => e.stopPropagation()}
                    >
                      {link.label}
                    </a>
                  ))}
                </div>
              ) : null}

              <div className="project-card-action" aria-hidden="true">×</div>
            </div>
          </div>
        </button>
      </div>
    </div>
  );
}
