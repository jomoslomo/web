import React from 'react';
import './Projects.css';

function Projects() {
  return (
    <div>
      <h1>Here's some cool stuff I've made...</h1>
      <ul>
        <li>
          <div className="project-link">
            <a href="https://jomoslomo.github.io/dmae/public/index.html">Chromatik</a>
          </div>
          <div className="project-iframe">
            <iframe src="https://jomoslomo.github.io/dmae/public/" title="Chromatik"></iframe>
          </div>
        </li>
        <li>
          <div className="project-link">
            <a href="https://stocksim.duckdns.org">Stock Sim</a>
          </div>
          <div className="project-iframe">
            <iframe src="https://stocksim.duckdns.org" title="Stock Sim"></iframe>
          </div>
        </li>
        <li>
          <div className="project-link">
            <a href="https://jomoslomo.github.io/s2pv1/s2p/p5rg/index.html">Sound 2 Plants </a>
          </div>
          <div className="project-iframe">
            <iframe src="https://jomoslomo.github.io/s2pv1/s2p/p5rg/" title="Sound 2 Plants"></iframe>
          </div>
        </li>
      </ul>
    </div>
  );
}

export default Projects;
