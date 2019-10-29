import React from "react";
import { CountrySelector } from "components/CountrySelector";
import { AppStore } from "app/context";
import { withCenteredContainer } from "src/utils/Storybook";
export default {
    title: "CountrySelector",
    decorators: [story => <AppStore>{story()}</AppStore>, withCenteredContainer]
};
export const Default = () => <CountrySelector />;
