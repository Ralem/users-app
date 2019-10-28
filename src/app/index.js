import React, { Fragment, useContext } from "react";
import { render } from "react-dom";
import AppContext, { AppStore } from "app/context";
import { AvatarDisplay } from "components/AvatarDisplay";
import { Loader } from "components/Loader";
const App = () => {
    const { appReady, users } = useContext(AppContext);
    return (
        <Fragment>
            {appReady ? (
                <div className="app">
                    Hello from App component
                    <AvatarDisplay avatarUrl={users[0].picture.large} />
                </div>
            ) : null}
            <Loader />
        </Fragment>
    );
};
App.displayName = "App";
export default render(
    <AppStore>
        <App></App>
    </AppStore>,
    document.getElementById("root")
);
