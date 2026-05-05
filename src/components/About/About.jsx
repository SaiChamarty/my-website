import React, { useState } from "react";
import styles from "./About.module.css";

const WORK_EXPERIENCE = [
  {
    id: "home-depot",
    image: "/homedepot.png",
    logo: "/thdlogo.svg",
    name: "Home Depot",
    role: "Hardware Sales Associate",
    when: "June 2024 – Present",
    bullets: [
      "Quickly learned hardware products and in-store workflows to assist customers effectively, contributing to improved customer satisfaction and supporting a reported increase in department sales through clear communication and teamwork.",
    ],
  },
  {
    id: "orientation",
    image: "/orientation.png",
    logo: "/ucd.png",
    name: "Orientation Team Lead",
    role: "UC Davis",
    when: "April 2025 – Oct 2025",
    bullets: [
      "Led and supported student teams in a fast-paced, hands-on orientation environment, continuously learning from professional staff and peers, and earning a recommendation for Student Manager due to strong collaboration and initiative.",
    ],
  },
];

const WORKING_ON = [
  {
    key: "SAIBORG",
    value: "A transformer-based conversational LLM trained from scratch — exploring human–machine interaction.",
    status: "BUILDING",
    live: true,
  },
  {
    key: "JUNEBASE",
    value: "Simulation-to-hardware robotics development for a collaborative countertop robot.",
    status: "ACTIVE",
    live: true,
  },
  {
    key: "THIS SITE",
    value: "A technical portfolio and documentation hub for all ongoing work.",
    status: "LIVE",
    live: true,
  },
];

export default function About() {
  const [openId, setOpenId] = useState(null);
  const toggle = (id) => setOpenId((prev) => (prev === id ? null : id));

  return (
    <section className={styles.container}>

      {/* ── TWO-COLUMN LAYOUT ── */}
      <div className={styles.about}>

        {/* ── LEFT CONTENT COLUMN ── */}
        <div className={styles.leftCol}>
          <div className={styles.heroBlock}>
            <div className="grid-bg" />
            <div className={styles.eyebrow}>ABOUT ME</div>
            <h1 className={styles.h1}>
              Hi, I'm{" "}
              <span className={styles.accent}>Sai</span>
              <br />
              <span className={styles.serif}>Chamarty</span>
            </h1>
            <p className={styles.lead}>
              CS undergraduate at UC Davis with a focus on robotics and machine learning — building
              systems that connect perception, control, and physical hardware.
            </p>
          </div>

          <p className={styles.body}>
            Through coursework and independent projects, I have designed and tested robotic and
            machine learning systems using tools such as NVIDIA Isaac Sim, Jetson-based hardware,
            and Python-based ML pipelines. I have worked on computer vision tasks including object
            detection and semantic segmentation, and built simple CI/CD workflows to support
            testing and iteration.
          </p>

          {/* ── EDUCATION ── */}
          <div className={styles.sectionTitle}>EDUCATION</div>
          <div className={styles.eduCard}>
            <div className={styles.eduLogoWrap}>
              <img src="/ucd.png" alt="UC Davis" className={styles.eduLogo} />
            </div>
            <div className={styles.eduInfo}>
              <div className={styles.eduName}>University of California, Davis</div>
              <div className={styles.eduSub}>COMPUTER SCIENCE</div>
            </div>
            <div className={styles.eduYear}>2027</div>
          </div>

          {/* ── WORK EXPERIENCE ── */}
          <div className={styles.sectionTitle} style={{ marginTop: "2rem" }}>MY WORK EXPERIENCE</div>
          <div className={styles.expGrid}>
            {WORK_EXPERIENCE.map((job) => (
              <button
                key={job.id}
                type="button"
                className={`${styles.expCard} ${openId === job.id ? styles.flipped : ""}`}
                onClick={() => toggle(job.id)}
              >
                <div className={styles.expCardInner}>
                  {/* FRONT */}
                  <div className={`${styles.expFace} ${styles.expFront}`}>
                    <div
                      className={styles.expPhoto}
                      style={{ backgroundImage: `url(${job.image})` }}
                    />
                    <div className={styles.expOverlay}>
                      <div className={styles.expTitle}>{job.name}</div>
                      <div className={styles.expRole}>{job.role}</div>
                      <div className={styles.expWhen}>{job.when}</div>
                    </div>
                    <img className={styles.expLogo} src={job.logo} alt={job.name} />
                    <div className={styles.expAction} aria-hidden="true">+</div>
                  </div>
                  {/* BACK */}
                  <div className={`${styles.expFace} ${styles.expBack}`}>
                    <ul className={styles.expList}>
                      {job.bullets.map((b, i) => <li key={i}>{b}</li>)}
                    </ul>
                    <div className={styles.expAction} aria-hidden="true">×</div>
                  </div>
                </div>
              </button>
            ))}
          </div>

          {/* ── WORKING ON ── */}
          <div className={styles.sectionTitle} style={{ marginTop: "2rem" }}>WHAT I'M WORKING ON</div>
          <div className={styles.workingList}>
            {WORKING_ON.map((item) => (
              <div key={item.key} className={styles.workingItem}>
                <div className={styles.workingKey}>{item.key}</div>
                <div className={styles.workingValue}>{item.value}</div>
                <div className={`${styles.workingStat} ${item.live ? styles.workingStatLive : ""}`}>
                  {item.live && <span className={styles.workingDot} />}
                  {item.status}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* ── RIGHT PORTRAIT ── */}
        <div className={styles.portrait}>
          <div
            className={styles.portraitImg}
            style={{ backgroundImage: `url(${process.env.PUBLIC_URL}/ganesh.jpg)` }}
          />
          <div className={styles.portraitOverlay} />
          <div className={`${styles.corner} ${styles.cornerTL}`} />
          <div className={`${styles.corner} ${styles.cornerTR}`} />
          <div className={`${styles.corner} ${styles.cornerBL}`} />
          <div className={`${styles.corner} ${styles.cornerBR}`} />
          <div className={styles.portraitBadge}>
            <span className={styles.badgeDot} />
            UC DAVIS CS '27
          </div>
        </div>

      </div>
    </section>
  );
}
