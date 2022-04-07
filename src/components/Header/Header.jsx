import React from "react";

export const Header = () => {
  return (
    <header>
      <section className="header__nav-container">
        <nav className="header__nav glass">
          <span className="tag-logo font-subtitle">&lt;/&gt;</span>
          <ul className="header__nav-ul ">
            <li>
              <a
                href="#home"
                className="header__nav-a hover-underline font-subtitle"
              >
                <span aria-hidden="true">00</span>Inicio
              </a>
            </li>
            <li>
              <a
                href="#about"
                className="header__nav-a hover-underline font-subtitle"
              >
                <span aria-hidden="true">01</span>Sobre mí
              </a>
            </li>
            <li>
              <a
                href="#projects"
                className="header__nav-a hover-underline font-subtitle"
              >
                <span aria-hidden="true">02</span>Proyectos
              </a>
            </li>
            <li>
              <a
                href="#contact"
                className="header__nav-a hover-underline font-subtitle"
              >
                <span aria-hidden="true">03</span>Contacto
              </a>
            </li>
          </ul>
        </nav>
      </section>
    </header>
  );
};
