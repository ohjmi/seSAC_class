// import React from 'react'; // React 17이후부터는 불필요
import { useState } from 'react';
import CounterResult from './CounterResult';

const Counter = (props) => {
    console.log('Counter 호출, props:', props);

    const [count, setCount] = useState(props.c); // 초기값 0

    const onIncrease = () => {
        setCount(count + 1);
    }
    const onDecrease = () => {
        setCount(count - 1);
    }

    return (
        <div>
            <h2>{count}</h2>
            <button onClick={onIncrease}>+</button>
            <button onClick={onDecrease}>-</button>
            {/* CounterResult라는 컴포넌트를 불러서... 홀수/짝수를 출력하는 컴포넌트를 만드시오 */}
            <CounterResult num = {count} />
        </div>
    )
}

export default Counter;