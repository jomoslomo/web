import React, { useState } from 'react';
import './Research.css'; // Import your CSS file
import ThreeDModelScene from './ThreeDModelScene'; // Import the ThreeDModelScene component

function Research() {
  const [showModal, setShowModal] = useState(false);
  const [modalContent, setModalContent] = useState(null);
  const [selectedProject, setSelectedProject] = useState(null);
  const [renderScene, setRenderScene] = useState(false); // State to control rendering of the 3D scene

  const projectsData = [
    {
        name: 'Extraterrestrial Construction',
        description: 'Research Assistant, Part-time, Aug 2023 - Present',
        videoUrl: '/lunarBot.mp4',
      },
    {
      name: 'Self-Sensing Materials',
      description: 'Research Assistant, May 2023 - Present',
      has3DModel: true,
    },
    {
      name: 'NASA Digital Twin',
      description: 'Project Intern, May 2023 - Aug 2023',
      videoUrl: '/roboticArm.mp4',
      has3DModel: false,
    },
    // Add more ongoing projects as needed
  ];

  const openModal = (content) => {
    setSelectedProject(content);
    setShowModal(true);
  };

  const closeModal = () => {
    setSelectedProject(null);
    setShowModal(false);
    setRenderScene(false); // Reset render scene state when closing the modal
  };

  const render3DScene = () => {
    setRenderScene(true);
  };

  return (
    <div className="research-container">
      <h1>Research Page</h1>
      <p>
        Welcome to my research page. This is where I share information about my ongoing research projects, findings, and publications.
      </p>
      <h2>Ongoing Projects</h2>
      <ul>
        {projectsData.map((project, index) => (
          <li key={index}>
            {project.name}: {project.description}
            <button onClick={() => openModal(project)}>More Info</button>
          </li>
        ))}
      </ul>

      {/* Modal */}
      {showModal && selectedProject && (
        <div className="modal-overlay">
          <div className="modal">
            <span className="close" onClick={closeModal}>&times;</span>
            {selectedProject.name && <h2>{selectedProject.name}</h2>}
            {selectedProject.description && <p>{selectedProject.description}</p>}
            {selectedProject.videoUrl ? (
              <div className="video-container">
    <video width={selectedProject.videoUrl.includes('lunarBot') ? '50%' : '80%'} controls>                  
    <source src={selectedProject.videoUrl} type="video/mp4" />
                  Your browser does not support the video tag.
                </video>
              </div>
            ) : null}
            {/* Add more fields as needed */}
            {selectedProject.has3DModel ? (
              <div className="model-container">
                {renderScene ? (
                  <ThreeDModelScene />
                ) : (
                  <button onClick={render3DScene}>Render Scene</button>
                )}
              </div>
            ) : null}
          </div>
        </div>
      )}
    </div>
  );
}

export default Research;
