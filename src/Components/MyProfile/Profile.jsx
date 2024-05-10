import React from "react";
import "./ProfileStyles.css";
function Profile() {
  const dataSkills = [
    {
      title: "Expertise",
      description:
        "Proficient in React JS and React Native, I bring a wealth of knowledge and skills to any project, ensuring efficient problem-solving and top-notch results.",
    },
    {
      title: "Passion",
      description:
        "Driven by a genuine love for development, I invest my energy into every task, guaranteeing dedication and exceptional outcomes.",
    },
    {
      title: "Collaboration",
      description:
        "Valuing teamwork, I actively foster strong relationships with colleagues, contributing to a positive work environment and shared success.",
    },
    {
      title: "Innovation",
      description:
        "Committed to staying ahead of industry trends, I consistently deliver cutting-edge solutions that stand the test of time.",
    },
  ];

  return (
    <div className="aboutme-container">
      <div className="portfolio-intro">
        <h2 className="portfolio-intro__heading">
          &lt;!--Welcome to my portfolio!--!&gt;
        </h2>
        <p className="portfolio-intro__text">
          &#47;&#47;&nbsp;I'm a passionate Front End Developer with over 2.5
          years of experience in crafting exceptional digital experiences using
          React JS, React Native, and related technologies. My journey in the
          world of development began with a fascination for creating elegant and
          functional user interfaces, and it has only grown stronger since then.
        </p>
      </div>
      <p className="skills-item">
        <span className="skill-functionheading">
          <span style={{ color: "#59C3C3" }}>const</span> WhyHireMe=
        </span>
        &#91;
      </p>
      {dataSkills.slice(0, 5).map((item, index) => (
        <p className="skills-item" key={index}>
          &nbsp;&nbsp;&#123;&nbsp;
          <strong style={{ color: "#FFD166" }}>
            <span style={{ color: "#a39c9c" }}>&quot;</span>
            {item.title}
            <span style={{ color: "#a39c9c" }}>&quot;:&quot;</span>
          </strong>
          {item.description}
          <span style={{ color: "#a39c9c" }}>&quot;</span>&nbsp;&#125;&nbsp;,
        </p>
      ))}
      <p className="skills-item">&#93;</p>
    </div>
  );
}

export default Profile;
