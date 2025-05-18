
// data/projects.js
import HandwrittenDemo from "../demos/HandwrittenDemo.jsx";   // example

export const projectDict = {
  "Handwritten Recognition": {
    description: "CNN + Flask server for live digit prediction.",
    demo: HandwrittenDemo,          // ⬅ inline component shown/hidden
    // OR: onDemo: () => window.open("https://ml.junebase.com", "_blank")
    shiftOnOpen: true                 // ← makes Timeline slide 40 %
  },

  "Graphing Calculator": {
    description: "graphing calculator!",
    onDemo: () => alert("Custom handler just for this card!")
  },

  "Saiborg": {
    description: "Saiborg!",
    onDemo: () => alert("Custom handler just for this card!")
  },

  "Teachers Pet": {
    description: "Teachers Pet!",
    onDemo: () => alert("Custom handler just for this card!")
  },

  "Obstacle Avoiding Robot": {
    description: "Obstacle Avoiding Robot!",
    onDemo: () => alert("Custom handler just for this card!")
  }
  // …add more
};