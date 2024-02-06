import {NavLink, Route, Routes} from "react-router-dom";
import Home from "./pages/Home";
import Todos from "./pages/Todos";
import Users from "./pages/Users/Users.jsx";
import PageNotFound from "./pages/PageNotFound.jsx";
import UserDetails from "./pages/Users/UserDetails.jsx";
import './App.css'
import Blog from "./pages/Blog/Blog.jsx";
import CurrentUser from "./pages/Users/CurrentUser.jsx";
import Auth from "./pages/Auth.jsx";
import Products from "./pages/Products.jsx";
import Cart from "./pages/Cart.jsx";
import Counter from "./pages/Counter/Counter.jsx";

function App() {

    return (
        <div className="App">
            <header className={"app__header"}>
                <nav className={"header__navigation"}>
                    <NavLink className={"header__link"} to="/">Home</NavLink>
                    <NavLink className={"header__link"} to="/todos">Todos</NavLink>
                    <NavLink className={"header__link"} to="/blog">Blog</NavLink>
                    <NavLink className={"header__link"} to="/users">Users</NavLink>
                    <NavLink className={"header__link"} to="/current_user">Profile</NavLink>
                    <NavLink className={"header__link"} to="/auth">Auth</NavLink>
                    <NavLink className={"header__link"} to="/products">Products</NavLink>
                    <NavLink className={"header__link"} to="/cart">Cart</NavLink>
                    <NavLink className={"header__link"} to="/counter">Counter</NavLink>
                </nav>
            </header>


            <Routes>
                <Route path='/' element={<Home/>}/>
                <Route path='/todos' element={<Todos/>}/>
                <Route path='/users' element={<Users/>}/>
                <Route path='/users/:userId' element={<UserDetails/>}/>
                <Route path='/blog' element={<Blog/>}/>
                <Route path='/current_user' element={<CurrentUser/>}/>
                <Route path='/auth' element={<Auth/>}/>
                <Route path='/products' element={<Products/>}/>
                <Route path='/cart' element={<Cart/>}/>
                <Route path='/counter' element={<Counter/>}/>

                <Route path='*' element={<PageNotFound/>}/>
            </Routes>
        </div>
    )
}

export default App
