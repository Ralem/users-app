import React from "react";
import PropTypes from "prop-types";
import classNames from "classnames";

import "./Title.styl";
const Title = ({ children, className }) => (
    <div className={classNames("Title", className)}>{children}</div>
);
Title.displayName = "Title";
Title.propTypes = {
    children: PropTypes.oneOfType([
        PropTypes.string,
        PropTypes.node,
        PropTypes.arrayOf(PropTypes.node)
    ]),
    className: PropTypes.string
};
export default Title;
