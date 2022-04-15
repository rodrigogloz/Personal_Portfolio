import React from "react";
import { Header } from "./Header/Header";
import { Home } from "./Home/Home";
import { About } from "./About/About";
import { Skills } from "./Skills/Skills";
import { Projects } from "./Projects/Projects";
import { Contact } from "./Contact/Contact";
import { Footer } from "./Footer/Footer";

export const MainApp = () => {
  return (
    <>
      <Header />
      <Home />
      <About />
      <Skills />
      <Projects />
      <Contact />
      <Footer />
    </>
  );
};
