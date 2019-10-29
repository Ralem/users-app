import React from "react";
import PropTypes from "prop-types";
import classNames from "classnames";

import "./Title.styl";
const Title = ({ children, className, color }) => (
    <h1 className={classNames("Title", className, color ? `c-${color}` : null)}>
        {children}
    </h1>
);
Title.displayName = "Title";
Title.propTypes = {
    children: PropTypes.oneOfType([
        PropTypes.string,
        PropTypes.node,
        PropTypes.arrayOf(PropTypes.node)
    ]),
    className: PropTypes.string,
    color: PropTypes.oneOf(["white", "black", "magenta", "cyan", "yellow"])
};
export default Title;
