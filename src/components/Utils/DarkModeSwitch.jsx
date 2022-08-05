import React, { useRef, useState, useEffect } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSun, faMoon } from "@fortawesome/free-solid-svg-icons";

export const DarkModeSwitch = () => {
  const themeSwitch = useRef();
  const [theme, setTheme] = useState(localStorage.getItem("theme"));

  useEffect(() => {
    if (theme === "dark") {
      document.body.classList.add("dark");
    }
  }, []);

  const handleClick = () => {
    if (theme === "dark") {
      document.body.classList.remove("dark");
      setTheme("light");
      localStorage.setItem("theme", "light");
    } else {
      document.body.classList.add("dark");
      setTheme("dark");
      localStorage.setItem("theme", "dark");
    }
  };

  return (
    <button
      className={`themeSwitch ${theme === "dark" ? "dark" : ""}`}
      onClick={handleClick}
      ref={themeSwitch}
      aria-label="dark mode switch"
    >
      <span>
        <FontAwesomeIcon icon={faSun}></FontAwesomeIcon>
      </span>
      <span>
        <FontAwesomeIcon icon={faMoon}></FontAwesomeIcon>
      </span>
    </button>
  );
};
