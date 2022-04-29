import React, { useEffect } from "react";
import { useIntersectionObserver } from "../../hooks/useIntersectionObserver";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAnglesRight } from "@fortawesome/free-solid-svg-icons";

export const Projects = () => {
  const options = {
    rootMargin: "160px",
    threshold: 1.0,
    target: ".Projects__section-header",
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
          <div className="Projects__section-header">
            <h2 className="big-number Projects__number" aria-hidden="true">
              03
            </h2>
            <h1>
              <span className="gradient-text">Portfolio</span>
            </h1>
            <p>
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Repellat
              nesciunt exercitationem saepe est soluta similique adipisci?
              Veniam, natus iusto commodi aspernatur corrupti similique hic
              blanditiis.
            </p>
          </div>

          <div className="Projects__section-content">
            <div className="Projects__section-image"></div>
            <div className="Projects__section-description">
              <h2>Proyecto 1</h2>
              <p>
                Lorem, ipsum dolor sit amet consectetur adipisicing elit. Fugiat
                qui eum inventore molestiae magni id cumque, fuga quos nesciunt
                reprehenderit quas perspiciatis mollitia.
              </p>
              <div className="card-buttons">
                <button>
                  Ir al proyecto {` `}
                  <FontAwesomeIcon icon={faAnglesRight}></FontAwesomeIcon>
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};
