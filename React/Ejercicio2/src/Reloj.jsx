import { useEffect, useState } from 'react'

function Reloj() {
    const[date,setDate]=useState(new Date())
    useEffect(()=>{
        const intervalID=setInterval(() => {
            setDate(new Date())
        }, 1000);
        return()=>{
          clearInterval(intervalID)
        }
    },[])
  return (
    <div>
        <h3>Time is: {date.toLocaleTimeString()}</h3>
    </div>
  )
}

export default Reloj