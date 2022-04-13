import React from "react";
import { ScrollIndicator } from "./Utils/ScrollIndicator";
import { Header } from "./Header/Header";
import { Home } from "./Home/Home";
import { About } from "./About/About";
import { Projects } from "./Projects/Projects";
import { Contact } from "./Contact/Contact";
import { Footer } from "./Footer/Footer";

export const MainApp = () => {
  return (
    <>
      <ScrollIndicator />
      <Header />
      <Home />
      <About />
      <Projects />
      <Contact />
      <Footer />
    </>
  );
};
