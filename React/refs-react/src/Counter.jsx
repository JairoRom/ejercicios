import { useState,useEffect,useRef } from "react";
import { CounterDisplay } from "./CounterDisplay";


export function Counter({initialValue=0, change=1}) {
    const [counter, setCount]=useState(initialValue)
    const firstcount = useRef(initialValue); //Para hacer el trackeo
    const countRef = useRef(null); //para despues con el useEffect hacer las comparaciones del valor actual y el anterior

    useEffect(() => {
        if (counter > firstcount.current) {
            countRef.current = "up";
        } else if (counter < firstcount.current) {
            countRef.current = "down";
        } else {
            countRef.current = null;
        }

        firstcount.current = counter;
    }, [counter]);

    useEffect(() => {
        if (countRef.current !== null) {
            console.log("Direction changed:", countRef.current);
        }
    }, [countRef.current]);
    //Solo hace print cuando cambia



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