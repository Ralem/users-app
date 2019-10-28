import React from "react";
import PropTypes from "prop-types";
import ClassNames from "classnames";

import "./Subtitle.styl";
const Subtitle = ({ children, className, color }) => (
    <div
        className={ClassNames(
            "Subtitle",
            className,
            color ? `c-${color}` : null
        )}
    >
        {children}
    </div>
);
Subtitle.displayName = "Subtitle";
Subtitle.propTypes = {
    children: PropTypes.oneOfType([
        PropTypes.string,
        PropTypes.node,
        PropTypes.arrayOf(PropTypes.node)
    ]),
    className: PropTypes.string,
    color: PropTypes.oneOf(["white", "black", "magenta", "cyan", "yellow"])
};
export default Subtitle;
