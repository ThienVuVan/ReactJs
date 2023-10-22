import './Counter.scss';

export default function CounterButton({ by, plus, minus }) {
    // let handleplus = () => {
    //     plus(by);
    // }
    // let handleminus = () => {
    //     minus(by);
    // }
    return (
        <div className="counterbutton">
            <button className='button' onClick={() => plus(by)}>+{by}</button>
            <button className='button' onClick={() => minus(by)}>-{by}</button>
        </div>
    )
}

export function ResetButton({ reset }) {
    return (
        <div className='resetbutton'>
            <button className='button' onClick={() => reset()}>Reset</button>
        </div>
    )
}