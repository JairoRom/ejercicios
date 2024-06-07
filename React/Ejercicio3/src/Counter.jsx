import { useState } from "react";
import { CounterDisplay } from "./CounterDisplay";


export function Counter({initialValue=0, change=1}) {
    

    const [counter, setCount]=useState(initialValue)
    function incrementCounter() {
        setCount((c)=> c + change)
    }
    function decrementCounter() {
        setCount((c)=> c - change)
        
    }
    function resetCounter() {
        setCount(initialValue)
    }
    return(
        <div>
            <CounterDisplay count={counter} />
            <button onClick={incrementCounter}>Increment</button>
            <button onClick={decrementCounter}>Decrement</button>
            <button onClick={resetCounter}>Reset</button>
        </div>
    )
}