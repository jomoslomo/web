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
      title: 'Research Assistant, Part-time, Aug 2023 - Present',
      videoUrl: '/lunarBot.mp4',
      description: 'As an undergraduate Researcher in collaboration between the LSU Construction Management and Computer Science Departments, my work revolves around leveraging the capabilities of Unreal Engine and Meta Quest to revolutionize space construction training. With funding from the NSF, I am at the forefront of preparing construction professionals for extraterrestrial challenges.'
    },
    {
      name: 'Self-Sensing Materials',
      title: 'Research Assistant, May 2023 - Present',
      has3DModel: false,
      imageUrl: '/concreteLab.png', 
      description: 'In my role as a Research Assistant at LSU’s Civil and Environmental Engineering Department, I collaborate with a team of engineers on a project focused on deciphering the mechanism of self-sensing cementitious composites. Utilizing a data-driven approach, we explore the use of electrically conductive materials for monitoring purposes in concrete structures.'
    },
    {
      name: 'NASA Digital Twin Project',
      title: 'Project Intern, May 2023 - Aug 2023',
      videoUrl: '/roboticArm.mp4',
      has3DModel: false,
      description: 'As a Project Intern at NASA, I had a pivotal role in the development of a digital twin project focused on the Michoud Assembly Facility. Within this project, my primary responsibility was to design and implement a control flow using VR and AR technologies to operate a uFactory xArm. This involved establishing web socket connections to link the xArm SDK with an Unreal Engine program.'
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
            {project.name}: {project.title}
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
            {selectedProject.title && <p>{selectedProject.title}</p>}
            {selectedProject.videoUrl ? (
              <div className="video-container">
                <video width={selectedProject.videoUrl.includes('lunarBot') ? '40%' : '80%'} controls>
                  <source src={selectedProject.videoUrl} type="video/mp4" />
                  Your browser does not support the video tag.
                </video>
              </div>
            ) : null}
                   {/* Image */}
                   {selectedProject.imageUrl && (
  <div className="image-container">
    <img src={selectedProject.imageUrl} alt={selectedProject.name} className="project-image" />
  </div>
)}
            {/* Description */}
            {selectedProject.description && <p>{selectedProject.description}</p>}
     

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