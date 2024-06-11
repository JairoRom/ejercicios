import { useState } from "react"
function createData() {
    return{
        username:'',
        password:'',
        session:false
    }
}

function MyForm() {
    const [data,setData]=useState(createData())
    
    function handleChange(event) {
        const name=event.target.name
        const value=event.target.value
        const checked=event.target.checked
        const type=event.target.type
        setData((d)=>{
            return {
                ...d,
                [name] : type === 'checkbox' ? checked : value
            } 
            
        })
    }
    function handleReset() {
        setData(createData())
    }
    function handleLoginSubmit(event) {
        event.preventDefault()
        console.log('Login button',data);
    }
  return (
    <form onSubmit={handleLoginSubmit}>
        <input name="username" value={data.username} onChange={handleChange} />
        <input name="password" value={data.password} type="password" onChange={handleChange} />
        <input  name="session" type="checkbox" checked={data.session} onChange={handleChange}/>
        <button onClick={handleReset}>Reset</button> 
        <button disabled={!data.password || !data.username} >Login</button> 
        <pre>
            {JSON.stringify(data,null,2)}
        </pre>
    </form>
  )
}

export default MyForm