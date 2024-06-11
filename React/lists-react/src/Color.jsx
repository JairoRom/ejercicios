import React from 'react'
function Color({color}) {
  return (
    <div>
        <li>
            {color.name}
        </li>
    </div>
  )
}

export default Color