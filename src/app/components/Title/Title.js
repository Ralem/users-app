import React from "react";
import PropTypes from "prop-types";
import classNames from "classnames";

import "./Title.styl";
const Title = ({ children, className, color }) => (
    <div className={classNames("Title", className, `c-${color}`)}>
        {children}
    </div>
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
Title.defaultProps = {
    color: "black"
};
export default Title;
