import React from "react";

const Social = () => {
  return (
    <div className="home__social">
      <a
        href="https://instagram.com/"
        className="home__social-icon instagram"
        target="_blank"
      >
        <i class="uil uil-instagram"></i>
      </a>

      <a
        href="https://dribbble.com/"
        className="home__social-icon dribbble"
        target="_blank"
      >
        <i class="uil uil-dribbble"></i>
      </a>

      <a
        href="https://github.com/"
        className="home__social-icon  github"
        target="_blank"
      >
        <i class="uil uil-github"></i>
      </a>

      <a
        href="https://www.linkedin.com/"
        className="home__social-icon linkedin"
        target="_blank"
      >
        <i class="uil uil-linkedin"></i>
      </a>
    </div>
  );
};

export default Social;
