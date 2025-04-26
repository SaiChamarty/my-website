// src/pages/Home.jsx
import styles from './Home.module.css';
import AnimatedText from '../AnimatedText/AnimatedText';

function Home() {
  return (
    <div className={styles.App}>
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
          <AnimatedText
            text="I am an engineer passionate about App development and Machine Learning."
            baseDelay={1}
            letterDelay={0}    // no per-letter staggering
            duration={0.5}     // faster overall
          />
          
        </div>
      </div>
    </div>
  );
}

export default Home;