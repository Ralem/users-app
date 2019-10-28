import React from "react";
import { SmallText } from "components/SmallText";
import { withCenteredContainer } from "src/utils/Storybook";
import { Paragraph } from "components/Paragraph";
export default { title: "SmallText", decorators: [withCenteredContainer] };
export const Default = () => (
    <Paragraph color="white">
        <SmallText>Hello from SmallText component</SmallText>
    </Paragraph>
);
