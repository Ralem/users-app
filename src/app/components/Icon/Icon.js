import React, { memo } from "react";
import PropTypes from "prop-types";
import ClassNames from "classnames";

import "./Icon.styl";
const Icon = ({ className, iconId }) => (
    <div className={ClassNames("Icon", className, `Icon-${iconId}`)}>
        <svg className={ClassNames("Icon-svg")}>
            <use xlinkHref={`#icon-${iconId}`}></use>
        </svg>
    </div>
);
Icon.displayName = "Icon";
Icon.propTypes = {
    children: PropTypes.oneOfType([
        PropTypes.string,
        PropTypes.node,
        PropTypes.arrayOf(PropTypes.node)
    ]),
    className: PropTypes.string,
    iconId: PropTypes.string
};
export default memo(Icon);
