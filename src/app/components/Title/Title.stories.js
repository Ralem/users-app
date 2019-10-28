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
        className={select(
            "Style",
            {
                Default: null,
                Black: "Title-c-black",
                Magenta: "Title-c-magenta",
                Yellow: "Title-c-yellow",
                Cyan: "Title-c-cyan"
            },
            null
        )}
    >
        {text("Text", "Hello from Title Component")}
    </Title>
);
