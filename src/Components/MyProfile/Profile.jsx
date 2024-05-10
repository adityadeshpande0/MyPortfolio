import React from "react";

function Profile() {
  return (
    <div style={{width:'90%', display:'flex', alignItems:'center', flexDirection:'column'}} className="portfolio">
      <div className="portfolio-intro">
        <h1 className="portfolio-intro__heading">Welcome to my portfolio!</h1>
        <p className="portfolio-intro__text">
          I'm a passionate Front End Developer with over 2.5 years of experience
          in crafting exceptional digital experiences using React JS, React
          Native, and related technologies. My journey in the world of
          development began with a fascination for creating elegant and
          functional user interfaces, and it has only grown stronger since then.
        </p>
      </div>
      <div className="why-choose-me">
        <h2 className="why-choose-me__heading">Why Choose Me?</h2>
        <ul className="why-choose-me__list">
          <li className="why-choose-me__item">
            <strong className="why-choose-me__item-heading">Expertise:</strong>{" "}
            Proficient in React JS and React Native, I bring a wealth of
            knowledge and skills to any project, ensuring efficient
            problem-solving and top-notch results.
          </li>
          <li className="why-choose-me__item">
            <strong className="why-choose-me__item-heading">Passion:</strong>{" "}
            Driven by a genuine love for development, I invest my energy into
            every task, guaranteeing dedication and exceptional outcomes.
          </li>
          <li className="why-choose-me__item">
            <strong className="why-choose-me__item-heading">
              Collaboration:
            </strong>{" "}
            Valuing teamwork, I actively foster strong relationships with
            colleagues, contributing to a positive work environment and shared
            success.
          </li>
          <li className="why-choose-me__item">
            <strong className="why-choose-me__item-heading">Innovation:</strong>{" "}
            Committed to staying ahead of industry trends, I consistently
            deliver cutting-edge solutions that stand the test of time.
          </li>
        </ul>
      </div>
    </div>
  );
}

export default Profile;
