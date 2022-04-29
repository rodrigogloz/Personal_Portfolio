import React, { useRef, useState, useEffect } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSun, faMoon } from "@fortawesome/free-solid-svg-icons";

export const DarkModeSwitch = () => {
  const [activeButton, setActiveButton] = useState(true);
  const themeSwitch = useRef();

  let theme;

  if (localStorage) {
    theme = localStorage.getItem("theme");
  }

  if (theme === undefined || theme === "dark") {
    document.body.classList.add(theme);
  }

  const handleClick = () => {
    const darkMode = themeSwitch.current;
    document.body.classList.toggle("dark");
    setActiveButton(!activeButton);

    if (activeButton === true) {
      darkMode.classList.add("active");
      localStorage.setItem("theme", "dark");
    } else {
      darkMode.classList.remove("active");
      localStorage.setItem("theme", "light");
    }
  };

  return (
    <button className="themeSwitch" onClick={handleClick} ref={themeSwitch}>
      <span>
        <FontAwesomeIcon icon={faSun}></FontAwesomeIcon>
      </span>
      <span>
        <FontAwesomeIcon icon={faMoon}></FontAwesomeIcon>
      </span>
    </button>
  );
};
