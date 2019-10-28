import React, { createContext, useState } from "react";
import PropTypes from "prop-types";
const AppContext = createContext({});
export const AppProvider = AppContext.Provider;
export const AppConsumer = AppContext.Consumer;
export const AppStore = props => {
    const [users, setUsers] = useState([]);
    const [appReady, appReadySet] = useState(false);
    return (
        <AppProvider
            value={{
                appReady,
                appReadySet,
                users,
                setUsers
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
