import React from "react";
import { TextLoadingAnimation } from "components/TextLoadingAnimation";
import { withCenteredContainer } from "src/utils/Storybook";
export default {
    title: "TextLoadingAnimation",
    decorators: [withCenteredContainer]
};
export const Default = () => (
    <TextLoadingAnimation className="c-white">
        {"Wait a moment"}
    </TextLoadingAnimation>
);
