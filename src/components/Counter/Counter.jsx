import {useState} from "react";


const Counter = () => {
    const [count, setCount] = useState(0);
    const handleCountDecrement = () => {
        setCount(count - 1)
    }
    const handleCountReset = () => {
        setCount(0)
    }
    const handleCountIncrement = () => {
        setCount(count + 1)
    }

    return (
        <div className={"counter"}>
            <h1>Counter</h1>
            <p>{count}</p>
            <div className={"counter__buttons"}>
                <button className={"counter__button"} onClick={handleCountDecrement}>Decrement</button>
                <button className={"counter__button"} onClick={handleCountReset}>Reset</button>
                <button className={"counter__button"} onClick={handleCountIncrement}>Increment</button>
            </div>
        </div>
    );
}

export default Counter;