import React from 'react';
import './Projects.css';

function Projects() {
  const projectsData = [
    {
      name: 'Chromatik',
      url: 'https://jomoslomo.github.io/dmae/public/index.html',
    },
    {
      name: 'Stock Sim',
      url: 'https://jomoslomo.github.io/stocksim/index.html',
    },
    {
      name: 'Sound 2 Plants',
      url: 'https://jomoslomo.github.io/s2pv1/s2p/p5rg/index.html',
    },
    {
      name: 'Jake The Dog',
      url: 'https://jomoslomo.github.io/jakethedog/index.html',
    },
    {
      name: 'Ascii Portrait',
      url: 'https://jomoslomo.github.io/asciiportrait/index.html',
    },
    {
      name: 'Self Portrait',
      url: 'https://jomoslomo.github.io/self-portrait/index.html',
    },
  ];

  return (
    <div>
      <h1>Here's some cool stuff I've made...</h1>
      <ul className="projects-list">
        {projectsData.map((project, index) => (
          <li className="project" key={index}>
            <div className="project-link">
              {/* Update the <a> tag here */}
              <a href={project.url} target="_blank" rel="noopener noreferrer">{project.name}</a>
            </div>
            {/* Consider if you also want the iframe to load a site in a new tab, which is not standard behavior */}
            <div className="project-iframe">
              <iframe src={project.url} title={project.name}></iframe>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Projects;
