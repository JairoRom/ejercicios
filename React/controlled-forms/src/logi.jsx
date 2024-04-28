import React, { useState } from "react";
const obj={
    username:"",
    password:"",
    remember:false
}
export function Logi() {
    const [user,setUser]= useState([]);
    function handleUserChange(event) {
        const nombre =event.target.name;
        const tipo= event.target.type;
        const valor=event.target.value;
        setUser((previousState)=>(
            {
            ...previousState,
            [nombre] : tipo==="checkbox" ? true : valor   
            }
        ))
    }
    // function onLogin(event) {
    //     console.log(user);
    // }
    function onReset() {
        setUser(obj)
    }
    function handleOnSubmit(event) {
        event.preventDefault();
        onLogin(user)
        
    }

    return(
        <form onSubmit={handleOnSubmit}>
            <input name="username" type="text" onChange={handleUserChange} value={user.username}/>
            <input name="password" type="password" onChange={handleUserChange} value={user.password}/>
            <input name="remember" type="checkbox" onChange={handleUserChange} value={user.remember}/>
            <button type="submit" disabled={!user.username || !user.password} >Login</button>
            <button type="button" onClick={onReset} ></button>
            <h2>{JSON.stringify(user)}</h2>
        </form>
    )
    
}
export default Logi