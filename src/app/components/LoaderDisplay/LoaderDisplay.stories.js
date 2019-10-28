import React from "react";
import { withKnobs, boolean } from "@storybook/addon-knobs";
import { LoaderDisplay } from "components/LoaderDisplay";
export default {
    title: "LoaderDisplay",
    decorators: [withKnobs]
};
export const Default = () => {
    return (
        <LoaderDisplay isVisible={boolean("Visible", true)}>
            {"Loading User"}
        </LoaderDisplay>
    );
};
