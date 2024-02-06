import {useDispatch, useSelector} from "react-redux";
import {decrement, decrementByAmount, increment, incrementByAmount, reset} from "../../redux/slices/counterSlice.jsx";
import {useState} from "react";
import './Counter.css';

const Counter = () => {
    const count = useSelector((state) => state.counter);
    const [inputNumber, setInputNumber] = useState(0);
    const dispatch = useDispatch();

    const handleIncrement = () => {
        dispatch(increment())
    }

    const handleDecrement = () => {
        dispatch(decrement())
    }

    const handleIncrementByFive = () => {
        dispatch(incrementByAmount(5))
    }

    const handleDecrementByFive = () => {
        dispatch(decrementByAmount(5))
    }

    const handleReset = () => {
        dispatch(reset())
    }

    const handleChangeInput = (e) => {
        setInputNumber(+e.target.value)
    }

    return (
        <div className={'counter__container'}>
            <h2 className={'counter__count'}>{count}</h2>
            <div className={'counter__buttons'}>
                <button className={'counter__button'} onClick={handleDecrementByFive}>-5</button>
                <button className={'counter__button'} onClick={handleDecrement}>-1</button>
                <button className={'counter__button'} onClick={handleReset}>Reset</button>
                <button className={'counter__button'} onClick={handleIncrement}>+1</button>
                <button className={'counter__button'} onClick={handleIncrementByFive}>+5</button>
            </div>
            <div className={'counter__custom__input'}>
                <button className={'counter__button'} onClick={() => dispatch(decrementByAmount(inputNumber))}>Decrement</button>
                <input className={'counter__input'} onChange={handleChangeInput} type="number"/>
                <button className={'counter__button'} onClick={() => dispatch(incrementByAmount(inputNumber))}>Increment</button>
            </div>
        </div>
    );
};

export default Counter;