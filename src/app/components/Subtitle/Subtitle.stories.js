import React from "react";
import { Subtitle } from "components/Subtitle";
import { withKnobs, select } from "@storybook/addon-knobs";
import { withCenteredContainer } from "src/utils/Storybook";
export default {
    title: "Subtitle",
    decorators: [withKnobs, withCenteredContainer]
};
export const Default = () => (
    <Subtitle
        color={select(
            "Color",
            {
                White: "white",
                Black: "black",
                Magenta: "magenta",
                Cyan: "cyan",
                Yellow: "yellow"
            },
            "white"
        )}
    >
        Hello from <b>Subtitle</b> Component
    </Subtitle>
);
