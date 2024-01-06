import {createContext} from "react";
import PropTypes from "prop-types";

export const UserContext = createContext(null);
UserContext.displayName = "UserContext";

const UserInfoContext = ({children}) => {

    const userInfo = {
        name: "Andrii",
        permissions: ["admin"]
    }

    return (
        <UserContext.Provider value={userInfo}>
            {children}
        </UserContext.Provider>

    )
}

UserInfoContext.propTypes = {
    children: PropTypes.node.isRequired
}

export default UserInfoContext