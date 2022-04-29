import React from "react";

export const Home = () => {
  return (
    <section className="home__section" id="home">
      <div className="home__section-gradient">
        <div className="home__section-grid">
          <div className="home__section-content-left">
            <h1>
              Bienvenid@.
              <br />
              Me llamo Rodrigo,
              <br />y soy desarrollador
              <span className="gradient-text line"> Front-End</span>.
            </h1>
            {/* <hr /> */}
            <p>
              En esta página encontrarás información sobre mí y sobre mis
              proyectos como desarrollador web.
              <br />
              Para cualquier duda o solicitud, no dudes en contactarme.
            </p>
          </div>
          <div className="home__section-content-right"></div>
        </div>
      </div>

      <div className="transparent-div"></div>
    </section>
  );
};
