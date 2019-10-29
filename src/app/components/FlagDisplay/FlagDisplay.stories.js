import React from "react";
import { FlagDisplay } from "components/FlagDisplay";
import { withKnobs, select } from "@storybook/addon-knobs";
import { withCenteredContainer } from "src/utils/Storybook";
export default {
    title: "FlagDisplay",
    decorators: [withKnobs, withCenteredContainer]
};
export const Default = () => (
    <FlagDisplay
        countryId={select(
            "Country",
            {
                AU: "AU",
                BR: "BR",
                CA: "CA",
                CH: "CH",
                DE: "DE",
                DK: "DK",
                ES: "ES",
                FI: "FI",
                FR: "FR",
                GB: "GB",
                IE: "IE",
                IR: "IR",
                NO: "NO",
                NL: "NL",
                NZ: "NZ",
                TR: "TR",
                US: "US"
            },
            "US"
        )}
        size={select(
            "Size",
            {
                "16": 16,
                "32": 32,
                "64": 64
            },
            16
        )}
    />
);
