
// data/projects.js
export const projectList = [
  {
    id: "junebase",
    title: "Countertop Collaborative Robot",
    dateLabel: "Jul 2025",
    role: "ROBOT PROTOTYPING • SYSTEM DESIGN",
    image: "/junebase.jpg",
    description:
      "Developing a countertop cooking-robot prototype with open-source designs, focused on stationary robotics, simulation, and kitchen workflows under Junebase Robotics.",
    primaryLink: {
      href: "https://junebase.com",
      ariaLabel: "Junebase website"
    },
    links: [
      { href: "https://junebase.com", label: "Website ↗" },
      { href: "https://github.com/Junebase-Robotics", label: "GitHub ↗" }
    ]
  },
  {
    id: "unet",
    title: "U-Net Segmentation Reimplementation",
    dateLabel: "Dec 2025",
    role: "COMPUTER VISION • SEGMENTATION",
    image: "/unet.jpg",
    description:
      "Reimplemented the 2015 U-Net from scratch, then compared it with modern optimizers (Adam, SGD, Batch Norm) on the PHC dataset and the 2018 Data Science Bowl for cell/nucleus segmentation.",
    primaryLink: {
      href: "/research",
      ariaLabel: "U-Net research write-up"
    },
    links: [
      { href: "/research", label: "Write-up ↗" },
      { href: "https://github.com/JonathanPLev/Unet-ReImplementation", label: "Code ↗" }
    ]
  },
  {
    id: "handwritten",
    title: "Handwritten Digit Recognition",
    dateLabel: "Mar 2025",
    role: "MACHINE LEARNING • CNN",
    image: "/mnist.png",
    description:
      "First ML project: trained a CNN on the MNIST dataset to classify digits 0–9 and studied fundamentals of data pipelines, training loops, and evaluation.",
    primaryLink: {
      href: "https://ml.junebase.com",
      ariaLabel: "Handwritten digit recognition demo"
    },
    links: [
      { href: "https://ml.junebase.com", label: "Demo ↗" }
    ]
  },
  {
    id: "model28",
    title: "Model 28: Scenery Classification",
    dateLabel: "Mar 2025",
    role: "ML RESEARCH • MODEL COMPARISON",
    image: "/intel.png",
    description:
      "Led a team of five to train Logistic Regression, MLP, and CNN models on the Intel Scenery Classification dataset, focusing on cross-model validation and comparative analysis.",
    primaryLink: {
      href: "https://model28.junebase.com",
      ariaLabel: "Model 28 website"
    },
    links: [
      { href: "https://model28.junebase.com", label: "Project ↗" }
    ]
  },
  {
    id: "website",
    title: "This Website",
    dateLabel: "Jan 2025",
    role: "WEB DESIGN • INTERACTIVE UI",
    image: "/me.jpg",
    description:
      "Designed and built my portfolio with AI-assisted workflows, custom UI components, and a narrative-focused layout that spotlights my engineering work.",
    primaryLink: {
      href: "/",
      ariaLabel: "Portfolio website"
    },
    links: [
      { href: "/", label: "Live site ↗" }
    ]
  },
  {
    id: "server",
    title: "Self-Hosted Ubuntu Server",
    dateLabel: "Jan 2025",
    role: "INFRASTRUCTURE • DEVOPS",
    image: "/server.png",
    description:
      "Built and upgraded a home server for hosting sites, CI/CD, remote access, and ML/robotics workloads, including a private Nextcloud-backed NAS for 20+ devices.",
  },
  {
    id: "teachers-pet",
    title: "Teacher's Pet",
    dateLabel: "Mar 2024",
    role: "IOS • SWIFTUI",
    image: "/teacherspet.png",
    description:
      "Built an iOS office-hours management app in Swift/SwiftUI with structured scheduling flows and data structures to improve student/TA coordination.",
    primaryLink: {
      href: "https://github.com/macintAsh1984/TeachersPet",
      ariaLabel: "Teacher's Pet GitHub"
    },
    links: [
      { href: "https://github.com/macintAsh1984/TeachersPet", label: "GitHub ↗" }
    ]
  }
];
