import React from "react";
import { Paragraph } from "components/Paragraph";
import { withCenteredContainer } from "src/utils/Storybook";
import { withKnobs, select } from "@storybook/addon-knobs";
export default {
    title: "Paragraph",
    decorators: [withKnobs, withCenteredContainer]
};
export const Default = () => (
    <Paragraph
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
        Hello from <b>Paragraph</b> content
    </Paragraph>
);
