import React from "react";
import PropTypes from "prop-types";

import "./AvatarDisplay.styl";
const AvatarDisplay = ({ avatarUrl }) => (
    <div
        className="AvatarDisplay"
        style={{ backgroundImage: `url(${avatarUrl})` }}
    ></div>
);

AvatarDisplay.displayName = "AvatarDisplay";
AvatarDisplay.propTypes = {
    avatarUrl: PropTypes.string,
    children: PropTypes.oneOfType([
        PropTypes.string,
        PropTypes.node,
        PropTypes.arrayOf(PropTypes.node)
    ])
};

export default AvatarDisplay;
