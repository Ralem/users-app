import React from "react";
import { render } from "react-dom";
import image from "assets/img/men_0.jpg";
import Api from "src/utils/Api";
const App = () => {
    const test = async () => {
        const request = await Api.getMultipleUsers();
        console.log(request);
    };
    return (
        <div className="app" onClick={test}>
            Hello from App component <img src={image} alt="" />
        </div>
    );
};
App.displayName = "App";
export default render(<App />, document.getElementById("app"));
