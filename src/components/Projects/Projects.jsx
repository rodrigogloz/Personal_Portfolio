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
import logoNode from "../../assets/logos/node-logo.svg";
import logoFirebase from "../../assets/logos/firebase-logo.svg";
import { useIntersectionObserver } from "../../hooks/useIntersectionObserver";
import { faArrowUpRightFromSquare } from "@fortawesome/free-solid-svg-icons";
import { faGithub } from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export const Projects = () => {
  const options = {
    rootMargin: "120px",
    threshold: 1.0,
    target: ".Projects__section-grid",
  };

  const isIntersecting = useIntersectionObserver(options);

  useEffect(() => {
    const number = document.querySelector(".Projects__number");
    if (isIntersecting) {
      number.classList.add("active");
    } else {
      number.classList.remove("active");
    }
  }, [isIntersecting]);

  return (
    <>
      <section className="Projects__section" id="projects">
        <span className="gradient-div separator" />
        <div className="Projects__section-grid">
          <div className="Projects__section-content-left">
            <div className="project project1">
              <h2>To-Do App</h2>
              <ul>
                <li>
                  <img src={logoHTML} alt="HTML logo" aria-hidden="true" />
                </li>
                <li>
                  <img src={logoCSS} alt="CSS logo" aria-hidden="true" />
                </li>
                <li>
                  <img src={logoReact} alt="React logo" aria-hidden="true" />
                </li>
              </ul>
              <p>Aplicación de lista de tareas hecha con React.</p>
              <div className="project-links-container">
                <a href="/">
                  Ir al proyecto{" "}
                  <FontAwesomeIcon
                    icon={faArrowUpRightFromSquare}
                  ></FontAwesomeIcon>
                </a>
                <a href="/">
                  Ver código <FontAwesomeIcon icon={faGithub}></FontAwesomeIcon>
                </a>
              </div>
            </div>
            <div className="project project2">
              <h2>Gif Finder</h2>
              <ul>
                <li>
                  <img src={logoHTML} alt="HTML logo" aria-hidden="true" />
                </li>
                <li>
                  <img src={logoCSS} alt="CSS logo" aria-hidden="true" />
                </li>
                <li>
                  <img src={logoReact} alt="React logo" aria-hidden="true" />
                </li>
              </ul>
              <p>
                Aplicación de búsqueda de GIFs construída utilizando la API de
                Giphy
              </p>
              <div className="project-links-container">
                <a href="/">
                  Ir al proyecto{" "}
                  <FontAwesomeIcon
                    icon={faArrowUpRightFromSquare}
                  ></FontAwesomeIcon>
                </a>
                <a href="/">
                  Ver código <FontAwesomeIcon icon={faGithub}></FontAwesomeIcon>
                </a>
              </div>
            </div>
            <div className="project project3">
              <h2>Calendar App</h2>
              <ul>
                <li>
                  <img src={logoHTML} alt="HTML logo" aria-hidden="true" />
                </li>
                <li>
                  <img src={logoSass} alt="SASS logo" aria-hidden="true" />
                </li>
                <li>
                  <img
                    src={logoMongoDB}
                    alt="MongoDB logo"
                    aria-hidden="true"
                  />
                </li>
                <li>
                  <img src={logoReact} alt="React logo" aria-hidden="true" />
                </li>
                <li>
                  <img src={logoNode} alt="Node logo" aria-hidden="true" />
                </li>
              </ul>
              <p>
                Calendario desarrollado utilizando MERN stack (MongoDB, Express,
                React y Node).
              </p>
              <div className="project-links-container">
                <a href="/">
                  Ir al proyecto{" "}
                  <FontAwesomeIcon
                    icon={faArrowUpRightFromSquare}
                  ></FontAwesomeIcon>
                </a>
                <a href="/">
                  Ver código <FontAwesomeIcon icon={faGithub}></FontAwesomeIcon>
                </a>
              </div>
            </div>
            <div className="project project4">
              <h2>Web Personal</h2>
              <ul>
                <li>
                  <img src={logoHTML} alt="HTML logo" aria-hidden="true" />
                </li>
                <li>
                  <img src={logoSass} alt="SASS logo" aria-hidden="true" />
                </li>
                <li>
                  <img src={logoReact} alt="React logo" aria-hidden="true" />
                </li>
              </ul>
              <p>
                Acceso al código fuente de mi página web personal. Diseñada y
                construída desde cero con React.
              </p>
              <div className="project-links-container">
                <a href="/">
                  Ver código <FontAwesomeIcon icon={faGithub}></FontAwesomeIcon>
                </a>
              </div>
            </div>
          </div>
          <div className="Projects__section-content-right">
            <h2 className="big-number Projects__number" aria-hidden="true">
              03
            </h2>
            <h1>
              <span className="gradient-text">Portfolio</span>
            </h1>
            <p>
              Aquí encontrarás algunos de mis proyectos como desarrollador web.
            </p>
          </div>
        </div>
      </section>
    </>
  );
};
