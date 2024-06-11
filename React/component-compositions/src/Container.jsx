import React, { useState } from 'react'

function Container({title, children}) {
    const [collapsed,setCollapsed]= useState(false)
    
    function handleToggle() {
        setCollapsed((t)=>!t)
    }

  return (
    <div className='container'>
        <div className='app'>
            {title} <button onClick={handleToggle} >Toogled</button>
        </div>
        <div className={collapsed ? "app-content-hidden" : 'app-content'}>
            {children}
        </div>
    </div>
  )
}

export default Container