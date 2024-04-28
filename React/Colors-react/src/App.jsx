import React  from 'react'
import './App.css'
import Colors from './Colors'
import TodoList from './TodoList'


const prueba=[
  {id:1 , name:"blue"},
  {id:2 , name:"green"},
  {id:3 , name:"red"},
  {id:4 , name:"pink"}
]

function App() {

  return (
    <>
    <div >
      <Colors key={0} colorsArr={prueba}
      />
      <TodoList />
    </div>
    </>
  )
}

export default App
