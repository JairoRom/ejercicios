import { useEffect } from "react"
import { useState } from "react"

function GitHubUser({username}) {
    const [user,setUser]=useState(null)
    useEffect(()=>{
        fetch(`https://api.github.com/users/${username}`)
        .then((respuesta)=>{
            console.log(respuesta);
            return respuesta.json();

        })
        .then((res)=>{
            console.log(res);
            setUser(res)
        })
    },[username])
    
  return (
    <div>
        <div>
            {user && user.login}
        </div>
    </div>
  )
}

export default GitHubUser