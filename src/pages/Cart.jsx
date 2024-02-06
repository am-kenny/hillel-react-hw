import {useDispatch, useSelector} from "react-redux";
import {decrementQuantity, incrementQuantity, removeFromCart} from "../redux/slices/cartSlice.jsx";

const Cart = () => {
    const {items} = useSelector((state) => state.cart);

    const dispatch = useDispatch();


    const handleDeleteFromCart = (id) => {
        dispatch(removeFromCart(id));
    }

    const handleDecrementQuantity = (id) => {
        dispatch(decrementQuantity(id));
    }

    const handleIncrementQuantity = (id) => {
        dispatch(incrementQuantity(id))
    }

    return (
        <div>
            <ul>
                {items.map((item) => {
                    return <li key={item.id}>
                        {item.name} x{item.quantity}
                        <button onClick={() => handleDeleteFromCart(item.id)}>Remove</button>
                        <button onClick={() => handleDecrementQuantity(item.id)}>-</button>
                        <button onClick={() => handleIncrementQuantity(item.id)}>+</button>
                    </li>
                })}
            </ul>
        </div>
    );
};

export default Cart;