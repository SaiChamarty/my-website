import React from 'react';
import styles from './About.module.css';

export default function About() {
  return (
    <section className={styles.container}>
      <h1 className={styles.sectionTitle}>About me</h1>

      <h2 className={styles.mainHeading}>Hi, I am Sai Chamarty!</h2>
      <p className={styles.paragraph}>
        I’m an engineer with a passion for robotics and machine learning,
        currently exploring how these fields can shape intelligent systems. My
        long-term dream is to create autonomous robots that can interact
        meaningfully with humans, but for now, I’m taking it step by step—
        starting with building conversational AI named Saiborg.
      </p>

      <h3 className={styles.sectionTitle}>Education</h3>
      <div className={styles.education}>
        <p className={styles.eduInstitution}>
          University of California, Davis ’27
        </p>
        <p className={styles.eduDetail}>
          Computer Science Major and Electrical Engineering minor
        </p>
      </div>

      <h3 className={styles.sectionTitle}>What I’m working on</h3>
      <ul className={styles.list}>
        <li>Saiborg – A conversational AI</li>
        <li>This website</li>
      </ul>
    </section>
  );
}