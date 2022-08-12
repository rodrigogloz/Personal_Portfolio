import React, { useEffect } from "react";
import logoHTML from "../../assets/logos/html-logo.svg";
import logoCSS from "../../assets/logos/css-logo.svg";
import logoSass from "../../assets/logos/sass-logo.svg";
import logoReact from "../../assets/logos/react-logo.svg";
import logoMongoDB from "../../assets/logos/mongodb-logo.svg";
import logoNode from "../../assets/logos/node-logo.svg";
import logoFormik from "../../assets/logos/formik.svg";
import { useIntersectionObserver } from "../../hooks/useIntersectionObserver";
import { faArrowUpRightFromSquare } from "@fortawesome/free-solid-svg-icons";
import { faGithub } from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export const Projects = () => {
  const options = {
    rootMargin: "50px",
    threshold: 1.0,
    target: ".projects-title",
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
      <section className="Projects__section section" id="projects">
        <span className="grey-white" />
        <div className="Projects__section-grid section-grid">
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
                <a
                  href="https://rodrigogloz.github.io/ToDo-App/"
                  target="_blank"
                >
                  Ir al proyecto{" "}
                  <FontAwesomeIcon
                    icon={faArrowUpRightFromSquare}
                  ></FontAwesomeIcon>
                </a>
                <a
                  href="https://github.com/rodrigogloz/ToDo-App"
                  target="_blank"
                >
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
                <a href="https://rodrigogloz.github.io/GifApp/" target="_blank">
                  Ir al proyecto{" "}
                  <FontAwesomeIcon
                    icon={faArrowUpRightFromSquare}
                  ></FontAwesomeIcon>
                </a>
                <a href="https://github.com/rodrigogloz/GifApp" target="_blank">
                  Ver código <FontAwesomeIcon icon={faGithub}></FontAwesomeIcon>
                </a>
              </div>
            </div>
            <div className="project project3">
              <h2>Calendar</h2>
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
                <li>
                  <img src={logoFormik} alt="Formik logo" aria-hidden="true" />
                </li>
              </ul>
              <p>
                Acceso al código fuente de mi página web personal. Diseñada y
                construída desde cero con React.
              </p>
              <div className="project-links-container">
                <a
                  href="https://github.com/rodrigogloz/Personal_Portfolio"
                  target="_blank"
                >
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
              <span className="gradient-text projects-title">Portfolio</span>
            </h1>
            <p>
              Aquí encontrarás algunos de mis proyectos como desarrollador web,
              con enlaces a los mismos y acceso al código fuente.
            </p>
            <div className="external-link-container">
              <a
                className="external-link"
                href="https://github.com/rodrigogloz"
                target="_blank"
              >
                GitHub <FontAwesomeIcon icon={faGithub}></FontAwesomeIcon>
              </a>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};
