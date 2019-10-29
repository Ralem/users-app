import React, { memo } from "react";
import PropTypes from "prop-types";
import ClassNames from "classnames";
import { Icon } from "components/Icon";

import "./PaginationDisplay.styl";
const PaginationDisplay = ({
    className,
    pagesCurrent,
    pagesTotal,
    pageSeparator,
    onPrevClick,
    onNextClick,
    onFirstClick,
    onLastClick
}) => (
    <div className={ClassNames("PaginationDisplay", className)}>
        <div className="Container Flex Flex-middle Flex-between">
            <div className="Flex">
                <button
                    disabled={pagesCurrent <= 1}
                    className="PaginationDisplay-control"
                    onClick={onFirstClick}
                >
                    <Icon iconId="chevrons-left" />
                </button>
                <button
                    disabled={pagesCurrent <= 1}
                    className="PaginationDisplay-control"
                    onClick={onPrevClick}
                >
                    <Icon iconId="chevron-left"></Icon>
                </button>
            </div>
            <div>
                <span className="PaginationDisplay-current">
                    {pagesCurrent}
                </span>{" "}
                <span className="PaginationDisplay-pageSeparator">
                    {pageSeparator}
                </span>{" "}
                <span className="PaginationDisplay-total">{pagesTotal}</span>
            </div>
            <div className="Flex">
                <button
                    disabled={pagesCurrent >= pagesTotal}
                    className="PaginationDisplay-control"
                    onClick={onNextClick}
                >
                    <Icon iconId="chevron-right" />
                </button>
                <button
                    disabled={pagesCurrent >= pagesTotal}
                    className="PaginationDisplay-control"
                    onClick={onLastClick}
                >
                    <Icon iconId="chevrons-right" />
                </button>
            </div>
        </div>
    </div>
);
PaginationDisplay.displayName = "PaginationDisplay";
PaginationDisplay.propTypes = {
    children: PropTypes.oneOfType([
        PropTypes.string,
        PropTypes.node,
        PropTypes.arrayOf(PropTypes.node)
    ]),
    className: PropTypes.string,
    pagesCurrent: PropTypes.number,
    pagesTotal: PropTypes.number,
    onPrevClick: PropTypes.func,
    onNextClick: PropTypes.func,
    onFirstClick: PropTypes.func,
    onLastClick: PropTypes.func,
    pageSeparator: PropTypes.string
};
PaginationDisplay.defaultProps = {
    pagesCurrent: 0,
    pagesTotal: 0,
    pageSeparator: "of"
};
export default memo(PaginationDisplay);
