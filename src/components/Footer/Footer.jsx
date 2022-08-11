import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub, faLinkedin } from "@fortawesome/free-brands-svg-icons";

export const Footer = () => {
  return (
    <div className="Footer__section">
      <div className="Footer__social">
        <a href="https://github.com/rodrigogloz" target="_blank">
          <FontAwesomeIcon icon={faGithub} />
        </a>
        <a href="https://www.linkedin.com/in/rodrigo-gloz/" target="_blank">
          <FontAwesomeIcon icon={faLinkedin} />
        </a>
      </div>
      <div className="Footer__terms">
        <a href="/">Política de privacidad</a>
        <a href="/">Uso de cookies</a>
      </div>
      <p className="Footer__copyright">© 2022 Rodrigo Ezequiel Gloz</p>
    </div>
  );
};
