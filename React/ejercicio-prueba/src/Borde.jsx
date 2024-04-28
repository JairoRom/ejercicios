import React, { useState } from 'react'

function Borde({title,children}) {
  const[control,setControl]=useState(false)
  function handleToogle() {
    setControl(!control)
    
  }
  return (
    <div>
      <h1>{title}</h1>
      <button onClick={}>Toogle</button>
    </div>
  )
}

export default App