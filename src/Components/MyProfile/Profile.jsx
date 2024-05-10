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
      title: "Expertise",
      description:
        "Proficient in React JS and React Native, I bring a wealth of knowledge and skills to any project, ensuring efficient problem-solving and top-notch results.",
    },
    {
      title: "Expertise",
      description:
        "Proficient in React JS and React Native, I bring a wealth of knowledge and skills to any project, ensuring efficient problem-solving and top-notch results.",
    },
    {
      title: "Expertise",
      description:
        "Proficient in React JS and React Native, I bring a wealth of knowledge and skills to any project, ensuring efficient problem-solving and top-notch results.",
    },
  ];

  return (
    <div className="socials-container">
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
      <p className="socials-item">
        <span className="socials">const WhyHireMe ()=&gt; </span> &#91;
      </p>
      {dataSkills.slice(0, 5).map((item, index) => (
        <p className="socials-item" key={index}>
          &nbsp;&nbsp;&#123;&nbsp;
          <strong>&quot;{item.title}&quot; : &quot;</strong>
          {item.description}&quot;&#125;
        </p>
      ))}
      <p className="socials-item">&#93;</p>
    </div>
  );
}

export default Profile;
