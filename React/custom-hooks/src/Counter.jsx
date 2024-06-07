
import { CounterDisplay } from "./CounterDisplay";
import { useCounter } from "./useCounter";
// function useCounter(initialValue=0) {
//     const[counter,setCount]=useState(initialValue)

//     function incrementCounter() {
//         setCount((c)=> c + change)
//     }
//     function decrementCounter() {
//         setCount((c)=> c - change)
        
//     }
//     function resetCounter() {
//         setCount(initialValue)
//     }

//     return{
//         onCounter : counter,
//         onIncrement : incrementCounter,
//         onDecrement : decrementCounter,
//         onReset : resetCounter

//     }
// }


export function Counter({initialValue=0}){

    // const [counter, setCount]=useState(initialValue)

    const { onCounter,onIncrement,onDecrement,onReset} = useCounter(initialValue);
    
    return(
        <div>
            <CounterDisplay count={onCounter} />
            <button onClick={onIncrement}>Increment</button>
            <button onClick={onDecrement}>Decrement</button>
            <button onClick={onReset}>Reset</button>
        </div>
    )
}