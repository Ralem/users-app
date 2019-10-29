import React, { useContext } from "react";
import AppContext from "app/context";
import { Title } from "components/Title";
import { Paragraph } from "components/Paragraph";
import { Subtitle } from "components/Subtitle";
import { AvatarDisplay } from "components/AvatarDisplay";
import { Pagination } from "components/Pagination";
import "./Main.styl";
const Main = () => {
    const { users, apiState, apiDispatch } = useContext(AppContext);
    return (
        <div className="View Main">
            <div className="Container Main-container">
                <div className="Main-header Text-center bg-gradient c-white">
                    <div className="Container BoundsContainer">
                        <Title className="Main-title">User App</Title>
                        <Paragraph>
                            Select a user from the list below <br />
                            Browse between pages with the bottom bar <br />
                            Filter with the filter option
                        </Paragraph>
                    </div>
                </div>
                <div className="Main-body">
                    <div className="Container BoundsContainer">
                        <Subtitle className="Main-subtitle">Users</Subtitle>
                        <div className="Flex">
                            {users.map((user, idx) => (
                                <AvatarDisplay
                                    key={`user-${idx}`}
                                    avatarUrl={user.picture.large}
                                />
                            ))}
                        </div>
                    </div>
                </div>
                <div className="Main-pagination">
                    <div className="Container BoundsContainer Flex Flex-center">
                        <Pagination />
                    </div>
                </div>
            </div>
        </div>
    );
};
export default Main;
