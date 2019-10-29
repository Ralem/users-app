import React, { useContext } from "react";
import PropTypes from "prop-types";
import ClassNames from "classnames";
import AppContext from "app/context";
import { FlagDisplay } from "components/FlagDisplay";
import {
    apiNationalityAdd,
    apiNationalityRemove
} from "app/context/apiActions";

import "./CountrySelector.styl";
const CountrySelector = ({ children, className }) => {
    const {
        apiState: { nationalitiesSupported, nationalities },
        apiDispatch
    } = useContext(AppContext);
    const NationalitiesFlags = () =>
        nationalitiesSupported.map(countryId => {
            const selected = nationalities.includes(countryId);
            return (
                <FlagDisplay
                    className={ClassNames("CountrySelector-flag", "clickable", {
                        "CountrySelector-flag--selected": selected
                    })}
                    size={16}
                    key={countryId}
                    countryId={countryId}
                    onClick={() => {
                        apiDispatch(
                            !selected
                                ? apiNationalityAdd(countryId)
                                : apiNationalityRemove(countryId)
                        );
                    }}
                />
            );
        });
    return (
        <div className={ClassNames("CountrySelector", className)}>
            <div className="Container Flex Flex-middle">
                <NationalitiesFlags />
            </div>
        </div>
    );
};
CountrySelector.displayName = "CountrySelector";
CountrySelector.propTypes = {
    children: PropTypes.oneOfType([
        PropTypes.string,
        PropTypes.node,
        PropTypes.arrayOf(PropTypes.node)
    ]),
    className: PropTypes.string
};
export default CountrySelector;
