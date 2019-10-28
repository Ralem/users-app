import React from "react";
import { AvatarDisplay } from "components/AvatarDisplay";
export default {
    title: "AvatarDisplay",
    decorators: [
        story => (
            <div className="Container Flex Flex-center Flex-middle">
                {story()}
            </div>
        )
    ]
};
export const Default = () => (
    <AvatarDisplay avatarUrl="static/img/women_14.jpg" />
);
