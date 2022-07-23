import { faBars } from "@fortawesome/free-solid-svg-icons";
import { faXmark } from "@fortawesome/free-solid-svg-icons";
import React, { useEffect, useRef } from "react";
import { DarkModeSwitch } from "../Utils/DarkModeSwitch";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export const Header = () => {
  useEffect(() => {
    const sections = document.querySelectorAll("section");
    const navLi = document.querySelectorAll(".Header__nav-a");
    window.addEventListener("scroll", () => {
      let current;

      sections.forEach((section) => {
        const sectionTop = section.offsetTop;

        if (window.scrollY >= sectionTop - 150) {
          current = section.getAttribute("id");
        }
      });

      navLi.forEach((li) => {
        li.classList.remove("active");
        if (li.classList.contains(current)) {
          li.classList.add("active");
        }
      });
    });
  }, []);

  const headerNavRef = useRef();

  useEffect(() => {
    const headerNav = headerNavRef.current;
    window.onscroll = function () {
      handleGlass(headerNav);
    };
    const handleGlass = (headerNav) => {
      if (window.scrollY > 150) {
        headerNav.classList.add("glass");
      } else {
        headerNav.classList.remove("glass");
      }
    };
  }, []);

  const navToggle = useRef();

  const toggleNavbar = () => {
    const visibility = headerNavRef.current.getAttribute("data-visible");

    if (visibility === "false") {
      headerNavRef.current.setAttribute("data-visible", true);
      navToggle.current.setAttribute("area-expanded", true);
    } else {
      headerNavRef.current.setAttribute("data-visible", false);
      navToggle.current.setAttribute("area-expanded", false);
    }
  };

  const closeMobileNav = () => {
    const visibility = headerNavRef.current.getAttribute("data-visible");

    if (visibility === "true") {
      headerNavRef.current.setAttribute("data-visible", false);
    }
  };

  return (
    <header>
      <div
        className="Header__nav-elastic"
        ref={headerNavRef}
        data-visible="false"
      >
        <div className="Header__nav-container">
          <a className="tag-logo font-subtitle gradient-text" href="#home">
            &lt;<span className="large-name"> RodrigoGloz </span>/&gt;
          </a>

          <nav className="Header__nav">
            <ul className="Header__nav-ul" id="primary-navigation">
              <li>
                <a
                  href="#home"
                  className="Header__nav-a hover-underline font-subtitle home"
                  onClick={closeMobileNav}
                >
                  <span aria-hidden="true" className="inter">
                    00
                  </span>
                  Inicio
                </a>
              </li>
              <li>
                <a
                  href="#about"
                  className="Header__nav-a hover-underline font-subtitle about"
                  onClick={closeMobileNav}
                >
                  <span aria-hidden="true" className="inter">
                    01
                  </span>
                  Sobre mí
                </a>
              </li>
              <li>
                <a
                  href="#skills"
                  className="Header__nav-a hover-underline font-subtitle skills"
                  onClick={closeMobileNav}
                >
                  <span aria-hidden="true" className="inter">
                    02
                  </span>
                  Competencias
                </a>
              </li>
              <li>
                <a
                  href="#projects"
                  className="Header__nav-a hover-underline font-subtitle projects"
                  onClick={closeMobileNav}
                >
                  <span aria-hidden="true" className="inter">
                    03
                  </span>
                  Portfolio
                </a>
              </li>
              <li>
                <a
                  href="#contact"
                  className="Header__nav-a hover-underline font-subtitle contact"
                  onClick={closeMobileNav}
                >
                  <span aria-hidden="true" className="inter">
                    04
                  </span>
                  Contacto
                </a>
              </li>
            </ul>
          </nav>

          <DarkModeSwitch />
          <button
            className="mobile-nav-toggle"
            aria-controls="primary-navigation"
            aria-expanded="false"
            ref={navToggle}
            onClick={toggleNavbar}
          >
            <FontAwesomeIcon icon={faBars}></FontAwesomeIcon>
            <span className="sr-only">Menu</span>
          </button>
        </div>
      </div>
    </header>
  );
};
