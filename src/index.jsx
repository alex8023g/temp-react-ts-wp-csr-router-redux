import React from "react";
import ReactDom from "react-dom";
import { App } from "./App.tsx";

window.addEventListener("load", () => {
  ReactDom.render(<App />, document.getElementById("react_root"));
});
