import github from '../images/github.svg';
import link from '../images/link.svg'


import { projects } from "../data/data";

import "../styles/project.css";
import Section from "./Section";

export default function Project() {
  const projectLenght = projects.length;
  console.log(projectLenght);

  return (
    <Section title="Project Lists">
      <ul className="div-projects">
        {projects.map((project) => (
          <li key={project.id} className="project-container">
            <img src={project.image} alt={project.name} />
            <h3>{project.name}</h3>
            <p>{project.Description}</p>
            <span className="project-link">
              <a href={project.URL}> <img src={link} alt="vlink image" width="20" height="20" className='light-svg' />Link</a>
              <a href={project.githubUrl}>
                 <img src={github} alt="github-Logo" width="20" height="20" className='light-svg' /> Github</a>
            </span>
          </li>
        ))}
      </ul>
    </Section>
  );
}
