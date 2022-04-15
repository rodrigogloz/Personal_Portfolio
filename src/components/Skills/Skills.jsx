import React, { useEffect } from "react";
import { useIntersectionObserver } from "../../hooks/useIntersectionObserver";

export const Skills = () => {
  const options = {
    rootMargin: "0px",
    threshold: 1.0,
    target: ".Skills__section-grid",
  };

  const isIntersecting = useIntersectionObserver(options);

  useEffect(() => {
    const number = document.querySelector(".Skills__number");
    if (isIntersecting) {
      number.classList.add("active");
    } else {
      number.classList.remove("active");
    }
  }, [isIntersecting]);

  return (
    <>
      <div className="Skills__gradient-background"></div>
      <div className="Skills__section" id="skills">
        <span className="gradient-div separator" />
        <div className="Skills__section-grid">
          <div className="Skills__section-content-left">
            <h2 className="Skills__number">02</h2>
            <h1 className="gradient-text">Competencias</h1>

            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Autem
              vero eveniet quis aliquam cum vitae odit id aperiam unde sequi
              fuga mollitia at delectus, nostrum necessitatibus ex sunt amet
              perspiciatis.
            </p>
          </div>
          <div className="Skills__section-content-right"></div>
        </div>
      </div>
    </>
  );
};
