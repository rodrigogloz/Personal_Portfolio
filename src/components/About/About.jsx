import React, { useEffect } from "react";
import { useIntersectionObserver } from "../../hooks/useIntersectionObserver";
import { faArrowUpRightFromSquare } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export const About = () => {
  const options = {
    rootMargin: "50px",
    threshold: 1.0,
    target: ".about-title",
  };

  const isIntersecting = useIntersectionObserver(options);

  useEffect(() => {
    const number = document.querySelector(".About__number");
    if (isIntersecting) {
      number.classList.add("active");
    } else {
      number.classList.remove("active");
    }
  }, [isIntersecting]);

  return (
    <>
      <section className="About__section section" id="about">
        <span className="gradient-div separator" />
        <div className="About__section-grid section-grid">
          <div className="About__section-content-left">
            <p>
              Mi nombre es Rodrigo y actualmente resido en Galicia, donde he
              pasado casi toda mi vida, aunque también he residido varios años
              en la ciudad de Barcelona. Allí tomé la decisión de emprender mi
              camino como programador de forma autodidacta, en plataformas como{" "}
              <a
                href="https://platzi.com/"
                className="gradient-text"
                target="_blank"
              >
                Platzi
              </a>{" "}
              y también en{" "}
              <a
                href="https://www.udemy.com/"
                className="gradient-text"
                target="_blank"
              >
                Udemy
              </a>
              .
              <br /> <br />
              Siempre he tenido especial interés por el funcionamiento de las
              tecnologías y por los sistemas lógicos en general. Esto, así como
              mi interés por lo visual y lo estético, me ha llevado a optar por
              la vía del desarrollo Front-End.
              <br /> <br />
              Fuera del mundo del código, disfruto de la interpretación musical,
              el arte, el cine y también los videojuegos.
              <br /> <br />
              Me considero una persona honesta y comprometida, a la que le
              gustan los retos y que disfruta de trabajar en un ambiente
              positivo y de constante aprendizaje.
            </p>
          </div>
          <div className="About__section-content-right">
            <h2 className="big-number About__number" aria-hidden="true">
              01
            </h2>
            <h1>
              <span className="gradient-text about-title">Sobre mí</span>
            </h1>
            <p>
              Una pequeña introducción con datos de interés sobre mi persona, mi
              background y mi perfil profesional.
            </p>
            <div className="external-link-container">
              <a
                className="external-link"
                href="https://www.linkedin.com/in/rodrigo-gloz/"
                target="_blank"
              >
                Accede a mi CV{" "}
                <FontAwesomeIcon
                  icon={faArrowUpRightFromSquare}
                ></FontAwesomeIcon>
              </a>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};
