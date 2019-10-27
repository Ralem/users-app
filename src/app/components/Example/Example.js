import React from "react";
import PropTypes from "prop-types";
const Example = ({ text }) => <div className="Example">{text}</div>;
Example.propTypes = { text: PropTypes.string };
Example.defaultProps = { text: "Hello from Example component" };
export default Example;
