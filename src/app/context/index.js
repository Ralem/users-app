import React, { createContext, useState, useEffect, useReducer } from "react";
import PropTypes from "prop-types";
import Api from "src/utils/Api";
import apiReducer, { apiInitialState } from "./apiReducer";
import { apiLoadingSet, apiPageChange } from "./apiActions";
const AppContext = createContext({});
export const AppProvider = AppContext.Provider;
export const AppConsumer = AppContext.Consumer;
export const AppStore = props => {
    const [users, setUsers] = useState([]);
    const [appReady, appReadySet] = useState(false);
    const [apiState, apiDispatch] = useReducer(apiReducer, apiInitialState);
    // Fetch new users
    const fetchUsers = async () => {
        await apiDispatch(apiLoadingSet(true));
        await apiSync();
        const request = await Api.getUsers();
        await setUsers(request.results);
        await apiDispatch(apiPageChange(request.info.page));
        await apiDispatch(apiLoadingSet(false));
    };
    const apiSync = async () => {
        await Api.changePage(apiState.page);
        await Api.perPageChange(apiState.perPage);
    };
    // Fetch new users if api state changes
    useEffect(() => {
        if (appReady) fetchUsers();
    }, [apiState.page, apiState.perPage]);
    return (
        <AppProvider
            value={{
                appReady,
                appReadySet,
                users,
                fetchUsers,
                apiState,
                apiDispatch
            }}
        >
            {props.children}
        </AppProvider>
    );
};
AppStore.displayName = "AppStore";
AppStore.propTypes = {
    children: PropTypes.oneOfType([
        PropTypes.string,
        PropTypes.node,
        PropTypes.arrayOf(PropTypes.node)
    ])
};
export default AppContext;
