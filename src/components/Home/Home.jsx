import React from "react";

export const Home = () => {
  return (
    <div className="home__section" id="home">
      <div className="home__section-grid">
        <div className="home__section-content-left">
          <h1>
            Bienvenid@.
            <br />
            Me llamo Rodrigo y soy desarrollador{" "}
            <span className="gradient-text">Front-End</span>.
          </h1>
          <hr className="separator" />
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Autem vero
            eveniet quis aliquam cum vitae odit id aperiam unde sequi fuga
            mollitia at delectus.
          </p>
        </div>
        <div className="home__section-content-right">
          <div className="gradient-div"></div>
        </div>
      </div>
    </div>
  );
};
