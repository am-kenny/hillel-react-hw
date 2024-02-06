import React from 'react';
import {useDispatch, useSelector} from "react-redux";
import {login, logout} from "../redux/slices/authSlice.jsx";

const Auth = () => {
    const dispatch = useDispatch();
    const isAuth = useSelector(state => state.auth.isAuth);

    const handleLogin = () => {
        dispatch(login())
    }

    const handleLogout = () => {
        dispatch(logout())
    }

    return (
        <div>
            <p>{isAuth ? "You are logged in" : "You are not logged in"}</p>

            {isAuth ?
                <button onClick={handleLogout}>Logout</button> :
                <button onClick={handleLogin}>Login</button>}
            
        </div>
    );
};

export default Auth;