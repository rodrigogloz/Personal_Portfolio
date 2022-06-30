import React, { useRef } from "react";
import { Header } from "./Header/Header";
import { Home } from "./Home/Home";
import { About } from "./About/About";
import { Skills } from "./Skills/Skills";
import { Projects } from "./Projects/Projects";
import { Contact } from "./Contact/Contact";
import { Footer } from "./Footer/Footer";
import { Social } from "./Utils/Social";

export const MainApp = () => {
  const myRef = useRef();
  return (
    <>
      <div className="container" ref={myRef}>
        <Header referencia={myRef} />
        <Social />
        <Home />
        <About />
        <Skills />
        <Projects />
        <Contact />
        <Footer />
      </div>
    </>
  );
};
