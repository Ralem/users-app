import React, { useEffect, useRef } from "react";
import { createPortal } from "react-dom";
import PropTypes from "prop-types";
import ClassNames from "classnames";

import "./LoaderDisplay.styl";
const LoaderDisplay = ({ children, isVisible, className }) => {
    const ElementRef = useRef(null);
    const Element = (
        <div
            className={ClassNames(
                "LoaderDisplay",
                "bg-gradient",
                "c-white",
                className
            )}
            ref={ElementRef}
        >
            <div className="Container Flex Flex-middle Flex-center">
                <div className="LoaderDisplay-wrapper">{children}</div>
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
    className: PropTypes.string,
    isVisible: PropTypes.bool
};

LoaderDisplay.defaultProps = {
    isVisible: true
};

export default LoaderDisplay;
