import { useContext } from 'react';
import { useEffect, useState } from 'react'
import { LanguageContext } from './Language';

function Reloj() {
    const[date,setDate]=useState(new Date())
    const language=useContext(LanguageContext)
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
        <h3>
          {language ==='en' ? 'Time is:' : 'Son las:'}
          
          {date.toLocaleTimeString()}</h3>
    </div>
  )
}

export default Reloj