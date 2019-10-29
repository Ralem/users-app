import React, { Fragment, useContext, useEffect } from "react";
import { render } from "react-dom";
import AppContext, { AppStore } from "app/context";
import { Loader } from "components/Loader";
import MainView from "views/Main";
const App = () => {
    const { appReady, appReadySet, fetchUsers } = useContext(AppContext);
    const appBoot = async () => {
        await fetchUsers();
        const delay = setTimeout(() => {
            appReadySet(true);
            if (delay) clearTimeout(delay);
        }, 2000);
    };
    // Boot the app
    useEffect(() => {
        appBoot();
    }, []);
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
