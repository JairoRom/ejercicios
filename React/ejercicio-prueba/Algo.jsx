
import React from 'react'

function Algo({name,children}) {
  return (
    <div>
        {children}
        <h2>{name}</h2>

    </div>
  )
}

export default Algo