import React, { useEffect, useRef } from "react";
import { ScrollIndicator } from "../Utils/ScrollIndicator";
import { DarkModeSwitch } from "../Utils/DarkModeSwitch";

export const Header = () => {
  const sections = document.querySelectorAll("section");
  const navLi = document.querySelectorAll(".Header__nav-a");

  useEffect(() => {
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

  return (
    <header>
      <div className="Header__nav-container">
        <ScrollIndicator />

        <nav className="Header__nav" ref={headerNavRef}>
          <a className="tag-logo font-subtitle gradient-text" href="#home">
            &lt; Rodrigo Gloz /&gt;
          </a>
          <ul className="Header__nav-ul">
            <li>
              <a
                href="#home"
                className="Header__nav-a hover-underline font-subtitle home"
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
              >
                <span aria-hidden="true" className="inter">
                  04
                </span>
                Contacto
              </a>
            </li>

            <DarkModeSwitch />
          </ul>
        </nav>
      </div>
    </header>
  );
};
