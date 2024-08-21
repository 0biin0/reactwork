import {useState} from 'react';

const Counter = () => {
    const [count, setCount] = useState(0); //[변수, 변수] = useState(초기값)
    const count2 = 0;
    return (
        <>
            <h1>{count}</h1>
            <button onClick={() => {setCount(count+1)}}>+</button>&emsp; 
            {/* 기존에 들어있던 count 값을 setCount로 넘겨주고 count에 들어있던 값을 1 증가 시켜준다 */}
            <button onClick={() => {setCount(count-1)}}>-</button>
        </>
    )
}

export default Counter;