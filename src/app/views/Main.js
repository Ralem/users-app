import React, { useContext, useEffect } from "react";
import AppContext from "app/context";
import { Title } from "components/Title";
import { Paragraph } from "components/Paragraph";
import { Subtitle } from "components/Subtitle";
import { AvatarDisplay } from "components/AvatarDisplay";
import "./Main.styl";
const Main = () => {
    const { users } = useContext(AppContext);
    return (
        <div className="View Main">
            <div className="Container">
                <div className="Main-header Text-center bg-gradient c-white">
                    <div className="Container BoundsContainer">
                        <Title className="Main-title">User App</Title>
                        <Paragraph>
                            Select a user from the list below, you can filter
                            users with the filters option
                        </Paragraph>
                    </div>
                </div>
                <div className="Main-body">
                    <div className="Container BoundsContainer">
                        <Subtitle className="Main-subtitle">Users</Subtitle>
                        <div className="Flex">
                            {users.map(user => (
                                <AvatarDisplay
                                    key={user.id.value}
                                    avatarUrl={user.picture.large}
                                />
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};
export default Main;
