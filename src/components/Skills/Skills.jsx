import React, { useEffect } from "react";
import logoHTML from "../../assets/logos/html-logo.svg";
import logoCSS from "../../assets/logos/css-logo.svg";
import logoJS from "../../assets/logos/javascript-logo.svg";
import logoSass from "../../assets/logos/sass-logo.svg";
import logoReact from "../../assets/logos/react-logo.svg";
import logoRedux from "../../assets/logos/redux-logo.svg";
import logoGit from "../../assets/logos/git-logo.svg";
import logoGitHub from "../../assets/logos/github-logo.svg";
import logoLinux from "../../assets/logos/linux-logo.svg";
import logoVSCode from "../../assets/logos/vscode-logo.svg";
import logoNPM from "../../assets/logos/npm-logo.svg";
import logoJest from "../../assets/logos/jest-logo.svg";
import logoMongoDB from "../../assets/logos/mongodb-logo.svg";
import logoFirebase from "../../assets/logos/firebase-logo.svg";
import { useIntersectionObserver } from "../../hooks/useIntersectionObserver";

export const Skills = () => {
  const options = {
    rootMargin: "120px",
    threshold: 1.0,
    target: ".Skills__section-grid",
  };

  const isIntersecting = useIntersectionObserver(options);

  useEffect(() => {
    const number = document.querySelector(".Skills__number");
    if (isIntersecting) {
      number.classList.add("active");
    } else {
      number.classList.remove("active");
    }
  }, [isIntersecting]);

  return (
    <>
      <section className="Skills__section" id="skills">
        <span className="gradient-div separator" />
        <div className="Skills__section-grid">
          <div className="Skills__section-content-left">
            <h2 className="big-number Skills__number" aria-hidden="true">
              02
            </h2>
            <h1>
              <span className="gradient-text">Competencias</span>
            </h1>
            <p>
              Mis competencias profesionales, herramientas y lenguajes con los
              que desarrollo mis proyectos.
            </p>
          </div>
          <div className="Skills__section-content-right">
            <div class="slider">
              <div class="slide-track">
                <div class="slide">
                  <img src={logoHTML} alt="" />
                </div>
                <div class="slide">
                  <img src={logoCSS} alt="" />
                </div>
                <div class="slide">
                  <img src={logoJS} alt="" />
                </div>
                <div class="slide">
                  <img src={logoReact} alt="" />
                </div>
                <div class="slide">
                  <img src={logoRedux} alt="" />
                </div>
                <div class="slide">
                  <img src={logoSass} alt="" />
                </div>
                <div class="slide">
                  <img src={logoMongoDB} alt="" />
                </div>
                <div class="slide">
                  <img src={logoFirebase} alt="" />
                </div>
                <div class="slide">
                  <img src={logoVSCode} alt="" />
                </div>
                <div class="slide">
                  <img src={logoLinux} alt="" />
                </div>
                <div class="slide">
                  <img src={logoNPM} alt="" />
                </div>
                <div class="slide">
                  <img src={logoJest} alt="" />
                </div>
                <div class="slide">
                  <img src={logoGit} alt="" />
                </div>
                <div class="slide">
                  <img src={logoGitHub} alt="" />
                </div>
                <div class="slide">
                  <img src={logoHTML} alt="" />
                </div>
                <div class="slide">
                  <img src={logoCSS} alt="" />
                </div>
                <div class="slide">
                  <img src={logoJS} alt="" />
                </div>
                <div class="slide">
                  <img src={logoReact} alt="" />
                </div>
                <div class="slide">
                  <img src={logoRedux} alt="" />
                </div>
                <div class="slide">
                  <img src={logoSass} alt="" />
                </div>
                <div class="slide">
                  <img src={logoMongoDB} alt="" />
                </div>
                <div class="slide">
                  <img src={logoFirebase} alt="" />
                </div>
                <div class="slide">
                  <img src={logoVSCode} alt="" />
                </div>
                <div class="slide">
                  <img src={logoLinux} alt="" />
                </div>
                <div class="slide">
                  <img src={logoNPM} alt="" />
                </div>
                <div class="slide">
                  <img src={logoJest} alt="" />
                </div>
                <div class="slide">
                  <img src={logoGit} alt="" />
                </div>
                <div class="slide">
                  <img src={logoGitHub} alt="" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};
