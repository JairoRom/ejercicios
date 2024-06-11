import React from 'react'
import { useState } from 'react';

function TodoList() {
    const [todos, setTodos] = useState([]);
    const [inputVal, setInputValue] = useState('');

   
    const handleChange=(event)=>{
        const inputVal= event.target.value;
        setInputValue(inputVal);
    };
    const handleAñadir=()=>{
        setTodos([...todos,inputVal]);
        setInputValue(''); //Se borra cada vez que añada un input
    }    
    const handleReset=()=>{
        setInputValue('')
    }

    const handleRemoveInput= (data)=>{
        const newTodos =[...todos]; //Se crea la copia del array
        newTodos.splice(data,1);  //Se borra el elemento data
        setTodos(newTodos); //actualiza el array.
    }
    const removeTodoes=(i)=>{
        return()=>handleRemoveInput(i)
    }

    return (
        <div>
            <input type="text" value={inputVal} onChange={handleChange} />
            <button onClick={handleAñadir}> Añadir </button>
            <button onClick={handleReset} > Reset</button>
            <ul>
                {todos.map((todo,i)=>{  //Hacemos que se generen en las ul un map de los todos, que harás las li de los inputs.
                    return(
                    <li key={i}>
                        {todo}
                        <button onClick={removeTodoes(i)}>X</button> 
                        {/* Llamamos la funcion y que borre el elemento i */}
                    </li>);
                })}
            </ul>
        </div>
    )
}

export default TodoList
