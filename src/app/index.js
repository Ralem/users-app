import React from "react";
import { render } from "react-dom";
const App = () => <div className="app">Hello from App component</div>;
export default render(<App />, document.getElementById("app"));
