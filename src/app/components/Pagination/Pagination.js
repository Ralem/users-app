import React, { useContext } from "react";
import PropTypes from "prop-types";
import { PaginationDisplay } from "components/PaginationDisplay";
import AppContext from "app/context";
import {
    apiPageIncrement,
    apiPageDecrement,
    apiPageChange
} from "app/context/apiActions";

import "./Pagination.styl";
const Pagination = ({ className }) => {
    const {
        apiState: { page, maxPages },
        apiDispatch
    } = useContext(AppContext);
    return (
        <PaginationDisplay
            className={className}
            pagesCurrent={page}
            pageSeparator="/"
            pagesTotal={maxPages}
            onFirstClick={() => {
                apiDispatch(apiPageChange(1));
            }}
            onNextClick={() => {
                apiDispatch(apiPageIncrement());
            }}
            onPrevClick={() => {
                apiDispatch(apiPageDecrement());
            }}
            onLastClick={() => {
                apiDispatch(apiPageChange(maxPages));
            }}
        />
    );
};
Pagination.displayName = "Pagination";
Pagination.propTypes = {
    children: PropTypes.oneOfType([
        PropTypes.string,
        PropTypes.node,
        PropTypes.arrayOf(PropTypes.node)
    ]),
    className: PropTypes.string
};
export default Pagination;
