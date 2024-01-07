import {createContext} from "react";
import PropTypes from "prop-types";

export const UserContext = createContext(null);
UserContext.displayName = "UserContext";

const UserInfoContext = ({children}) => {

    // Some dummy user info
    const userInfo = {
        name: "Andrii",
        age: 30,
        email: "andrii@example.com",
        address: {
            street: "123 Main St",
            city: "Kyiv",
            country: "Ukraine"
        },
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