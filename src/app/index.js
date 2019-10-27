import React from "react";
import { render } from "react-dom";
import image from "assets/img/men_0.jpg";
const App = () => (
    <div className="app">
        Hello from App component <img src={image} alt="" />
    </div>
);
export default render(<App />, document.getElementById("app"));
