import { useState } from 'react';
import './Counter.scss';
import CounterButton from './CounterButton';
import { ResetButton } from './CounterButton';

export default function Counter() {
    let [count, setCount] = useState(0);

    let handlePlus = (by) => {
        setCount(count + by);
    }

    let handleMinus = (by) => {
        setCount(count - by);
    }

    let handlerReset = () => {
        setCount(0);
    }

    return (
        <div className='counter'>
            <span className='total'>{count}</span>
            <CounterButton by={1} plus={handlePlus} minus={handleMinus} />
            <CounterButton by={2} plus={handlePlus} minus={handleMinus} />
            <CounterButton by={3} plus={handlePlus} minus={handleMinus} />
            <ResetButton reset={handlerReset} />
        </div>
    )
}