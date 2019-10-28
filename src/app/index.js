import React, { Fragment, useContext } from "react";
import { render } from "react-dom";
import AppContext, { AppStore } from "app/context";
import { Loader } from "components/Loader";
import MainView from "views/Main";
const App = () => {
    const { appReady } = useContext(AppContext);
    return (
        <Fragment>
            {appReady ? (
                <div className="app">
                    <MainView></MainView>
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
