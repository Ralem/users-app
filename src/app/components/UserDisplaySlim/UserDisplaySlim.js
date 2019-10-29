import React from "react";
import PropTypes from "prop-types";
import ClassNames from "classnames";
import { AvatarDisplay } from "components/AvatarDisplay";
import { FlagDisplay } from "components/FlagDisplay";

import "./UserDisplaySlim.styl";
const UserDisplaySlim = ({ userData, className }) => (
    <div className={ClassNames("UserDisplaySlim", className)}>
        <div className="Container UserDisplaySlim-container">
            <AvatarDisplay
                className="UserDisplaySlim-avatar"
                avatarUrl={userData.picture.large}
            ></AvatarDisplay>
            <FlagDisplay
                className="UserDisplaySlim-flag"
                countryId={userData.nat}
            ></FlagDisplay>
            <span className="UserDisplaySlim-name Flex Flex-middle">
                {userData.name.first} {userData.name.last}
            </span>
        </div>
    </div>
);
UserDisplaySlim.displayName = "UserDisplaySlim";
UserDisplaySlim.propTypes = {
    children: PropTypes.oneOfType([
        PropTypes.string,
        PropTypes.node,
        PropTypes.arrayOf(PropTypes.node)
    ]),
    className: PropTypes.string,
    userData: PropTypes.object
};
export default UserDisplaySlim;
