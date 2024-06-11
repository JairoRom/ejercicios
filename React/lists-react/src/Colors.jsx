import React from 'react'
import Color from './Color'

function Colors({colors}) {
  return (
    <div>
        <ul>
            {colors.map(color=>(
                <Color key={color.id} color={color} />
            ))}
        </ul>
    </div>
  )
}

export default Colors