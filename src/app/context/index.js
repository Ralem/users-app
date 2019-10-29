import React, { createContext, useState, useEffect } from "react";
import PropTypes from "prop-types";
import Api from "src/utils/Api";
const AppContext = createContext({});
export const AppProvider = AppContext.Provider;
export const AppConsumer = AppContext.Consumer;
export const AppStore = props => {
    const [users, setUsers] = useState([]);
    const [appReady, appReadySet] = useState(false);
    const [apiConfig, apiConfigSet] = useState({
        page: 1
    });
    const fetchUsers = async () => {
        const request = await Api.getUsers();
        apiConfigSet({ page: request.info.page });
        await setUsers(request.results);
    };
    useEffect(() => {
        console.log(apiConfig.page);
        // Api.changePage(apiConfig.page);
        // fetchUsers();
    }, [apiConfig]);
    return (
        <AppProvider
            value={{
                appReady,
                appReadySet,
                users,
                setUsers,
                fetchUsers,
                apiConfig,
                apiConfigSet
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
