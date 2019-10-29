import React from "react";
import { Loader } from "components/Loader";
import { AppStore } from "app/context";
export default {
    title: "Loader",
    decorators: [story => <AppStore>{story()}</AppStore>]
};
export const Default = () => <Loader />;
