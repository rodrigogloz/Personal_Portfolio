import React, { useEffect } from "react";
import { useIntersectionObserver } from "../../hooks/useIntersectionObserver";

export const Contact = () => {
  const options = {
    rootMargin: "120px",
    threshold: 1.0,
    target: ".Contact__number",
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

  const handleSubmit = (e) => {
    e.preventDefault();
  };

  return (
    <>
      <section className="Contact__section" id="contact">
        <span className="white-grey" />
        <div className="Contact__section-grid section-grid">
          <div className="Contact__section-content-left">
            <h2 className="big-number Contact__number" aria-hidden="true">
              04
            </h2>
            <h1>
              <span className="gradient-text">Contacto</span>
            </h1>
            <p>
              Contáctame mediante el siguiente formulario y contestaré tan
              pronto como sea posible.
            </p>
          </div>
          <div className="Contact__section-content-right">
            <div className="Contact__section-form-container">
              <form autoComplete="none" action="">
                <input
                  autoComplete="none"
                  type="text"
                  name="name"
                  className="glass"
                  placeholder="Nombre"
                />
                <input
                  autoComplete="none"
                  type="email"
                  name="email"
                  className="glass"
                  placeholder="Correo electrónico"
                />
                <input
                  autoComplete="none"
                  type="subject"
                  name="subject"
                  className="glass"
                  placeholder="Asunto"
                />
                <textarea
                  name="message"
                  cols="30"
                  rows="8"
                  className="glass form-message"
                  placeholder="Escribe aquí tu mensaje"
                />
                <div className="form-bottom">
                  <div>
                    {/* <p>
                      <span>*</span> campo requerido
                    </p> */}
                  </div>
                  <input
                    // className="gradient-div"
                    type="submit"
                    value="Enviar mensaje"
                    onClick={handleSubmit}
                  />
                </div>
              </form>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};
