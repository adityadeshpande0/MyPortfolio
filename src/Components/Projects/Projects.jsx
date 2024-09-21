import React from 'react';
import ProjectCard from '../../reusables/ProjectCard';
import './project-styles.css'

function Projects() {
  return (
    <div className="projects-container">
      <div className="projects-grid">
        <ProjectCard
          title="React Vs Code Style Portfolio"
          description="Personal portfolio in VS Code style"
          techStack="React, JavaScript, CSS"
          projectLink="https://github.com/adityadeshpande0/MyPortfolio"
        />
        <ProjectCard
          title="Interview Scheduler fullstack webapp"
          description="React Js Web Application Used to Scehdule Interviews"
          techStack="React, Javascript, NodeJs, MongoDB"
          projectLink="https://github.com/adityadeshpande0/interview-scheduler"
        />
      </div>
    </div>
  );
}

export default Projects;