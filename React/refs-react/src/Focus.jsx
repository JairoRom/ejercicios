import React, { useEffect, useRef } from 'react'

function Focus() {
    const inputRef =useRef(null)
    useEffect(()=>{
        inputRef.current?.focus()
    },[])

  return (
    <form>
        <input ref={inputRef} type="text" />
    </form>
  )
}

export default Focus