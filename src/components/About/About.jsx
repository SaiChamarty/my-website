import about from './About.module.css';

function About() {
  return (
    <div className={about.App}>
      <div className={about.Text}>
        <div className={about.name}>
          <h1>About me</h1>
        </div>
        <div className={about.description}>
          <h1>I am an undergrad at UC Davis studying computer science and electrical engineering minor</h1>
        </div>
      </div>
    </div>
  );
}

export default About;
