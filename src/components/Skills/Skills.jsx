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
    rootMargin: "50px",
    threshold: 1.0,
    target: ".skills-title",
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
      <section className="Skills__section section" id="skills">
        <span className="white-grey" />
        <div className="Skills__section-grid section-grid">
          <div className="Skills__section-content-left">
            <h2 className="big-number Skills__number" aria-hidden="true">
              02
            </h2>
            <h1>
              <span className="gradient-text skills-title">Competencias</span>
            </h1>
            <p>
              Mis competencias profesionales, herramientas y lenguajes de
              programación con los que desarrollo mis proyectos.
            </p>
          </div>
          <div className="Skills__section-content-right">
            <p>
              Principalmente mis competencias se centran en el desarrollo
              Front-End, siendo mis herramientas principales HTML, CSS y
              JavaScript con ReactJS.
              <br />
              <br />
              También poseo conocimientos en Firebase, gestión de dependencias
              mediante NPM, control de versiones mediante Git, testing con Jest
              o manejo de preprocesadores como SASS, entre otras herramientas.
              <br />
              <br />
              Actualmente me encuentro ampliando mis conocimientos en React,
              aprendiendo nuevos Frameworks dentro del mismo como Next.js.
              <br />
              <br />A continuación encontrarás una lista de las principales
              herramientas con las que he trabajado hasta la fecha:
            </p>
            <div className="slider">
              <div className="slide-track">
                <div className="slide">
                  <img src={logoHTML} alt="HTML logo" aria-hidden="true" />
                  <p>HTML</p>
                </div>
                <div className="slide">
                  <img src={logoCSS} alt="CSS logo" aria-hidden="true" />
                  <p>CSS</p>
                </div>
                <div className="slide">
                  <img src={logoJS} alt="JavaScript logo" aria-hidden="true" />
                  <p>JavaScript</p>
                </div>
                <div className="slide">
                  <img src={logoReact} alt="React logo" aria-hidden="true" />
                  <p>React</p>
                </div>
                <div className="slide">
                  <img src={logoRedux} alt="Redux logo" aria-hidden="true" />
                  <p>Redux</p>
                </div>
                <div className="slide">
                  <img src={logoSass} alt="SASS logo" aria-hidden="true" />
                  <p>SASS</p>
                </div>
                <div className="slide">
                  <img
                    src={logoMongoDB}
                    alt="MongoDB logo"
                    aria-hidden="true"
                  />
                  <p>MongoDB</p>
                </div>
                <div className="slide">
                  <img
                    src={logoFirebase}
                    alt="Firebase logo"
                    aria-hidden="true"
                  />
                  <p>Firebase</p>
                </div>
                <div className="slide">
                  <img src={logoVSCode} alt="VSCode logo" aria-hidden="true" />
                  <p>VS Code</p>
                </div>
                <div className="slide">
                  <img src={logoLinux} alt="Linux logo" aria-hidden="true" />
                  <p>Linux</p>
                </div>
                <div className="slide">
                  <img src={logoNPM} alt="NPM logo" aria-hidden="true" />
                  <p>NPM</p>
                </div>
                <div className="slide">
                  <img src={logoJest} alt="Jest logo" aria-hidden="true" />
                  <p>Jest</p>
                </div>
                <div className="slide">
                  <img src={logoGit} alt="Git logo" aria-hidden="true" />
                  <p>Git</p>
                </div>
                <div className="slide">
                  <img
                    src={logoGitHub}
                    alt="GitHub logo"
                    className="logoGitHub"
                    aria-hidden="true"
                  />
                  <p>GitHub</p>
                </div>
                <div className="slide">
                  <img src={logoHTML} alt="HTML logo" aria-hidden="true" />
                  <p>HTML</p>
                </div>
                <div className="slide">
                  <img src={logoCSS} alt="CSS logo" aria-hidden="true" />
                  <p>CSS</p>
                </div>
                <div className="slide">
                  <img src={logoJS} alt="JavaScript logo" aria-hidden="true" />
                  <p>JavaScript</p>
                </div>
                <div className="slide">
                  <img src={logoReact} alt="React logo" aria-hidden="true" />
                  <p>React</p>
                </div>
                <div className="slide">
                  <img src={logoRedux} alt="Redux logo" aria-hidden="true" />
                  <p>Redux</p>
                </div>
                <div className="slide">
                  <img src={logoSass} alt="SASS logo" aria-hidden="true" />
                  <p>SASS</p>
                </div>
                <div className="slide">
                  <img
                    src={logoMongoDB}
                    alt="MongoDB logo"
                    aria-hidden="true"
                  />
                  <p>MongoDB</p>
                </div>
                <div className="slide">
                  <img
                    src={logoFirebase}
                    alt="Firebase logo"
                    aria-hidden="true"
                  />
                  <p>Firebase</p>
                </div>
                <div className="slide">
                  <img src={logoVSCode} alt="VSCode logo" aria-hidden="true" />
                  <p>VS Code</p>
                </div>
                <div className="slide">
                  <img src={logoLinux} alt="Linux logo" aria-hidden="true" />
                  <p>Linux</p>
                </div>
                <div className="slide">
                  <img src={logoNPM} alt="NPM logo" aria-hidden="true" />
                  <p>NPM</p>
                </div>
                <div className="slide">
                  <img src={logoJest} alt="Jest logo" aria-hidden="true" />
                  <p>Jest</p>
                </div>
                <div className="slide">
                  <img src={logoGit} alt="Git logo" aria-hidden="true" />
                  <p>Git</p>
                </div>
                <div className="slide">
                  <img
                    src={logoGitHub}
                    alt="GitHub logo"
                    className="logoGitHub"
                    aria-hidden="true"
                  />
                  <p>GitHub</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};
