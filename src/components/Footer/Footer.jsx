import React from "react";
import styles from "./Footer.module.css";

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <h2 className={styles.heading}>You can contact me here!</h2>

      <div className={styles.links}>
        <a
          href="mailto:saiganeshchamarty@gmail.com"
          aria-label="Email"
        >
          <img src="/email.png" alt="Email icon" />
        </a>

        <a
          href="https://www.linkedin.com/in/sai-chamarty-263342274/"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="LinkedIn"
        >
          <img src="/linkedin.webp" alt="LinkedIn icon" />
        </a>

        <a
          href="https://github.com/SaiChamarty"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="GitHub"
        >
          <img src="/github.webp" alt="GitHub icon" />
        </a>
      </div>

      <div className={styles.meta}>
        <p>© 2026 Sai Chamarty. All rights reserved.</p>
        <p className={styles.subtle}>
          This website has been created using AI assisted workflows.
        </p>
      </div>
    </footer>
  );
}
