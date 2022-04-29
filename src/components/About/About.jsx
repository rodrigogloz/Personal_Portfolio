import React, { useEffect } from "react";
import { useIntersectionObserver } from "../../hooks/useIntersectionObserver";

export const About = () => {
  const options = {
    rootMargin: "120px",
    threshold: 1.0,
    target: ".About__section-grid",
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
      <section className="About__section" id="about">
        <span className="gradient-div separator" />
        <div className="About__section-grid">
          <div className="About__section-content-left">
            <h2 className="big-number About__number" aria-hidden="true">
              01
            </h2>
            <h1>
              <span className="gradient-text">Sobre mí</span>
            </h1>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Autem
              vero eveniet quis aliquam cum vitae odit id aperiam unde sequi
              fuga mollitia at delectus, nostrum necessitatibus ex sunt amet
              perspiciatis.
            </p>
          </div>
          <div className="About__section-content-right"></div>
        </div>
      </section>
    </>
  );
};
