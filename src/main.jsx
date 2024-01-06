import ReactDOM from 'react-dom/client';
import App from './App.jsx';
import {BrowserRouter} from "react-router-dom";
import UserInfoContext from "./context/UserInfoContext.jsx";

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <UserInfoContext>
        <BrowserRouter>
            <App/>
        </BrowserRouter>
    </UserInfoContext>
);