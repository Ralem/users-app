import React, { useRef, useEffect } from "react";
import PropTypes from "prop-types";
import ClassNames from "classnames";
import { SmallText } from "components/SmallText";
import "src/vendor/SplitTextPlugin";

import "./TextLoadingAnimation.styl";
const TextLoadingAnimation = ({ children, className }) => {
    const textRef = useRef(null);
    const animateText = () => {
        const tl = new TimelineMax({ repeat: -1 });
        const splittedText = new SplitText(textRef.current, { type: "chars" });
        const time = 0.5;
        tl.set({}, {}, time / 2);
        tl.add([
            TweenMax.staggerTo(
                splittedText.chars,
                time,
                {
                    y: "-8em",
                    ease: Power4.easeOut
                },
                time / 8
            )
        ]);
        tl.add(
            [
                TweenMax.staggerTo(
                    splittedText.chars,
                    time,
                    {
                        y: 0,
                        ease: Power4.easeInOut
                    },
                    time / 8
                )
            ],
            time * 1.5
        );
    };
    useEffect(() => {
        animateText();
    }, []);
    return (
        <SmallText
            ref={textRef}
            className={ClassNames("TextLoadingAnimation", className)}
        >
            {children}
        </SmallText>
    );
};
TextLoadingAnimation.displayName = "TextLoadingAnimation";
TextLoadingAnimation.propTypes = {
    children: PropTypes.oneOfType([
        PropTypes.string,
        PropTypes.node,
        PropTypes.arrayOf(PropTypes.node)
    ]),
    className: PropTypes.string
};
export default TextLoadingAnimation;
