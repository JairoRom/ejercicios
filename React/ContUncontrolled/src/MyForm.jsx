import { useState } from "react"

function MyForm() {
    const [username,setUsername]=useState("")
    const [password,setPassword]=useState("")
    function handleUsernameChange(event) {
        const value=event.target.value
        setUsername(value.toUpperCase())
    }
    function handleReset() {
        setUsername("")
        setPassword("")
        
    }
    function handlePassword(event) {
        const passvalue=event.target.value
        setPassword(passvalue)
    }
    
  return (
    <form>
        <input value={username} onChange={handleUsernameChange} />
        <input value={password} onChange={handlePassword} />
        <button onClick={handleReset}>Reset</button> 
    </form>
  )
}

export default MyForm