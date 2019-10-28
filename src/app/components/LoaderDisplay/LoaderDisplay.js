import React, { useEffect, useRef } from "react";
import { createPortal } from "react-dom";
import PropTypes from "prop-types";
import ClassNames from "classnames";

import "./LoaderDisplay.styl";
import { TweenMax } from "gsap";
const LoaderDisplay = ({ children, isVisible }) => {
    const ElementRef = useRef(null);
    const Element = (
        <div
            className={ClassNames("LoaderDisplay", "bg-gradient", "c-white")}
            ref={ElementRef}
        >
            <div className="Container Flex Flex-middle Flex-center">
                {children}
            </div>
        </div>
    );
    const ElementShow = () => {
        TweenMax.to(ElementRef.current, 0.25, {
            autoAlpha: 1
        });
    };
    const ElementHide = () => {
        TweenMax.to(ElementRef.current, 0.25, {
            autoAlpha: 0
        });
    };
    useEffect(() => {
        isVisible ? ElementShow() : ElementHide();
    }, [isVisible]);
    return createPortal(Element, document.getElementById("root-over"));
};

LoaderDisplay.displayName = "LoaderDisplay";

LoaderDisplay.propTypes = {
    children: PropTypes.oneOfType([
        PropTypes.string,
        PropTypes.node,
        PropTypes.arrayOf(PropTypes.node)
    ]),
    isVisible: PropTypes.bool
};

LoaderDisplay.defaultProps = {
    isVisible: true
};

export default LoaderDisplay;
