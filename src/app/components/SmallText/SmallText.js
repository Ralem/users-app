import React, { forwardRef } from "react";
import PropTypes from "prop-types";
import ClassNames from "classnames";

import "./SmallText.styl";
const SmallText = forwardRef(({ children, className }, ref) => (
    <span className={ClassNames("SmallText", className)} ref={ref}>
        {children}
    </span>
));
SmallText.displayName = "SmallText";
SmallText.propTypes = {
    children: PropTypes.oneOfType([
        PropTypes.string,
        PropTypes.node,
        PropTypes.arrayOf(PropTypes.node)
    ]),
    className: PropTypes.string
};
export default SmallText;
