import { useEffect, useState } from 'react'

function Reloj() {
    const[date,setDate]=useState(new Date())
    useEffect(()=>{
        setInterval(() => {
            setDate(new Date())
        }, 1000);
    },[])
  return (
    <div>
        <h3>Time is: {date.toLocaleDateString()}</h3>
    </div>
  )
}

export default Reloj