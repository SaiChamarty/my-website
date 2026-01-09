// src/pages/Home.jsx
import { useState } from "react";
import styles from "./Home.module.css";
import AnimatedText from "../AnimatedText/AnimatedText";

// Replace these with your actual images (put them in /public or import from assets)
// If using /public, keep as "/junebase.jpg"
const JUNEB_BASE_IMG = "/junebase.jpg";
const UNET_IMG = "/unet.jpg";

function Home() {
  const [openId, setOpenId] = useState(null);

  const toggle = (id) => {
    setOpenId((prev) => (prev === id ? null : id));
  };

  return (
    <div className={styles.App}>
      {/* HERO */}
      <div className={styles.Text}>
        <div className={styles.intro}>
          <AnimatedText text="Hey there! I'm" />
        </div>

        <div className={styles.name}>
          <div className={styles.animclip}>
            <AnimatedText text="Sai Chamarty" baseDelay={0.5} />
          </div>
        </div>

        <div className={styles.description}>
          {/* keep this as a single AnimatedText call */}
          <AnimatedText
            text="CS undergraduate focused on building intelligent robotic systems using machine learning and computer vision."
            baseDelay={1}
            letterDelay={0}
            duration={0.5}
          />
        </div>
      </div>

      {/* WHAT I WORK ON */}
      <section className={styles.section} aria-label="What I work on">
        <h2 className={styles.sectionTitle}>What I work on</h2>

        <div className={styles.workGrid}>
          <div className={styles.workCard}>
            <div className={styles.workTitle}>Perception & Stereo Vision</div>
            <div className={styles.workDesc}>
              Depth, tracking, calibration-minded CV workflows.
            </div>
          </div>

          <div className={styles.workCard}>
            <div className={styles.workTitle}>Robotics Compute & Server Deployment</div>
            <div className={styles.workDesc}>
              Linux servers, remote dev, GPU workflows, hosting.
            </div>
          </div>

          <div className={styles.workCard}>
            <div className={styles.workTitle}>App Development</div>
            <div className={styles.workDesc}>
              Tools and interfaces that connect humans to systems.
            </div>
          </div>

          <div className={styles.workCard}>
            <div className={styles.workTitle}>Web Development & Hosting</div>
            <div className={styles.workDesc}>
              Portfolio + project sites, deployment, reliability.
            </div>
          </div>
        </div>
      </section>

      {/* FEATURED PROJECTS */}
      <section className={styles.section} aria-label="Featured projects">
        <h2 className={styles.sectionTitle}>Featured Projects</h2>

        <div className={styles.cards}>
          {/* CARD 1 - JUNEBBASE */}
          <button
            type="button"
            className={`${styles.card} ${openId === "junebase" ? styles.flipped : ""}`}
            onClick={() => toggle("junebase")}
          >
            <div className={styles.cardInner}>
              {/* FRONT */}
              <div className={`${styles.cardFace} ${styles.cardFront}`}>
                <img className={styles.cardPhoto} src={JUNEB_BASE_IMG} alt="Junebase Robotics" />

                <div className={styles.cardOverlay}>
                  <div className={styles.cardName}>Countertop Robot</div>
                  <div className={styles.cardRole}>ROBOT PROTOTYPING • SYSTEM DESIGN</div>
                </div>

                {/* bottom-left link */}
                <a
                  href="https://junebase.com"
                  className={styles.cardLink}
                  onClick={(e) => e.stopPropagation()}
                  aria-label="Junebase website"
                >
                  ↗
                </a>

                {/* bottom-right flip glyph */}
                <div className={styles.cardAction} aria-hidden="true">+</div>
              </div>

              {/* BACK */}
              <div className={`${styles.cardFace} ${styles.cardBack}`}>
                <p className={styles.cardParagraph}>
                  Building a collaborative cooking-robot prototype with an emphasis on rapid iteration.
                  Worked across mechanical design, system integration, and simulation workflows.
                  Current focus: motion planning hooks, perception integration, and deployment pipeline.
                </p>

                <div className={styles.cardBackLinks}>
                  <a
                    href="https://junebase.com"
                    className={styles.pill}
                    onClick={(e) => e.stopPropagation()}
                  >
                    Website ↗
                  </a>
                  <a
                    href="https://github.com/Junebase-Robotics"
                    className={styles.pill}
                    onClick={(e) => e.stopPropagation()}
                  >
                    GitHub ↗
                  </a>
                </div>

                <div className={styles.cardAction} aria-hidden="true">×</div>
              </div>
            </div>
          </button>

          {/* CARD 2 - U-NET */}
          <button
            type="button"
            className={`${styles.card} ${openId === "unet" ? styles.flipped : ""}`}
            onClick={() => toggle("unet")}
          >
            <div className={styles.cardInner}>
              {/* FRONT */}
              <div className={`${styles.cardFace} ${styles.cardFront}`}>
                <img className={styles.cardPhoto} src={UNET_IMG} alt="U-Net Segmentation" />

                <div className={styles.cardOverlay}>
                  <div className={styles.cardName}>U-Net Segmentation</div>
                  <div className={styles.cardRole}>COMPUTER VISION • DENSE PREDICTION</div>
                </div>

                <a
                  href="/research"
                  className={styles.cardLink}
                  onClick={(e) => e.stopPropagation()}
                  aria-label="U-Net writeup"
                >
                  ↗
                </a>

                <div className={styles.cardAction} aria-hidden="true">+</div>
              </div>

              {/* BACK */}
              <div className={`${styles.cardFace} ${styles.cardBack}`}>
                <p className={styles.cardParagraph}>
                  Implemented and evaluated a U-Net segmentation pipeline for a CV research project.
                  Focused on training stability, augmentation, and qualitative failure analysis.
                  Produced a report + reproducible experiments.
                </p>

                <div className={styles.cardBackLinks}>
                  <a
                    href="/research"
                    className={styles.pill}
                    onClick={(e) => e.stopPropagation()}
                  >
                    Write-up ↗
                  </a>
                  <a
                    href="https://github.com/JonathanPLev/Unet-ReImplementation"
                    className={styles.pill}
                    onClick={(e) => e.stopPropagation()}
                  >
                    Code ↗
                  </a>
                </div>

                <div className={styles.cardAction} aria-hidden="true">×</div>
              </div>
            </div>
          </button>
        </div>

        <a className={styles.moreLink} href="/projects">
          To see more of my projects, click here →
        </a>
      </section>
    </div>
  );
}

export default Home;