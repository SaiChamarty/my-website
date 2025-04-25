// src/components/AnimatedText.jsx
import React from 'react';
import { motion } from 'framer-motion';

export default function AnimatedText({
  text,
  baseDelay = 0,
  letterDelay = 0.05,
  duration = 0.8
}) {
  // grab viewport dims once per render
  const vw = typeof window !== 'undefined' ? window.innerWidth  : 0;
  const vh = typeof window !== 'undefined' ? window.innerHeight : 0;

  return (
    <div style={{ display: 'inline-block', whiteSpace: 'pre-wrap' }}>
      {text.split('').map((char, i) => {
        const isSpace     = char === ' ';
        const displayChar = isSpace ? '\u00A0' : char;

        // pick a random angle around the circle
        const angle = Math.random() * 2 * Math.PI;

        // use window dims for radii
        const x0 = Math.cos(angle) * vw * 0.8;
        const y0 = Math.sin(angle) * vh * 0.8;

        return (
          <motion.span
            key={i}
            style={{ display: 'inline-block' }}
            initial={{ x: x0, y: y0, opacity: 0, rotate: 360 }}
            animate={{ x: 0,   y: 0,   opacity: 1, rotate: 0   }}
            transition={{
              delay:    baseDelay + i * letterDelay,
              duration,
              ease:     'easeOut'
            }}
          >
            {displayChar}
          </motion.span>
        );
      })}
    </div>
  );
}