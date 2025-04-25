// src/pages/Home.jsx
import '../App.css';
import Navbar from './Navbar';
import AnimatedText from '../components/AnimatedText';

function Home() {
  return (
    <div className='App'>
      <div className='Text'>
        <div className='intro'>
          <AnimatedText text="Hey there! I'm" />
        </div>
        <div className='name'>
          <div className='anim-clip'>
            <AnimatedText text="Sai Chamarty" baseDelay={0.5} />
          </div>
        </div>
        <div className='description'>
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