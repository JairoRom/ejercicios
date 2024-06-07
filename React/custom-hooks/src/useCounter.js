import { useState } from "react";
export function useCounter(initialValue=0) {
    const[counter,setCount]=useState(initialValue)

    function incrementCounter() {
        setCount((c)=> c + 1)
    }
    function decrementCounter() {
        setCount((c)=> c - 1)
        
    }
    function resetCounter() {
        setCount(initialValue)
    }

    return{
        onCounter : counter,
        onIncrement : incrementCounter,
        onDecrement : decrementCounter,
        onReset : resetCounter

    }
}