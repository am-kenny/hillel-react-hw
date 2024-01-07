import {useContext} from "react";
import {UserContext} from "../../context/UserInfoContext.jsx";
import UserAddressCard from "./UserAddressCard.jsx";

const CurrentUserCard = () => {
    const userData = useContext(UserContext)

    return (
        <div className="user-card">
            <h2 className="user-card__name">You are logged in as {userData.name}</h2>
            <p className="user-card__email">Email: {userData.email}</p>
            <p>Age: {userData.age}</p>
            <UserAddressCard/>
        </div>
    );
};

export default CurrentUserCard;