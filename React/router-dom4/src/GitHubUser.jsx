import { useEffect } from 'react';
import { useState } from 'react'

function GitHubUser({username}) {
    const [data,setData]=useState("");

    useEffect(()=>{
        fetch(`https://api.github.com/users/${username}`)
    .then((respuesta)=>respuesta.json())
    .then((data)=>setData(data));
    },[username])

  return (
    <div>
        <img src={data.avatar_url} alt="avatar" />
        <h2>{data.name}</h2>
        <h4>{data.login}</h4>
    </div>
  )
}

export default GitHubUser