import React, { useContext, useEffect, useState } from "react";
import PropTypes from "prop-types";
import { LoaderDisplay } from "components/LoaderDisplay";
import { Title } from "components/Title";
import { TextLoadingAnimation } from "components/TextLoadingAnimation";
import { SmallText } from "components/SmallText";
import AppContext from "app/context";

const Loader = () => {
    const { appReady, apiState } = useContext(AppContext);
    const [showLoader, showLoaderSet] = useState(true);
    const [mounted, mountedSet] = useState(false);
    const [showLoaderText, showLoaderTextSet] = useState(true);

    const loaderShow = () => {
        showLoaderSet(true);
    };

    const loaderHide = () => {
        const delay = setTimeout(() => {
            showLoaderSet(false);
            clearTimeout(delay);
        }, 1000);
    };

    useEffect(() => {
        if (!mounted) {
            mountedSet(true);
        } else if (appReady && apiState.loading) {
            showLoaderTextSet(true);
            loaderShow();
        } else if (appReady & !apiState.loading) {
            showLoaderTextSet(false);
            loaderHide();
        }
    }, [appReady, apiState.loading]);
    return (
        <LoaderDisplay isVisible={showLoader} className="Text-center">
            <Title color="white">
                Loading Users <br />
                {showLoaderText ? (
                    <TextLoadingAnimation>Wait a moment</TextLoadingAnimation>
                ) : (
                    <SmallText>All Done</SmallText>
                )}
            </Title>
        </LoaderDisplay>
    );
};
Loader.displayName = "Loader";
Loader.propTypes = {
    children: PropTypes.oneOfType([
        PropTypes.string,
        PropTypes.node,
        PropTypes.arrayOf(PropTypes.node)
    ]),
    className: PropTypes.string
};
export default Loader;
