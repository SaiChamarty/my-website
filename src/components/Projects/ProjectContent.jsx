// src/components/ProjectContent.jsx
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
    index,
  } = props;

  const [open, setOpen] = useState(false);
  const delay = 0.35 * (index + 1);

  // Use the first segment of the role as the corner label (e.g. "ROBOT PROTOTYPING")
  const cornerLabel = role ? role.split(" • ")[0] : "";

  return (
    <div className="timeline-item" style={{ "--delay": delayBlock }}>
      <div className="marker" />
      <div className="branch" />
      <div className="date-label">
        <span>{dateLabel}</span>
      </div>

      <div className="content" style={{ "--fade-delay": `${delay}s` }}>
        <button
          type="button"
          className={`project-card ${open ? "flipped" : ""}`}
          onClick={() => setOpen((prev) => !prev)}
          aria-expanded={open}
        >
          <div className="project-card-inner">

            {/* ── FRONT (new design) ── */}
            <div className="project-card-face project-card-front">
              <img className="project-card-photo" src={image} alt={title} />

              {/* Corner label — role category */}
              <div className="project-card-corner">{cornerLabel}</div>

              {/* Bottom overlay: name + role */}
              <div className="project-card-overlay">
                <div className="project-card-name">{title}</div>
                <div className="project-card-role">{role}</div>
              </div>

              {/* External link (bottom-left) */}
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

              {/* Flip trigger (bottom-right) */}
              <div className="project-card-plus" aria-hidden="true">+</div>
            </div>

            {/* ── BACK (original design kept) ── */}
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
