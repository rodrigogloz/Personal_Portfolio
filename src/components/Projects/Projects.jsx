import React, { useEffect } from "react";
import { useIntersectionObserver } from "../../hooks/useIntersectionObserver";

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
          <div className="Projects__section-content-left"></div>
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
