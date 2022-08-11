import React, { useRef } from "react";

export const HamburgerMenu = ({ navRef }) => {
  const navToggle = useRef();
  const toggleNavbar = () => {
    const menu = document.querySelector(".hamburger-menu-button");
    menu.classList.toggle("open");

    const visibility = navRef.current.getAttribute("data-visible");

    if (visibility === "false") {
      navRef.current.setAttribute("data-visible", true);
      navToggle.current.setAttribute("aria-expanded", true);
    } else {
      navRef.current.setAttribute("data-visible", false);
      navToggle.current.setAttribute("aria-expanded", false);
    }
  };

  return (
    <div
      className="hamburger-menu-button"
      onClick={toggleNavbar}
      ref={navToggle}
      aria-expanded="false"
      aria-controls="primary-navigation"
    >
      <span></span>
      <span></span>
      <span></span>
      <span></span>
    </div>
  );
};
