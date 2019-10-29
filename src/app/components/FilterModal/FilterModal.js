import React, { useContext, useRef, useEffect, useState } from "react";
import { createPortal } from "react-dom";
import PropTypes from "prop-types";
import ClassNames from "classnames";
import { Subtitle } from "components/Subtitle";
import { Title } from "components/Title";
import { CountrySelector } from "components/CountrySelector";
import AppContext from "app/context";

import "./FilterModal.styl";
import { TweenMax } from "gsap";
const FilterModal = ({ children, className }) => {
    const { showFilterModalSet, showFilterModal } = useContext(AppContext);
    const modalRef = useRef(null);
    const [mounted, mountedSet] = useState(false);
    const modalShow = () => {
        TweenMax.to(modalRef.current, 0.25, {
            autoAlpha: 1
        });
    };
    const modalHide = () => {
        TweenMax.to(modalRef.current, 0.25, {
            autoAlpha: 0
        });
    };
    useEffect(() => {
        showFilterModal ? modalShow() : modalHide();
    }, [showFilterModal]);
    const Element = (
        <div className={ClassNames("FilterModal", className)} ref={modalRef}>
            <div className="Container">
                <div className="FilterModal-header">
                    <div className="Container Flex Flex-middle Flex-between">
                        <span></span>
                        <Title>FILTERS</Title>
                        <a
                            onClick={() => {
                                showFilterModalSet(false);
                            }}
                            className="FilterModal-close c-red"
                        >
                            CLOSE
                        </a>
                    </div>
                </div>
                <div className="FilterModal-body">
                    <div className="Container BoundsContainer">
                        <Subtitle>Country</Subtitle>
                        <CountrySelector></CountrySelector>
                        <Subtitle>Gender</Subtitle>
                    </div>
                </div>
            </div>
        </div>
    );
    return createPortal(Element, document.getElementById("root-over"));
};
FilterModal.displayName = "FilterModal";
FilterModal.propTypes = {
    children: PropTypes.oneOfType([
        PropTypes.string,
        PropTypes.node,
        PropTypes.arrayOf(PropTypes.node)
    ]),
    className: PropTypes.string
};
export default FilterModal;
