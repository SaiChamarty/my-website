
// data/experience.js
// Ordered newest -> oldest to match the timeline (top = most recent).
export const experienceList = [
  {
    id: "lara",
    company: "LARA Lab — UC Davis",
    role: "Incoming Robotics Researcher",
    location: "Davis, CA",
    logo: "/laralogo.png",
    logoWide: true,
    accent: "#8b5cf6",
    dateStart: "Sep 2026",
    dateEnd: null,
    incoming: true,
    description:
      "Incoming researcher at the Laboratory for AI, Robotics and Automation, focused on bimanual robot manipulation using NVIDIA Isaac Sim — building on prior self-directed experience with dual-arm robotics and simulation-based validation.",
    links: [
      { href: "https://lara-soltani.com", label: "Lab ↗" }
    ]
  },
  {
    id: "ibm",
    company: "IBM",
    role: "Firmware Developer Intern — AI Chip Performance",
    location: "Poughkeepsie, NY",
    logo: "/ibmlogo.svg",
    accent: "#0f62fe",
    dateStart: "Jun 2026",
    dateEnd: "Sep 2026",
    description:
      "Built an agentic AI validation framework (Python, LangGraph) that auto-flags invalid performance runs on IBM Z AI accelerators. Cut validation time from 15 min to 1.5 while doubling detection accuracy, and benchmarked 6 production AI/ML workloads.",
    links: [
      { href: "https://www.ibm.com", label: "IBM ↗" }
    ]
  },
  {
    id: "junebase-role",
    company: "Junebase Robotics",
    role: "Robotics Systems Engineer & Embedded Infrastructure Lead",
    location: "Milpitas, CA & Remote",
    logo: "/logoo.png",
    accent: "#33ad3b",
    dateStart: "Mar 2025",
    dateEnd: null,
    description:
      "Architected a self-hosted Ubuntu server (Dockerized Ollama + NVIDIA Isaac Sim) as the backbone for robotics and agentic AI development. Automated CI/CD deployment to NVIDIA Jetson edge devices for rapid hardware-in-the-loop testing.",
    links: [
      { href: "https://junebase.com", label: "Website ↗" },
      { href: "https://github.com/Junebase-Robotics", label: "GitHub ↗" }
    ]
  },
  {
    id: "orientation",
    company: "UC Davis",
    role: "Orientation Team Lead",
    location: "Davis, CA",
    logo: "/ucd.png",
    accent: "#e0b325",
    dateStart: "Apr 2025",
    dateEnd: "Oct 2025",
    description:
      "Led and supported student teams in a fast-paced, hands-on orientation environment, continuously learning from professional staff and peers, and earning a recommendation for Student Manager due to strong collaboration and initiative.",
  },
  {
    id: "home-depot",
    company: "The Home Depot",
    role: "Hardware Sales Associate",
    location: "Seasonal",
    logo: "/thdlogo.svg",
    accent: "#f96302",
    ranges: [
      { start: "Jun 2024", end: "Sep 2024" },
      { start: "Jun 2025", end: "Sep 2025" },
    ],
    description:
      "Quickly learned hardware products and in-store workflows to assist customers effectively across two summer seasons, contributing to improved customer satisfaction and supporting a reported increase in department sales through clear communication and teamwork.",
  }
];
