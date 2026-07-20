import '../Projects/Timeline.css';
import './ExperienceTimeline.css';
import ExperienceTimeline from './ExperienceTimeline';
import { experienceList } from '../../data/experience';

export default function Experience() {
  return (
    <div className="projects-page experience-page">
      <div className="projects-eyebrow">TIMELINE</div>
      <h1 className="projects-title">
        Work <span className="projects-title-accent">&amp;</span>{" "}
        <span className="projects-title-serif">Experience</span>
      </h1>
      <p className="projects-lead">
        My work experience — Newest at the top, all the way back to my first job.
      </p>
      <ExperienceTimeline items={experienceList} />
    </div>
  );
}
