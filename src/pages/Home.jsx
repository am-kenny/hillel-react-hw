import {useContext} from "react";
import {UserContext} from "../context/UserInfoContext.jsx";

const Home = () => {

    const data = useContext(UserContext)

    return (
        <div>
            <h1>Home</h1>
            <p>Welcome, {data.name}</p>
            <p>This is the home page</p>
            {/*<p>{value ? "You are logged in" : "You are not logged in"}</p>*/}

            {/*<button onClick={() => {onChange(!value)}}>Toggle auth</button>*/}
        </div>
    )
}

export default Home