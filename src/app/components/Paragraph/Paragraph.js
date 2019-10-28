import React from "react";
import PropTypes from "prop-types";
import ClassNames from "classnames";

import "./Paragraph.styl";
const Paragraph = ({ children, className, color }) => (
    <div className={ClassNames("Paragraph", className, `c-${color}`)}>
        {children}
    </div>
);
Paragraph.displayName = "Paragraph";
Paragraph.propTypes = {
    children: PropTypes.oneOfType([
        PropTypes.string,
        PropTypes.node,
        PropTypes.arrayOf(PropTypes.node)
    ]),
    className: PropTypes.string,
    color: PropTypes.oneOf(["white", "black", "magenta", "cyan", "yellow"])
};
Paragraph.defaultProps = {
    color: "black"
};
export default Paragraph;
