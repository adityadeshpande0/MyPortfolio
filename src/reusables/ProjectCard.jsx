import React from "react";
import "./projectcard-styles.css";

function ProjectCard({ title, description, techStack, projectLink }) {
  return (
    <div className="project-card">
      <div className="project-card-body">
        <span className="project-card-title">{title}</span>
        <p className="project-card-description">{description}</p>
        <p className="project-card-techStack">
          <strong>Tech Stack:</strong> {techStack}
        </p>
        <a
          href={projectLink}
          target="_blank"
          rel="noopener noreferrer"
          className="home-button"
        >
          View Project
        </a>
      </div>
    </div>
  );
}

export default ProjectCard;
