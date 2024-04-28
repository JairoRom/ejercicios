import React, { useState } from 'react'

function TodoList() {
    const { todoes , setTodo}=useState(["hola","nombre"])
    function handleSubmit(event) {
        event.preventDefault()
    }
  return (
    <div>
        <ul>
           {todoes.map((todo)=>{
                return <li>
                        {todo}
                       </li>
            })}
        </ul>
        <form onSubmit={handleSubmit}>
            <input type="text" />
            <button type='submit'>Submit</button>
        </form>
    </div>
    
  )
}

export default TodoList