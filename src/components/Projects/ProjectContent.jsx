// src/components/ProjectContent.jsx
import React, { useState, useEffect } from "react";
import { ExternalLink } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import "./Timeline.css";

export default function ProjectContent(props) {
  const {
    title,
    description,
    demo: Demo,
    onDemo,
    shiftOnOpen = false,     // ← new flag (only true for handwriting card)
    notifyShift,             // ← callback from Timeline
    index
  } = props;

  const [open, setOpen] = useState(false);
  const delay = 0.6 * (index + 1);

  const handleDemo = () => {
    if (onDemo) onDemo();
    else if (Demo) setOpen(o => !o);
  };
  /* let Timeline know when we need the rail shifted */
  useEffect(() => {
    if (shiftOnOpen && notifyShift) notifyShift(open);
  }, [open, shiftOnOpen, notifyShift]);

  return (
    <div className="timeline-item">
      <div className="marker" />
      <div className="branch" />

      <div
        className={`content${open ? " open" : ""}`}
        style={{ "--fade-delay": `${delay}s` }}
      >
        {/* textual stack */}
        <div className="text-stack">
          <h3>{title}</h3>
          <p>{description}</p>
        </div>

        {/* icon bar (bottom‑right corner) */}
        <div className="icon-bar">
          <button
            className="demo-btn"
            aria-label="Open demo"
            onClick={handleDemo}
          >
            <ExternalLink size={18} />
          </button>
          {/* ✨ add more icons here later */}
        </div>

        {/* collapsible horizontal demo */}
        <AnimatePresence initial={false}>
          {open && Demo && (
            <motion.div
              className="demo-wrapper"
              initial={{ width: 0, height: 0, opacity: 0 }}
              animate={{ width: "auto", height: "auto", opacity: 1 }}
              exit={{ width: 0, height: 0, opacity: 0 }}
              transition={{ duration: 0.3 }}
            >
              <Demo />
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </div>
  );
}