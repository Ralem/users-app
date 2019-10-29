import React from "react";
import { PaginationDisplay } from "components/PaginationDisplay";
import { withKnobs } from "@storybook/addon-knobs";
import { withCenteredContainer } from "src/utils/Storybook";
export default {
    title: "PaginationDisplay",
    decorators: [withKnobs, withCenteredContainer]
};
export const Default = () => (
    <PaginationDisplay pagesCurrent={1} pagesTotal={20} className="c-white" />
);
