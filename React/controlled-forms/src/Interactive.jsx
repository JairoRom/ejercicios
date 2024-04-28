import React, { useState } from "react";
import Welcome from './Welcome'
import { Logi } from "./logi";

function Interactive({name}) {
    const [name, setNombre] = useState("")
    function handleNombre(event){
        setNombre()
    }
    function onLogin(params) {
        console.log(params);
    }

    return(
        <div>
            <input type="text" value={nombre} onChange={handleNombre}/>
            <Welcome name ={nombre}/>
            <Logi onLogin={onLogin}/>
        </div>
    )
    
}
export default Interactive