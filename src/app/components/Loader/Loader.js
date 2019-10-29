import React, { useContext, useEffect, useState } from "react";
import PropTypes from "prop-types";
import { LoaderDisplay } from "components/LoaderDisplay";
import { Title } from "components/Title";
import { TextLoadingAnimation } from "components/TextLoadingAnimation";
import { SmallText } from "components/SmallText";
import AppContext from "app/context";
import Api from "src/utils/Api";

const Loader = () => {
    const { setUsers, appReadySet, appReady } = useContext(AppContext);
    const [showLoader, showLoaderSet] = useState(true);
    const fetchUsers = async () => {
        const request = await Api.getUsers();
        await setUsers(request.results);
        setTimeout(() => {
            appReadySet(true);
            setTimeout(() => {
                showLoaderSet(false);
            }, 1000);
        }, 1000);
    };
    useEffect(() => {
        fetchUsers();
    }, []);
    return (
        <LoaderDisplay isVisible={showLoader} className="Text-center">
            <Title color="white">
                Loading Users <br />
                {!appReady ? (
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
