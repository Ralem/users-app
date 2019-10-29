import React from "react";
import { Filters } from "components/Filters";
import { AppStore } from "app/context";
export default {
    title: "Filters",
    decorators: [
        story => <AppStore>{story()}</AppStore>,
        s => <div className="Container Flex Flex-center">{s()}</div>
    ]
};
export const Default = () => <Filters />;
