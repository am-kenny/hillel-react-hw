import {useContext} from "react";
import {UserContext} from "../context/UserInfoContext.jsx";

const Home = () => {

    const userData = useContext(UserContext)

    return (
        <div>
            <h1>Home</h1>
            <p>Welcome, {userData.name}</p>
            <p>This is the home page</p>
        </div>
    )
}

export default Home