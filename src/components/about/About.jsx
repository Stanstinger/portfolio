import React from "react";
import "./about.css";
import AboutImg from "../../assets/stanley.jpg";
import CV from "../../assets/STANLEY NJUGUNA NJUKI  CV.pdf";
import Info from "./Info";

const About = () => {
  return (
    <section className="about section" id="about">
      <h2 className="section__title">About Me</h2>
      <span className="section__subtitle">My Introduction</span>

      <div className="about__container container grid">
        <img src={AboutImg} alt="" className="about__img" />

        <div className="about__data">
          <Info />
          <p className="about__description">
            Front-End developer, with extensive experience in designing and
            developing user interfaces that are visually appealing,
            user-friendly, and optimized for performance. I have experience
            building responsive web applications using HTML, CSS, and
            JavaScript. I am proficient in React front-end framework.
          </p>

          <a download="" href={CV} className="button button--flex">
            Download CV
            <i class="uil uil-file-download-alt"></i>
          </a>
        </div>
      </div>
    </section>
  );
};

export default About;
