import React from "react";
import { ScrollIndicator } from "../Utils/ScrollIndicator";

export const Header = () => {
  return (
    <header>
      <div className="Header__top-bar">
        <div>Yese & wese</div>
        <div>Kiarton</div>
      </div>
      <section className="Header__nav-container">
        <ScrollIndicator />

        <nav className="Header__nav glass">
          <a className="tag-logo font-subtitle gradient-text" href="#home">
            &lt;/&gt;
          </a>
          <ul className="Header__nav-ul ">
            <li>
              <a
                href="#home"
                className="Header__nav-a hover-underline font-subtitle"
              >
                <span aria-hidden="true">00</span>
                Inicio
              </a>
            </li>
            <li>
              <a
                href="#about"
                className="Header__nav-a hover-underline font-subtitle"
              >
                <span aria-hidden="true">01</span>
                Sobre mí
              </a>
            </li>
            <li>
              <a
                href="#projects"
                className="Header__nav-a hover-underline font-subtitle"
              >
                <span aria-hidden="true">02</span>
                Proyectos
              </a>
            </li>
            <li>
              <a
                href="#contact"
                className="Header__nav-a hover-underline font-subtitle"
              >
                <span aria-hidden="true">03</span>
                Contacto
              </a>
            </li>
          </ul>
        </nav>
      </section>
    </header>
  );
};
