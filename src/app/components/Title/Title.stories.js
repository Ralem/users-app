import React from "react";
import { Title } from "components/Title";
import { withKnobs, select, text } from "@storybook/addon-knobs";
import ClassNames from "classnames";
export default {
    title: "Title",
    decorators: [
        withKnobs,
        story => (
            <div
                className={ClassNames(
                    select(
                        "Background",
                        {
                            Gradient: "bg-gradient",
                            White: "bg-c-white",
                            Black: "bg-c-black",
                            Magenta: "bg-c-magenta",
                            Yellow: "bg-c-yellow",
                            Cyan: "bg-c-cyan"
                        },
                        "bg-gradient"
                    ),
                    " Container Flex Flex-center Flex-middle"
                )}
            >
                {story()}
            </div>
        )
    ]
};
export const Default = () => (
    <Title
        color={select(
            "Style",
            {
                White: "white",
                Black: "black",
                Yellow: "yellow",
                Cyan: "cyan",
                Magenta: "magenta"
            },
            "white"
        )}
    >
        {text("Text", "Hello from Title Component")}
    </Title>
);
