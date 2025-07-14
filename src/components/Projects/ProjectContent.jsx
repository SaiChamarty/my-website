// src/components/ProjectContent.jsx

// this is the project block that has the demo, description and names of my projects.
import React, { useState, useEffect } from "react";
import { ExternalLink } from "lucide-react"; // external link for the demo button
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
    delayBlock,
    index
  } = props;

  // for opening and closing of the project demo blocks
  const [open, setOpen] = useState(false);
  const delay = 0.6 * (index + 1);

  // toggle the open state or run the demo
  const handleDemo = () => {
    if (onDemo) onDemo();
    else if (Demo) setOpen(o => !o);
  };

  /* let Timeline know when we need the rail shifted */
  useEffect(() => {
    if (shiftOnOpen && notifyShift) notifyShift(open);
  }, [open, shiftOnOpen, notifyShift]);

  /* pakodi */
  /* pakodi */
  /* pakodi */

  return (
    <div
      className="timeline-item"
      style={{ "--delay": delayBlock }}
    >
      {/* For every timeline item, there is a marker (circle), and then a branch, and then the content (either open or closed) */}
      <div className="marker" /> {/* circle */ }
      <div className="branch" /> {/* branch */ }

      {/* content */ }
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
          {/* add more icons here later like for github or something*/}
        </div>

        {/* collapsible horizontal demo */}
        <AnimatePresence initial={false}>
          {open && Demo && (
            <motion.div
              className="demo-wrapper"
              style={{
                width: "40%",
                overflow: "hidden",
                transformOrigin: index % 2 === 0
                  ? "right center"
                  : "left center",
              }}
              initial={{ scale: 0, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{
                scale: 0,
                opacity: 0,
                transition: { duration: 0 }    // ← instant vanish
              }}
              transition={{
                scale:   { duration: 0.5, ease: [0.4, 0, 0.2, 1] },
                opacity: { duration: 0.3, ease: "easeInOut" }
              }}
            >
              <Demo />
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </div>
  );
}