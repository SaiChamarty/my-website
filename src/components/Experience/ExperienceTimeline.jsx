import React, { useMemo } from "react";
import "./ExperienceTimeline.css";
import ExperienceCard from "./ExperienceCard";

const ITEM_HEIGHT = 232; // px, vertical space per entry
const AMP = 8;           // % horizontal sway of the spine, either side of center
const CAP = 60;          // px, straight lead-in / lead-out above first & below last point

// Builds a smooth S-curve through each item's point using the classic
// "control points at the segment midpoint's y" technique.
function buildSpinePath(points, totalHeight) {
  let path = `M 50 0 `;
  let prevX = 50;
  let prevY = 0;

  points.forEach(({ x, y }) => {
    const midY = (prevY + y) / 2;
    path += `C ${prevX} ${midY}, ${x} ${midY}, ${x} ${y} `;
    prevX = x;
    prevY = y;
  });

  const midY = (prevY + totalHeight) / 2;
  path += `C ${prevX} ${midY}, 50 ${midY}, 50 ${totalHeight}`;
  return path;
}

export default function ExperienceTimeline({ items }) {
  const totalHeight = items.length * ITEM_HEIGHT + CAP * 2;

  const laidOut = useMemo(
    () =>
      items.map((item, idx) => {
        const side = idx % 2 === 0 ? "right" : "left";
        const y = CAP + ITEM_HEIGHT * idx + ITEM_HEIGHT / 2;
        const x = 50 + (side === "right" ? AMP : -AMP);
        return { item, side, x, y };
      }),
    [items]
  );

  const spinePath = useMemo(
    () => buildSpinePath(laidOut.map(({ x, y }) => ({ x, y })), totalHeight),
    [laidOut, totalHeight]
  );

  return (
    <div className="exp-timeline" style={{ height: totalHeight }}>
      <svg
        className="exp-spine"
        viewBox={`0 0 100 ${totalHeight}`}
        preserveAspectRatio="none"
        aria-hidden="true"
      >
        <path
          d={spinePath}
          fill="none"
          stroke="url(#exp-spine-gradient)"
          strokeWidth="2"
          vectorEffect="non-scaling-stroke"
        />
        <defs>
          <linearGradient id="exp-spine-gradient" x1="0" y1="0" x2="0" y2="1">
            <stop offset="0%" stopColor="var(--green, #33ad3b)" stopOpacity="0" />
            <stop offset="8%" stopColor="var(--green, #33ad3b)" stopOpacity="0.9" />
            <stop offset="92%" stopColor="var(--green, #33ad3b)" stopOpacity="0.9" />
            <stop offset="100%" stopColor="var(--green, #33ad3b)" stopOpacity="0" />
          </linearGradient>
        </defs>
      </svg>

      {laidOut.map(({ item, side, x, y }, idx) => (
        <div
          key={item.id}
          className={`exp-item exp-item-${side}`}
          style={{ "--exp-x": `${x}%`, "--exp-y": `${y}px`, "--exp-accent": item.accent }}
        >
          <div className="exp-marker" />
          <div className="exp-branch" />
          <ExperienceCard item={item} side={side} delay={0.12 * idx + 0.15} />
        </div>
      ))}
    </div>
  );
}
