import React, { useRef, useState, useContext, useEffect } from "react";
import PropTypes from "prop-types";
import ClassNames from "classnames";
import AppContext from "app/context";
import { CountrySelector } from "components/CountrySelector";
import { Icon } from "components/Icon";
import { apiGenderSet } from "app/context/apiActions";

import "./Filters.styl";
const Filters = ({ children, className }) => {
    const {
        filtersOpened,
        filtersOpenedSet,
        apiState: { gender },
        apiDispatch
    } = useContext(AppContext);
    const expandableRef = useRef();
    const [pristine, pristineSet] = useState(true);
    const open = () => {
        TweenMax.to(expandableRef.current, 0.25, {
            height: expandableRef.current.scrollHeight,
            clearProps: "height",
            onComplete: () => {
                pristineSet(false);
            }
        });
    };
    const close = () => {
        TweenMax.to(expandableRef.current, 0.25, {
            height: 0,
            clearProps: "height",
            onComplete: () => {
                pristineSet(true);
            }
        });
    };
    useEffect(() => {
        filtersOpened ? open() : close();
    }, [filtersOpened]);
    return (
        <div className={ClassNames("Filters", className)}>
            <p
                className="Filters-label c-red"
                onClick={() => {
                    filtersOpenedSet(!filtersOpened);
                }}
            >
                Filters
            </p>
            <div
                className={ClassNames("Filters-expandable", {
                    "Filters-expandable--pristine": pristine
                })}
                ref={expandableRef}
            >
                <CountrySelector></CountrySelector>
                {/* Disabled cus the randomuser.me api has a bug that does not allow to filter by gender if a seed is provided */}
                {/* <div className="Flex Flex-middle">
                    <Icon
                        className={ClassNames("Filters-gender", {
                            "Filters-gender--current": gender === "female"
                        })}
                        iconId="female"
                        onClick={() => {
                            apiDispatch(
                                apiGenderSet(
                                    gender === "female" ? null : "female"
                                )
                            );
                        }}
                    />
                    <Icon
                        className={ClassNames("Filters-gender", {
                            "Filters-gender--current": gender === "male"
                        })}
                        iconId="male"
                        onClick={() => {
                            apiDispatch(
                                apiGenderSet(gender === "male" ? null : "male")
                            );
                        }}
                    />
                </div> */}
            </div>
        </div>
    );
};
Filters.displayName = "Filters";
Filters.propTypes = {
    children: PropTypes.oneOfType([
        PropTypes.string,
        PropTypes.node,
        PropTypes.arrayOf(PropTypes.node)
    ]),
    className: PropTypes.string
};
export default Filters;
