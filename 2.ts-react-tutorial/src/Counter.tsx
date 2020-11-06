import React, { useReducer, useState } from 'react';

type Action ={type : "INCREASE"} | {type : "DECREASE"};

function reducer(state : number,action : Action) : number {
    switch (action.type) {
        case "INCREASE":
            return state + 1;
        case "DECREASE":
            return state - 1; 
        default:
            throw new Error("Unhandled Action");
    }
}
const Counter = () => {
    // const [counter, setCounter] = useState<number>(0);
    const [counter,dispatch] = useReducer(reducer,0);

    const onIncrease = () => dispatch({type : "INCREASE"});
    const onDecrease = () => dispatch({type : "DECREASE"});
    return (
        <div>
            <h1>{counter}</h1>
            <button onClick={onDecrease}>-1</button>
            <button onClick={onIncrease}>+1</button>
        </div>
    );
};

export default Counter;