import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub, faLinkedin } from "@fortawesome/free-brands-svg-icons";

export const Social = () => {
  return (
    <ul className="Social">
      <li>
        <a href="https://github.com/rodrigogloz" className="Social__icon">
          <FontAwesomeIcon icon={faGithub} />
        </a>
      </li>
      <li>
        <a
          href="https://www.linkedin.com/in/rodrigo-gloz/"
          className="Social__icon"
        >
          <FontAwesomeIcon icon={faLinkedin} />
        </a>
      </li>
    </ul>
  );
};
