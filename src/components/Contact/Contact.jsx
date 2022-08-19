import React, { useEffect } from "react";
import { useIntersectionObserver } from "../../hooks/useIntersectionObserver";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLinkedin } from "@fortawesome/free-brands-svg-icons";
import { ContactForm } from "./ContactForm.tsx";

export const Contact = () => {
  const options = {
    rootMargin: "50px",
    threshold: 1.0,
    target: ".contact-title",
  };

  const isIntersecting = useIntersectionObserver(options);

  useEffect(() => {
    const number = document.querySelector(".Contact__number");
    if (isIntersecting) {
      number.classList.add("active");
    } else {
      number.classList.remove("active");
    }
  }, [isIntersecting]);

  return (
    <>
      <section className="Contact__section section" id="contact">
        <span className="white-grey" />
        <div className="Contact__section-grid section-grid">
          <div className="Contact__section-content-left">
            <h2 className="big-number Contact__number" aria-hidden="true">
              04
            </h2>
            <h1>
              <span className="gradient-text contact-title">Contacto</span>
            </h1>
            <p>
              Para cualquier consulta, contáctame a través del siguiente
              formulario o mediante mi perfil de Linkedin.
            </p>
            <p className="has-error">
              Formulario temporalmente deshabilitado. Por favor, contactar
              mediante Linkedin.
            </p>
            <div className="external-link-container">
              <a
                className="external-link"
                href="https://www.linkedin.com/in/rodrigo-gloz/"
                target="_blank"
              >
                Linkedin <FontAwesomeIcon icon={faLinkedin}></FontAwesomeIcon>
              </a>
            </div>
          </div>
          <div className="Contact__section-content-right">
            <div className="Contact__section-form-container">
              <ContactForm />
            </div>
          </div>
        </div>
      </section>
    </>
  );
};
