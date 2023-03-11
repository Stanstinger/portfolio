import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";

const Data = () => {
  return (
    <div className="home__data">
      <div className="profile-info">
        <h1 className="home__title">Front-End Developer</h1>
        <h3 className="home__greeting">Hello, I'm</h3>
        <h3 className="home__subtitle">Stanley Njuguna</h3>
        <p className="home__description">
          I'm a Frontend Developer, with high proficiency in web design and
          development, producing quality work and dedicated to my work.
        </p>

        <a href="#contact" className="button button--flex">
          Contact Me
          <FontAwesomeIcon className="msg-icon" icon={faEnvelope} />
        </a>
      </div>
    </div>
  );
};

export default Data;
