import './Timeline.css';
import Timeline from './Timeline';

export default function Projects() {
  return (
    <div className="projects-page">
      <div className="projects-eyebrow">TIMELINE</div>
      <h1 className="projects-title">
        Projects <span className="projects-title-accent">&amp;</span>{" "}
        <span className="projects-title-serif">Experiments</span>
      </h1>
      <p className="projects-lead">
        My project timeline — Newest at the top, all the way back to my first iOS app.
      </p>
      <Timeline />
    </div>
  );
}
