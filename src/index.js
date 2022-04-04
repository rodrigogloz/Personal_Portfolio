import React from "react";
import * as ReactDOM from "react-dom/client";
import { MainApp } from "./components/MainApp";
import "./styles/styles.scss";

const container = document.getElementById("root");

const root = ReactDOM.createRoot(container);

root.render(<MainApp />);
