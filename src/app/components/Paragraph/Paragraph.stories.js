import React from "react";
import { Paragraph } from "components/Paragraph";
import { whitCenteredContainer } from "src/utils/Storybook";
import { withKnobs, select } from "@storybook/addon-knobs";
export default {
    title: "Paragraph",
    decorators: [withKnobs, whitCenteredContainer]
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
        Hello from Paragraph content
    </Paragraph>
);
