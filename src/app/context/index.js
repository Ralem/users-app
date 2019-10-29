import React, { createContext, useState, useEffect, useReducer } from "react";
import PropTypes from "prop-types";
import Api from "src/utils/Api";
import apiReducer, { apiInitialState } from "./apiReducer";
import { apiLoadingSet, apiPageChange, apiPagesMaxSet } from "./apiActions";
const AppContext = createContext({});
export const AppProvider = AppContext.Provider;
export const AppConsumer = AppContext.Consumer;
export const AppStore = props => {
    const [users, setUsers] = useState([]);
    const [appReady, appReadySet] = useState(false);
    const [apiState, apiDispatch] = useReducer(apiReducer, apiInitialState);
    const [filtersOpened, filtersOpenedSet] = useState(false);
    // Fetch new users
    const fetchUsers = async () => {
        await apiDispatch(apiLoadingSet(true));
        await apiSync();
        const request = await Api.getUsers();
        await setUsers(request.results);
        await apiDispatch(apiPageChange(request.info.page));
        await apiDispatch(apiLoadingSet(false));
    };
    // Sync Api class to Api Store
    const apiSync = async () => {
        await Api.changePage(apiState.page);
        await Api.perPageChange(apiState.perPage);
        await Api.genderSet(apiState.gender);
        await Api.nationalitiesSet(apiState.nationalities);
    };
    useEffect(() => {
        apiDispatch(
            apiPagesMaxSet(Math.ceil(apiState.maxUsers / apiState.perPage))
        );
    }, [apiState.perPage]);
    // Fetch new users if api state changes
    useEffect(() => {
        if (apiState.page > apiState.maxPages) {
            apiDispatch(apiPageChange(apiState.maxPages));
        } else if (appReady) {
            fetchUsers();
        }
    }, [
        apiState.page,
        apiState.gender,
        apiState.nationalities,
        apiState.maxPages
    ]);
    return (
        <AppProvider
            value={{
                appReady,
                appReadySet,
                users,
                fetchUsers,
                apiState,
                apiDispatch,
                filtersOpened,
                filtersOpenedSet
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
