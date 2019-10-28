import React, { useContext, useEffect } from "react";
import { render } from "react-dom";
import Api from "src/utils/Api";
import AppContext, { AppStore } from "app/context";
const App = () => {
    const { appReady, users, setUsers, appReadySet } = useContext(AppContext);
    const fetchUsers = async () => {
        const users = await Api.getMultipleUsers();
        setUsers(users.results);
        appReadySet(true);
    };
    useEffect(() => {
        fetchUsers();
    }, []);
    return appReady ? (
        <div className="app" onClick={fetchUsers}>
            Hello from App component <img src={users[0].picture.large} alt="" />
        </div>
    ) : null;
};
App.displayName = "App";
export default render(
    <AppStore>
        <App></App>
    </AppStore>,
    document.getElementById("app")
);
