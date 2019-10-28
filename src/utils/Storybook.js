import React from "react";
import { select } from "@storybook/addon-knobs";
import ClassNames from "classnames";
export const withCenteredContainer = story => (
    <div
        className={ClassNames(
            "Container",
            "Flex",
            "Flex-middle",
            "Flex-center",
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
            )
        )}
    >
        {story()}
    </div>
);
