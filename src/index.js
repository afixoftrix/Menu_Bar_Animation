import React from "react";
import { render } from "react-dom";
import { MenuBtn } from "./Bars";
import './style.css'

const styles = {
  fontFamily: "sans-serif",
  textAlign: "center"
};

const App = () => (
  <div style={styles}>
    <MenuBtn />
  </div>
);

render(<App />, document.getElementById("root"));
