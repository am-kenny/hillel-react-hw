import {useContext} from "react";
import {UserContext} from "../../context/UserInfoContext.jsx";

const UserAddressCard = () => {
    const { address } = useContext(UserContext);

    return (
        <div>
            <p>Street: {address.street}</p>
            <p>City: {address.city}</p>
            <p>Country: {address.country}</p>
        </div>
    );
};

export default UserAddressCard;