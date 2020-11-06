import React, { useState } from 'react';

const Counter = () => {
    const [counter, setCounter] = useState<number>(0);
    const onIncrease = ()=>setCounter(counter+1);
    const onDecrease = () => setCounter(counter-1);
    return (
        <div>
            <h1>{counter}</h1>
            <button onClick={onDecrease}>-1</button>
            <button onClick={onIncrease}>+1</button>
        </div>
    );
};

export default Counter;