import React, { useState } from "react";

const MONTHS = {
  jan: 0, feb: 1, mar: 2, apr: 3, may: 4, jun: 5,
  jul: 6, aug: 7, sep: 8, oct: 9, nov: 10, dec: 11,
};

function parseMonthYear(str) {
  const [month, year] = str.trim().split(/\s+/);
  return { m: MONTHS[month.slice(0, 3).toLowerCase()], y: Number(year) };
}

// Inclusive month span, e.g. Jun 2024 -> Sep 2024 = 4 months
function monthSpan(startStr, endStr) {
  const start = parseMonthYear(startStr);
  const now = new Date();
  const end = endStr ? parseMonthYear(endStr) : { m: now.getMonth(), y: now.getFullYear() };
  return (end.y - start.y) * 12 + (end.m - start.m) + 1;
}

function formatSpan(totalMonths) {
  const yrs = Math.floor(totalMonths / 12);
  const mos = totalMonths % 12;
  const parts = [];
  if (yrs) parts.push(`${yrs} yr${yrs > 1 ? "s" : ""}`);
  if (mos) parts.push(`${mos} mo${mos > 1 ? "s" : ""}`);
  return parts.join(" ") || "1 mo";
}

export default function ExperienceCard({ item, side, delay }) {
  const [open, setOpen] = useState(false);
  const { company, role, location, logo, logoWide, accent, dateStart, dateEnd, ranges, incoming, description, links = [] } = item;

  const isCurrent = Boolean(dateStart) && !dateEnd && !ranges && !incoming;
  const isImageLogo = typeof logo === "string" && logo.startsWith("/");

  let totalMonths = 0;
  let chips = [];
  let durationLabel;
  if (incoming) {
    chips = [`Starting ${dateStart}`];
    durationLabel = "Incoming";
  } else if (ranges) {
    ranges.forEach((r) => {
      totalMonths += monthSpan(r.start, r.end);
      chips.push(`${r.start.split(" ")[0]}–${r.end.split(" ")[0]} ${r.end.split(" ")[1]}`);
    });
    durationLabel = `${ranges.length} summers · ${formatSpan(totalMonths)}`;
  } else if (dateStart) {
    totalMonths = monthSpan(dateStart, dateEnd);
    chips.push(`${dateStart} – ${dateEnd || "Present"}`);
    durationLabel = formatSpan(totalMonths);
  }

  return (
    <div
      className={`exp-card-wrap exp-card-${side}`}
      style={{ "--exp-accent": accent, "--exp-delay": `${delay}s` }}
    >
      <button
        type="button"
        className={`exp-card ${open ? "exp-flipped" : ""}`}
        onClick={() => setOpen((v) => !v)}
        aria-expanded={open}
      >
        <div className="exp-card-inner">

          {/* ── FRONT ── */}
          <div className="exp-card-face exp-card-front">
            <div className={`exp-logo-badge ${isImageLogo ? "exp-logo-image" : "exp-logo-mono"}${logoWide ? " exp-logo-wide" : ""}`}>
              {isImageLogo ? (
                <img src={logo} alt={`${company} logo`} />
              ) : (
                <span>{company.charAt(0)}</span>
              )}
            </div>

            <div className="exp-card-text">
              <div className="exp-card-company">
                {company}
                {(isCurrent || incoming) && <span className="exp-live-dot" aria-hidden="true" />}
              </div>
              <div className="exp-card-role">{role}</div>

              <div className="exp-card-dates">
                {chips.map((c, i) => (
                  <span key={c} className="exp-date-chip">
                    {i > 0 && <span className="exp-date-sep" aria-hidden="true">·</span>}
                    {c}
                  </span>
                ))}
                <span className="exp-duration-pill">
                  {isCurrent ? "Present · " : ""}{durationLabel}
                </span>
              </div>
            </div>

            <div className="exp-card-plus" aria-hidden="true">+</div>
          </div>

          {/* ── BACK ── */}
          <div className="exp-card-face exp-card-back">
            <div className="exp-card-back-company">{company}</div>
            {location && <div className="exp-card-back-location">{location}</div>}
            <p className="exp-card-paragraph">{description}</p>
            {links.length ? (
              <div className="exp-card-links">
                {links.map((link) => (
                  <a
                    key={link.href}
                    href={link.href}
                    className="exp-pill"
                    onClick={(e) => e.stopPropagation()}
                  >
                    {link.label}
                  </a>
                ))}
              </div>
            ) : null}
            <div className="exp-card-close" aria-hidden="true">&times;</div>
          </div>

        </div>
      </button>
    </div>
  );
}
