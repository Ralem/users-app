import React, { memo } from "react";
import PropTypes from "prop-types";
import ClassNames from "classnames";

import "./AvatarDisplay.styl";
const AvatarDisplay = ({ avatarUrl, className }) => (
    <div
        className={ClassNames("AvatarDisplay", className)}
        style={{ backgroundImage: avatarUrl ? `url(${avatarUrl})` : null }}
    ></div>
);

AvatarDisplay.displayName = "AvatarDisplay";
AvatarDisplay.propTypes = {
    avatarUrl: PropTypes.string,
    children: PropTypes.oneOfType([
        PropTypes.string,
        PropTypes.node,
        PropTypes.arrayOf(PropTypes.node)
    ]),
    className: PropTypes.string
};

export default memo(AvatarDisplay);
