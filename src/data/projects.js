
// data/projects.js
import HandwrittenDemo from "../demos/HandwrittenDemo.jsx";   // example

export const projectDict = {
  "Handwritten Recognition": {
    description: "Logistic Regression + Flask server for live digit prediction.",
    demo: HandwrittenDemo,          // ⬅ inline component shown/hidden
    // OR: onDemo: () => window.open("https://ml.junebase.com", "_blank")
    shiftOnOpen: true                 // ← makes Timeline slide 40 %
  },

  "ML Scenery Classification": {
    description: "Multi model classification over Intel dataset on sceneries.",
    onDemo: () => window.open("https://model28.junebase.com", "_blank"),
    shiftOnOpen: true
  },

  "Teachers Pet": {
    description: "Office hours management application",
    onDemo: () => window.open("https://github.com/macintAsh1984/TeachersPet"),
    shiftOnOpen: true
  }
  // …add more
};