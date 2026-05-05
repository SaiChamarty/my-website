import { useState, useCallback } from 'react';
import styles from "./Home.module.css";

const WORK_ITEMS = [
  {
    num: "01",
    title: "PERCEPTION & STEREO VISION",
    desc: "Depth estimation, object tracking, and calibration-minded CV workflows.",
    tags: ["OpenCV", "YOLO", "ROS"],
  },
  {
    num: "02",
    title: "ROBOTICS COMPUTE & SERVER DEPLOYMENT",
    desc: "Linux servers, remote dev environments, GPU workflows, and hosting.",
    tags: ["Ubuntu", "Docker", "Jetson"],
  },
  {
    num: "03",
    title: "APP DEVELOPMENT",
    desc: "Tools and interfaces that connect humans to robotic systems.",
    tags: ["Swift", "SwiftUI", "iOS"],
  },
  {
    num: "04",
    title: "WEB DEVELOPMENT & HOSTING",
    desc: "Portfolio and project sites, deployment pipelines, and reliability.",
    tags: ["React", "Node.js", "Nginx"],
  },
];

const FEATURED = [
  {
    id: "junebase",
    image: "/junebase.jpg",
    name: "Countertop Robot",
    role: "ROBOT PROTOTYPING • SYSTEM DESIGN",
    tags: ["Robotics", "Simulation"],
    href: "https://junebase.com",
    external: true,
  },
  {
    id: "unet",
    image: "/unet.jpg",
    name: "U-Net Segmentation",
    role: "COMPUTER VISION • DENSE PREDICTION",
    tags: ["ML Research", "CV"],
    href: "/research",
    external: false,
  },
];

const MARQUEE_ITEMS = [
  "ROBOTICS", "COMPUTER VISION", "MACHINE LEARNING", "SWIFT / IOS",
  "LINUX", "REACT", "SIMULATION", "PYTHON", "ROS", "HARDWARE",
  "ROBOTICS", "COMPUTER VISION", "MACHINE LEARNING", "SWIFT / IOS",
  "LINUX", "REACT", "SIMULATION", "PYTHON", "ROS", "HARDWARE",
];

// Slide direction per window: 1=left, 2=right, 3=left
const SLIDE_DIR = { 1: 'termWindowSlideTop', 2: 'termWindowSlideRight', 3: 'termWindowSlideBottomRight' };

export default function Home() {
  const [activeWin, setActiveWin] = useState(1);
  const [focusingWin, setFocusingWin] = useState(null);

  const handleWinClick = useCallback((winNum) => {
    if (winNum !== activeWin) {
      setFocusingWin(winNum);
    }
    setActiveWin(winNum);
  }, [activeWin]);

  return (
    <div className={styles.app}>

      {/* ─── HERO ─── */}
      <section className={styles.hero}>
        <div className={styles.heroLeft}>
          <div className={styles.heroName}>— SAI GANESH CHAMARTY</div>

          <h1 className={styles.h1}>
            Building{" "}
            <span className={styles.accent}>intelligent</span>
            <br />
            <span className={styles.serif}>robotic systems</span>
          </h1>

          <p className={styles.lead}>
            CS undergraduate focused on machine learning, computer vision, and
            robotics — building systems that connect perception to physical hardware.
          </p>

          <div className={styles.heroCta}>
            <a href="/projects" className={styles.btnPrimary}>View Projects →</a>
            <a href="/about" className={styles.btnGhost}>About Me</a>
          </div>

          <div className={styles.heroStats}>
            <div className={styles.statItem}>
              <div className={styles.statNum}>7+</div>
              <div className={styles.statLabel}>PROJECTS</div>
            </div>
            <div className={styles.statItem}>
              <div className={styles.statNum}>2</div>
              <div className={styles.statLabel}>RESEARCH PAPERS</div>
            </div>
            <div className={styles.statItem}>
              <div className={styles.statNum}>CS</div>
              <div className={styles.statLabel}>UCD '27</div>
            </div>
          </div>
        </div>

        {/* ─── THREE FLOATING TERMINAL WINDOWS ─── */}
        <div className={styles.termWindowsContainer}>

          {/* Window 1 — Perception Pipeline */}
          <div
            className={`${styles.termWindow} ${styles.termWin1} ${activeWin === 1 ? styles.termWindowActive : styles.termWindowInactive}${focusingWin === 1 ? ` ${styles[SLIDE_DIR[1]]}` : ''}`}
            onClick={() => handleWinClick(1)}
            onAnimationEnd={() => { if (focusingWin === 1) setFocusingWin(null); }}
            style={{ zIndex: activeWin === 1 ? 10 : 1 }}
          >
            <div className={styles.termHeader}>
              <div className={styles.termDots}>
                <span className={`${styles.termDot} ${styles.dotRed}`} />
                <span className={`${styles.termDot} ${styles.dotYellow}`} />
                <span className={`${styles.termDot} ${styles.dotGreen}`} />
              </div>
              <span className={styles.termFilename}>perception_pipeline.py</span>
            </div>
            <div className={styles.orbitArea}>
              <div className={`${styles.orbitRing} ${styles.orbitOuter}`} />
              <div className={`${styles.orbitRing} ${styles.orbitInner}`} />
              <div className={styles.orbitCore} />
              <div className={`${styles.orbitTrack} ${styles.orbitTrackLg}`}>
                <span className={styles.orbitDotLg} />
              </div>
              <div className={`${styles.orbitTrack} ${styles.orbitTrackSm}`}>
                <span className={styles.orbitDotSm} />
              </div>
            </div>
            <p className={styles.orbitLabel}>perception system · online</p>
            <div className={styles.termOutput}>
              {[
                { text: '$ initializing YOLOv8 model…', d: '0.3s' },
                { text: '✓ model loaded  [13.2ms]',      d: '0.8s' },
                { text: '$ running segmentation pass',    d: '1.3s' },
                { text: '→ person     conf: 0.97',        d: '1.8s' },
                { text: '→ robot_arm  conf: 0.93',        d: '2.1s' },
                { text: '→ workspace  conf: 0.88',        d: '2.4s' },
              ].map((l, i) => (
                <div key={i} className={styles.termLine} style={{ '--delay': l.d }}>{l.text}</div>
              ))}
              <div className={styles.termLine} style={{ '--delay': '2.8s' }}>
                <span className={styles.termCursor}>▮</span>
              </div>
            </div>
            <div className={styles.skillBars}>
              {[
                { label: 'PyTorch',   pct: 88, delay: '0.5s' },
                { label: 'Isaac Sim', pct: 75, delay: '0.7s' },
                { label: 'ROS2',      pct: 82, delay: '0.9s' },
                { label: 'OpenCV',    pct: 90, delay: '1.1s' },
              ].map((s) => (
                <div key={s.label} className={styles.skillRow}>
                  <span className={styles.skillLabel}>{s.label}</span>
                  <div className={styles.skillTrack}>
                    <div className={styles.skillBar} style={{ '--bar-delay': s.delay, '--bar-pct': `${s.pct}%` }} />
                  </div>
                  <span className={styles.skillPct}>{s.pct}%</span>
                </div>
              ))}
            </div>
            <div className={`${styles.badgeFloat} ${styles.badgeTopRight}`}>
              <span className={styles.badgePulseDot} />
              Open to internships
            </div>
            <div className={`${styles.badgeFloat} ${styles.badgeBottomLeft}`}>
              <span className={styles.badgeBlueDot} />
              Robotics + ML · UC Davis CS '27
            </div>
          </div>

          {/* Window 2 — Isaac Sim */}
          <div
            className={`${styles.termWindow} ${styles.termWin2} ${activeWin === 2 ? styles.termWindowActive : styles.termWindowInactive}${focusingWin === 2 ? ` ${styles[SLIDE_DIR[2]]}` : ''}`}
            onClick={() => handleWinClick(2)}
            onAnimationEnd={() => { if (focusingWin === 2) setFocusingWin(null); }}
            style={{ zIndex: activeWin === 2 ? 10 : 2 }}
          >
            <div className={styles.termHeader}>
              <div className={styles.termDots}>
                <span className={`${styles.termDot} ${styles.dotRed}`} />
                <span className={`${styles.termDot} ${styles.dotYellow}`} />
                <span className={`${styles.termDot} ${styles.dotGreen}`} />
              </div>
              <span className={styles.termFilename}>isaac_sim_launch.sh</span>
            </div>
            <div className={styles.termOutput}>
              {[
                { text: '$ ./isaac-sim.sh --headless',      d: '0.3s' },
                { text: '[INFO] Loading USD stage...',        d: '0.7s' },
                { text: '[INFO] Physics engine: PhysX 5.1',  d: '1.1s' },
                { text: '[INFO] GPU: NVIDIA Jetson Orin',     d: '1.4s' },
                { text: '✓ Stage loaded [4.2s]',              d: '1.8s' },
                { text: '$ run_task(pick_and_place)',          d: '2.2s' },
                { text: '→ Episode 1 | reward: 0.42',         d: '2.6s' },
                { text: '→ Episode 2 | reward: 0.61',         d: '3.0s' },
                { text: '→ Episode 3 | reward: 0.78',         d: '3.4s' },
              ].map((l, i) => (
                <div key={i} className={styles.termLine} style={{ '--delay': l.d }}>{l.text}</div>
              ))}
              <div className={styles.termLine} style={{ '--delay': '3.8s' }}>
                <span className={styles.termCursor}>▮</span>
              </div>
            </div>
          </div>

          {/* Window 3 — SSH / Linux */}
          <div
            className={`${styles.termWindow} ${styles.termWin3} ${activeWin === 3 ? styles.termWindowActive : styles.termWindowInactive}${focusingWin === 3 ? ` ${styles[SLIDE_DIR[3]]}` : ''}`}
            onClick={() => handleWinClick(3)}
            onAnimationEnd={() => { if (focusingWin === 3) setFocusingWin(null); }}
            style={{ zIndex: activeWin === 3 ? 10 : 1 }}
          >
            <div className={styles.termHeader}>
              <div className={styles.termDots}>
                <span className={`${styles.termDot} ${styles.dotRed}`} />
                <span className={`${styles.termDot} ${styles.dotYellow}`} />
                <span className={`${styles.termDot} ${styles.dotGreen}`} />
              </div>
              <span className={styles.termFilename}>ssh sai@junebase.local</span>
            </div>
            <div className={styles.termOutput}>
              {[
                { text: '$ ssh sai@junebase.local',                d: '0.3s' },
                { text: 'Welcome to Ubuntu 22.04.3 LTS',            d: '0.7s' },
                { text: 'Last login: Mon May 5 09:14:02 2025',      d: '1.0s' },
                { text: 'sai@junebase:~$ htop',                     d: '1.4s' },
                { text: '[CPU ██████░░ 74%] [MEM ████░░░ 51%]',    d: '1.8s' },
                { text: 'sai@junebase:~$ docker ps',                d: '2.3s' },
                { text: 'CONTAINER ID   IMAGE         STATUS',      d: '2.7s' },
                { text: 'a3f2c1         ros2-humble   Up 3 hours',  d: '3.1s' },
              ].map((l, i) => (
                <div key={i} className={styles.termLine} style={{ '--delay': l.d }}>{l.text}</div>
              ))}
              <div className={styles.termLine} style={{ '--delay': '3.5s' }}>
                <span className={styles.termCursor}>sai@junebase:~$ ▮</span>
              </div>
            </div>
          </div>

        </div>
      </section>

      {/* ─── MARQUEE STRIP ─── */}
      <div className={styles.termStrip}>
        <div className={styles.termFadeL} />
        <div className={styles.termFadeR} />
        <div className={styles.marqueeTrack}>
          {MARQUEE_ITEMS.map((item, i) => (
            <span key={i} className={styles.marqueeItem}>
              {item}
              {i < MARQUEE_ITEMS.length - 1 && (
                <span className={styles.diamond}> ◇ </span>
              )}
            </span>
          ))}
        </div>
      </div>

      {/* ─── WHAT I WORK ON ─── */}
      <section className={styles.section}>
        <div className={styles.eyebrow} style={{ marginBottom: "18px" }}>WHAT I WORK ON</div>
        <div className={styles.workGrid}>
          {WORK_ITEMS.map((item) => (
            <div key={item.num} className={styles.workCard}>
              <div className={styles.workNum}>{item.num}</div>
              <div className={styles.workTitle}>{item.title}</div>
              <div className={styles.workDesc}>{item.desc}</div>
              <div className={styles.workTags}>
                {item.tags.map((t) => (
                  <span key={t} className={styles.tag}>{t}</span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>

      <div className={styles.sectionRule} />

      {/* ─── FEATURED PROJECTS ─── */}
      <section className={styles.section}>
        <div className={styles.eyebrow} style={{ marginBottom: "18px" }}>FEATURED PROJECTS</div>
        <div className={styles.featGrid}>
          {FEATURED.map((p) => (
            <a
              key={p.id}
              href={p.href}
              className={styles.featCard}
              target={p.external ? "_blank" : undefined}
              rel={p.external ? "noopener noreferrer" : undefined}
            >
              <img className={styles.featImg} src={p.image} alt={p.name} />
              <div className={styles.featTags}>
                {p.tags.map((t) => (
                  <span key={t} className={styles.featTag}>{t}</span>
                ))}
              </div>
              <div className={styles.featArr}>↗</div>
              <div className={styles.featOverlay}>
                <div className={styles.featName}>{p.name}</div>
                <div className={styles.featRole}>{p.role}</div>
              </div>
            </a>
          ))}
        </div>
        <a className={styles.moreLink} href="/projects">
          See all projects →
        </a>
      </section>

      {/* ─── NOW STRIP ─── */}
      <div className={styles.nowStrip}>
        <div className={styles.nowLabel}>
          <span className={styles.nowDot} />
          NOW
        </div>
        <div className={styles.nowText}>
          Building <strong>Junebase Robotics</strong> — collaborative countertop robot prototype.{" "}
          Training <strong>Saiborg</strong> — a transformer-based conversational LLM.
        </div>
        <a href="/saiborg" className={styles.btnGhost}>Chat with Saiborg</a>
      </div>

    </div>
  );
}
