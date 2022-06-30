import React, { useRef } from "react";

export const Home = () => {
  const myRef = useRef();
  return (
    <section className="home__section" id="home" ref={myRef}>
      <div className="home__section-gradient">
        <div className="home__section-grid">
          <div className="home__section-content-left">
            <div>
              <h1 className="line-1">
                Bienvenid@. <span className="text-reveal-1 reveal"></span>{" "}
              </h1>{" "}
              <br />
              <h1 className="line-2">
                {" "}
                Me llamo Rodrigo, <span className="text-reveal-2 reveal"></span>
              </h1>{" "}
              <br />
              <h1 className="line-3">
                y soy desarrollador
                <span className="gradient-text line-gradient text-reveal-4">
                  {" "}
                  Front-End
                </span>
                . <span className="text-reveal-3 reveal"></span>
              </h1>
            </div>
            {/* <hr /> */}
            <p>
              <span className="home__fade-in home__line-1">
                En esta página encontrarás información sobre mí y sobre mis
                proyectos como desarrollador web.
              </span>
              <br />
              <span className="home__fade-in home__line-2">
                Para cualquier duda o solicitud, no dudes en{" "}
                <a href="/#contact" className="gradient-text">
                  contactarme
                </a>{" "}
                .
              </span>
            </p>
          </div>
          <div className="home__section-content-right"></div>
        </div>
      </div>

      <div className="transparent-div"></div>
    </section>
  );
};
