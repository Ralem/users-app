import React from "react";
import { render } from "react-dom";
import image from "assets/img/men_0.jpg";
const App = () => {
    const test = async () => {
        console.log("hi");
    };
    return (
        <div className="app" onClick={test}>
            Hello from App component <img src={image} alt="" />
        </div>
    );
};
App.displayName = "App";
export default render(<App />, document.getElementById("app"));
