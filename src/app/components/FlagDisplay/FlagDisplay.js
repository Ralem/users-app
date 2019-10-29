import React, { memo } from "react";
import PropTypes from "prop-types";
import ClassNames from "classnames";

import "./FlagDisplay.styl";
const FlagDisplay = ({ className, countryId, size, flagStyle, onClick }) => (
    <div className={ClassNames("FlagDisplay", className)} onClick={onClick}>
        <img
            src={`https://www.countryflags.io/${countryId}/${flagStyle}/${size}.png`}
            alt={countryId}
        />
    </div>
);
FlagDisplay.displayName = "FlagDisplay";
FlagDisplay.propTypes = {
    children: PropTypes.oneOfType([
        PropTypes.string,
        PropTypes.node,
        PropTypes.arrayOf(PropTypes.node)
    ]),
    className: PropTypes.string,
    countryId: PropTypes.string,
    size: PropTypes.oneOf([16, 32, 64]),
    flagStyle: PropTypes.oneOf(["flat", "shiny"]),
    onClick: PropTypes.func
};
FlagDisplay.defaultProps = {
    size: 16,
    countryId: "US",
    flagStyle: "flat"
};
export default memo(FlagDisplay);
