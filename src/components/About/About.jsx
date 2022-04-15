import React from "react";

export const About = () => {
  return (
    <>
      <div className="About__gradient-background"></div>
      <div className="About__section" id="about">
        <span className="gradient-div separator" />
        <div className="About__section-grid">
          <div className="About__section-content-left">
            <h1 className="gradient-text">Sobre mí</h1>
            <hr />
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Autem
              vero eveniet quis aliquam cum vitae odit id aperiam unde sequi
              fuga mollitia at delectus, nostrum necessitatibus ex sunt amet
              perspiciatis.
            </p>
          </div>
          <div className="About__section-content-right"></div>
        </div>
      </div>
    </>
  );
};
