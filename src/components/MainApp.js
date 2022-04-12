import React from "react";
import { ScrollIndicator } from "./Utils/ScrollIndicator";
import { Header } from "./Header/Header";
import { Home } from "./Home/Home";
import { About } from "./About/About";

export const MainApp = () => {
  return (
    <>
      <ScrollIndicator />
      <Header />
      <Home />
      <About />
    </>
  );
};
