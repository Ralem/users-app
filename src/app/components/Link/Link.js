import React from "react";
import PropTypes from "prop-types";
import ClassNames from "classnames";

import "./Link.styl";
const Link = ({ children, className }) => (
    <div className={ClassNames("Link", className)}>{children}</div>
);
Link.displayName = "Link";
Link.propTypes = {
    children: PropTypes.oneOfType([
        PropTypes.string,
        PropTypes.node,
        PropTypes.arrayOf(PropTypes.node)
    ]),
    className: PropTypes.string
};
export default Link;
